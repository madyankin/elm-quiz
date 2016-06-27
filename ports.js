/* global Elm */

(function() {
  var app = Elm.Main.fullscreen();

  var RESULTS_KEY = 'results';


  function results() {
    var data = localStorage.getItem(RESULTS_KEY);

    try {
      return JSON.parse(data) || null;
    } catch (e) {
      return null;
    }
  }

  function setResults(data) {
    var value = JSON.stringify(data)
    localStorage.setItem(RESULTS_KEY, value);
  }

  setTimeout(function() {
    app.ports.results.send(results());
  }, 0);

  app.ports.setResults.subscribe(setResults);
}());
