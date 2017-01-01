import Deck from "deck";
import Card from "card";
import RemainderPile from "../../app/klondike/piles/remainderPile.js";
import TableauPile from "../../app/klondike/piles/tableauPile.js";
import FoundationPile from "../../app/klondike/piles/foundationPile.js";

describe("A klondike board controller", function () {
  "use strict";

  beforeEach(module("klondike"));

  var scope;
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller("KlondikeController", {$scope: scope});

    expect(scope.game).toBeDefined();
    expect(scope.game.tableaus).toBeDefined();
  }));

  it("should load a new game", function () {
    expect(scope.game).toBeDefined();
    expect(scope.game.tableaus).toBeDefined();
  });

  it("should load the score", function () {
    expect(scope.scoring).toBeDefined();
    expect(scope.scoring.score).toBe(0);
  });
});
