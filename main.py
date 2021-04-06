def on_button_pressed_a():
    basic.set_led_color(0x007fff)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.turn_rgb_led_off()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.set_led_color(0x7f00ff)
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_string("Hallo Line!")
basic.pause(100)
basic.show_icon(IconNames.HEART)
basic.pause(1000)
music.play_melody("C D E F G F E D ", 120)
for index in range(4):
    basic.show_leds("""
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        """)
    basic.pause(200)
    basic.show_leds("""
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        """)
    basic.pause(200)

def on_forever():
    pass
basic.forever(on_forever)
