import angular from "angular";
import "klondike/klondike.js"
import "ngDraggable";


angular.module("solitaire", ["klondike", "ngDraggable"]);

angular.element(document).ready(() => {
  angular.bootstrap(document, ["solitaire"]);
});
