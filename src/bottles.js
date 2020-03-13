const verse = quantity => {
  switch (quantity) {
    case 0:
      return `No more bottle of beer on the wall, no more bottle of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall...`;
    case 1:
      return `1 bottle of beer on the wall, 1 bottle of beer.\nTake it down, pass it around, no more bottles of beer on the wall... `;
    default:
      return `${quantity} bottles of beer on the wall, ${quantity} bottles of beer.\nTake one down, pass it around, ${quantity -
        1} bottles of beer on the wall... `;
  }
};

const song = quantity => {
  const lyrics = [];
  for (let bottles = quantity; bottles >= 0; bottles--) {
    lyrics.push(verse(bottles));
  }
  return lyrics;
};

const bottles = {
  verse,
  song
};

module.exports = bottles;
