input.onButtonPressed(Button.A, function () {
    basic.setLedColor(0x007fff)
})
input.onButtonPressed(Button.AB, function () {
    basic.turnRgbLedOff()
})
input.onButtonPressed(Button.B, function () {
    basic.setLedColor(0x7f00ff)
})
basic.showString("Hallo Line!")
basic.pause(100)
basic.showIcon(IconNames.Heart)
basic.pause(1000)
music.playMelody("C D E F G F E D ", 120)
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(200)
}
basic.forever(function () {
	
})
