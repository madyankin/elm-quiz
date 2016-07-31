/* global Elm */

(function() {
  var app = Elm.Main.fullscreen();

  var RESULTS_KEY = 'results';
  var HELP_KEY    = 'help';


  function get(key) {
    var data = localStorage.getItem(key);

    try {
      return JSON.parse(data) || null;
    } catch (e) {
      return null;
    }
  }


  function set(key) {
    return function(data) {
      var value = JSON.stringify(data)
      localStorage.setItem(key, value);
    }
  }


  setTimeout(function() {
    app.ports.results.send(get(RESULTS_KEY));
    app.ports.help.send(get(HELP_KEY));
  }, 0);

  app.ports.setResults.subscribe(set(RESULTS_KEY));
  app.ports.setHelp.subscribe(set(HELP_KEY));
}());
