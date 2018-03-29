let r = 0
let list: number[] = []
function send()  {
    for (let i = 0; i <= list.length - 1; i++) {
        //Generate flashing signal
        if (i % 2 == 1) {
            //LED turns off
            control.waitMicros(list[i])
        } else {
            //LED flashes at 38 kHz cycle
            r = list[i]
            while (r > 26) {
                pins.digitalWritePin(DigitalPin.P0, 1)
                control.waitMicros(2)
                pins.digitalWritePin(DigitalPin.P0, 0)
                r = r - 26
            }
        }
    }
}
// Press button A to turn it on
input.onButtonPressed(Button.A, () => {
    list = [2550, 2550, 850, 850, 850, 850, 850, 1912, 850, 1912, 850, 1912, 850, 1912, 850, 850, 850, 850, 850, 54400, 2550, 2550, 850, 850, 850, 850, 850, 1912, 850, 1912, 850, 1912, 850, 1912, 850, 850, 850, 850, 850]
    send()
    basic.showString("ON")
})
// Press button B to turn it off
input.onButtonPressed(Button.B, () => {
    list = [2550, 2550, 850, 850, 850, 1912, 850, 850, 850, 850, 850, 1912, 850, 850, 850, 1912, 850, 1912, 850, 54400, 2550, 2550, 850, 850, 850, 1912, 850, 850, 850, 850, 850, 1912, 850, 850, 850, 1912, 850, 1912, 850]
    send()
    basic.showString("OFF")
})
