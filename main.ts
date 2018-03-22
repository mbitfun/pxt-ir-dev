//% weight=70 icon="\u30A2" color=#EC7505 block="赤外線"
namespace katakana {
  //% blockId=show_strings block="テスト %v"
  export function showString(text: string, time: number = 500): void {
    basic.showLeds(`
      . . . . .
      . # . # .
      . . . . .
      # . . . #
      . # # # .
    `);
  }
}
