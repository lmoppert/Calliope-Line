input.onButtonPressed(Button.A, function () {
    basic.setLedColor(0x007fff)
})
input.onButtonPressed(Button.AB, function () {
    basic.turnRgbLedOff()
})
input.onButtonPressed(Button.B, function () {
    basic.setLedColor(0x7f00ff)
})
basic.showString("Hallo Line und Tim!")
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
music.playMelody("G F E D C D E F ", 120)
basic.setLedColor(Colors.Red)
basic.pause(1000)
basic.setLedColor(Colors.Yellow)
basic.pause(1000)
basic.setLedColor(Colors.Blue)
basic.pause(1000)
basic.setLedColor(Colors.Green)
music.playMelody("F E D E D C D E ", 120)
music.playMelody("F C A G F G D D ", 120)
music.playMelody("C F C F G E F E ", 120)
basic.forever(function () {
	
})
