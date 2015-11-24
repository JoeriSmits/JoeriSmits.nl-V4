/**
 * Copyright JoeriSmits.nl 2015
 */
(function(){
    /**
      * Conditionally load of webcomponentsJS
      */
    var webComponentsSupport = (
          'registerElement' in document &&
          'import' in document.createElement('link') &&
          'content' in document.createElement('template'));

    if(!webComponentsSupport) {
        var script = document.createElement('script');
        script.async = true;
        script.src = 'bower_components/webcomponentsjs/webcomponents-lite.min.js';
        document.head.appendChild(script);
    } else {
        setTimeout(function() {
            if (window.HTMLImports) {
                window.CustomElements.elapsed = window.CustomElements.readyTime - window.HTMLImports.readyTime;
            }
            document.dispatchEvent(new CustomEvent('WebComponentsReady', {
                bubbles: true
            }));
        });
    }
})()