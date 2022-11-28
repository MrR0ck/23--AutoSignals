function Green_LED_Lights_on () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    strip.show()
}
function Red_LED_Lights_on () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
}
function Yellow_LED_Lights_on () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    strip.show()
}
let Відлік = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 3, NeoPixelMode.RGB)
basic.forever(function () {
    basic.clearScreen()
    Red_LED_Lights_on()
    basic.pause(1000)
    Відлік = 9
    while (Відлік > 0) {
        basic.showNumber(Відлік)
        basic.pause(800)
        Відлік += -1
    }
    basic.clearScreen()
    Yellow_LED_Lights_on()
    basic.pause(1000)
    Відлік = 3
    while (Відлік > 0) {
        basic.showNumber(Відлік)
        basic.pause(800)
        Відлік += -1
    }
    basic.clearScreen()
    Green_LED_Lights_on()
    basic.pause(1000)
    Відлік = 9
    while (Відлік > 0) {
        basic.showNumber(Відлік)
        basic.pause(800)
        Відлік += -1
    }
})
