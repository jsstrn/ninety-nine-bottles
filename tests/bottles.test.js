const bottles = require("../src/bottles");

describe("99 Bottles of Beer", () => {
  it("returns the correct verse when there are 99 bottles on the wall", () => {
    expect(bottles.verse(99)).toBe(
      `99 bottles of beer on the wall, 99 bottles of beer.\nTake one down, pass it around, 98 bottles of beer on the wall... `
    );
  });

  it("returns the correct verse when there are 27 bottles on the wall", () => {
    expect(bottles.verse(27)).toBe(
      `27 bottles of beer on the wall, 27 bottles of beer.\nTake one down, pass it around, 26 bottles of beer on the wall... `
    );
  });

  it("returns correct verse when there is 1 bottle on the wall", () => {
    expect(bottles.verse(1)).toBe(
      `1 bottle of beer on the wall, 1 bottle of beer.\nTake it down, pass it around, no more bottles of beer on the wall... `
    );
  });

  it("returns correct verse when there are no more bottles of beer on the wall", () => {
    expect(bottles.verse(0)).toBe(
      `No more bottle of beer on the wall, no more bottle of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall...`
    );
  });
});
