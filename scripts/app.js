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
    }
})()