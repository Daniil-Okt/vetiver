function linkAnchor() {
  document.querySelectorAll('a[href^="#anchor-"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          const fullHref = this.getAttribute('href').substring(1);

          const targetId = fullHref.replace(/^anchor-/, '');
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              const header = document.querySelector('header');
              const headerHeight = header ? header.offsetHeight : 0;

              const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

              const offsetPosition = elementPosition - headerHeight - 30;

              window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
              });
          }
      });
  });
}


export default linkAnchor;