//% weight=70 icon="\u30A2" color=#EC7505 block="赤外線"
namespace irc {
  //% blockId=show_strings block="テスト"
  export function getir(): void {
    basic.showLeds(`
      . . . . .
      . # . # .
      . . . . .
      # . . . #
      . # # # .
    `);
  }
}