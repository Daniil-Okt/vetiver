function inputPassword() {
    window.onload = function() {
        init();
      }
    function init() {
        const inputs = document.querySelectorAll('input[type="text"]');
        if (inputs.length > 0) {
            inputs.forEach(function(element) {
                var style = window.getComputedStyle(element);
                if (!style.webkitTextSecurity && !style.textSecurity) {
                  element.setAttribute("type", "password");
                }
              });
        }
    }
}

export default inputPassword;