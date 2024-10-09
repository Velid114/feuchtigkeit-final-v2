input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (feuchtigkeit <= 10) {
        basic.setLedColor(0x0000ff)
    } else if (feuchtigkeit > 120 && feuchtigkeit < 400) {
        basic.setLedColor(0xff0000)
    } else {
        basic.setLedColor(0x00ff00)
    }
    basic.showNumber(feuchtigkeit)
})
let feuchtigkeit = 0
basic.setLedColor(0xffff00)
basic.forever(function () {
    feuchtigkeit = pins.analogReadPin(AnalogPin.P1)
})
