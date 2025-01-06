class Tabs {
  direction = null;

  errors = {
    selectorNotExist: 'Селектор data-tabs не существует',
    duplicateTabs: 'Количество элементов с одинаковым data-tabs больше одного',
    mismatch: 'Количество кнопок и количество панелей не совпадает',
  };

  constructor(selector, options = {}) {
    const defaultOptions = {
      tabsName: selector,
      defaultTab: 0,
      onChanged: () => {},
      onLoaded: () => {},
      onTabHover: () => {},
      onResize: () => {},
    };

    this.options = Object.assign(defaultOptions, options);
    this.selector = selector;
    this.tabs = document.querySelector(`[data-tabs="${selector}"]`);

    if (!this.tabs) {
      console.error(this.errors.selectorNotExist);
      return;
    }

    this.tabsNav = this.tabs.querySelector(':scope > .tabs__nav');
    this.tabsContent = this.tabs.querySelector(':scope .tabs__content');
    this.triggers = this.tabsNav.querySelectorAll(':scope .tabs__trigger');
    this.panels = this.tabsContent.querySelectorAll(':scope > .tabs__panel');

    this.#check();
    this.#init();
    this.#events();
  }

  #check() {
    if (this.isTabsUnique()) {
      console.error(this.errors.duplicateTabs);
    }

    if (this.triggers.length !== this.panels.length) {
      console.error(this.errors.mismatch);
    }
  }

  isTabsUnique() {
    const tabs = document.querySelectorAll(`[data-tabs="${this.selector}"]`);
    return tabs.length > 1;
  }

  #init() {
    const { tabsName, defaultTab } = this.options;

    this.tabsNav.setAttribute('role', 'tablist');

    this.triggers.forEach((trigger, i) => {
      const isActive = trigger.classList.contains('active');
      trigger.setAttribute('role', 'tab');
      trigger.setAttribute('aria-controls', `${tabsName}_${i + 1}`);
      trigger.setAttribute('tabindex', '-1');
      trigger.setAttribute('id', `${tabsName}_${i + 1}`);
      if (!isActive) {
        trigger.classList.remove('active');
      }
    });

    this.panels.forEach((panel, i) => {
      const isActive = panel.classList.contains('active');
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('tabindex', '-1');
      panel.setAttribute('aria-labelledby', this.triggers[i].id);
      if (!isActive) {
        panel.classList.remove('active');
      }
    });

    // Если активный элемент уже задан, приоритет у него
    const initialActiveTab = [...this.triggers].findIndex((trigger) => trigger.classList.contains('active'));
    const activeTabIndex = initialActiveTab !== -1 ? initialActiveTab : defaultTab;

    // Устанавливаем активное состояние на основе `activeTabIndex`
    this.triggers[activeTabIndex]?.classList.add('active');
    this.triggers[activeTabIndex]?.removeAttribute('tabindex');
    this.triggers[activeTabIndex]?.setAttribute('aria-selected', 'true');
    this.panels[activeTabIndex]?.classList.add('active');
  }

  #events() {
    this.options.onLoaded(this);

    this.triggers.forEach((trigger) => {
      trigger.addEventListener('click', ({ currentTarget }) => {
        const currentTab = this.tabsNav.querySelector('[aria-selected]');

        if (currentTarget !== currentTab) {
          this.switchTabs(currentTarget, currentTab);
        }
      });

      trigger.addEventListener('keydown', ({ currentTarget, which }) => {
        const currentTabIndex = this.getIndex(this.triggers, currentTarget);

        switch (which) {
          case 37: // Arrow Left
            this.direction = currentTabIndex - 1;
            break;
          case 39: // Arrow Right
            this.direction = currentTabIndex + 1;
            break;
          case 40: // Arrow Down
            this.direction = 'down';
            break;
          default:
            this.direction = null;
            break;
        }

        if (this.direction === 'down') {
          this.panels[currentTabIndex].focus();
        } else if (this.triggers[this.direction]) {
          this.switchTabs(this.triggers[this.direction], currentTarget);
        }
      });

      trigger.addEventListener('mouseenter', ({ currentTarget }) => {
        this.options.onTabHover({
          currentTarget,
          tabsContent: this.tabsContent,
        });
      });
    });

    window.addEventListener('resize', (event) => {
      this.options.onResize(event);
    });
  }

  switchTabs(nextTab, currentTab) {
    const nextIndex = this.getIndex(this.triggers, nextTab);
    const currentIndex = this.getIndex(this.triggers, currentTab);

    nextTab?.focus();
    nextTab?.removeAttribute('tabindex');
    nextTab?.setAttribute('aria-selected', 'true');

    currentTab?.removeAttribute('aria-selected');
    currentTab?.setAttribute('tabindex', '-1');

    this.removeClass(this.panels[currentIndex]);
    this.addClass(this.panels[nextIndex]);

    this.removeClass(this.triggers[currentIndex]);
    this.addClass(this.triggers[nextIndex]);

    this.options.onChanged({
      data: this,
      nextTab,
      currentTab,
      nextIndex,
      currentIndex,
      nextPanel: this.panels[nextIndex],
      currentPanel: this.panels[currentIndex],
    });
  }

  getIndex(array, element) {
    return Array.prototype.indexOf.call(array, element);
  }

  addClass(element) {
    element?.classList.add('active');
  }

  removeClass(element) {
    element?.classList.remove('active');
  }
}

export default Tabs;
