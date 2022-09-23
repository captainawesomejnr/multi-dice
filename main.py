def on_received_number(receivedNumber):
    if receivedNumber > Dice:
        basic.show_icon(IconNames.SAD)
        basic.pause(2000)
        control.reset()
    elif receivedNumber == Dice:
        basic.show_icon(IconNames.ASLEEP)
        control.reset()
    else:
        basic.show_icon(IconNames.HAPPY)
        basic.pause(2000)
        control.reset()
radio.on_received_number(on_received_number)

def on_button_pressed_ab():
    basic.show_string("EXITING GAME")
    control.reset()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_gesture_shake():
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                # . . . #
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                # . # . #
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
    """)
    basic.show_leds("""
        # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
    """)
    basic.show_leds("""
        # . # . #
                . . . . .
                . . . . .
                . . . . .
                # . # . #
    """)
    basic.show_leds("""
        # . # . #
                . . . . .
                . . # . .
                . . . . .
                # . # . #
    """)
    basic.show_leds("""
        # . # . #
                . . . . .
                # . . . #
                . . . . .
                # . # . #
    """)
    radio.send_number(Dice)
    basic.clear_screen()
    basic.pause(500)
    ShowRoll()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def ShowRoll():
    if Dice == 1:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
    elif Dice == 2:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # . . . #
                        . . . . .
                        . . . . .
        """)
    elif Dice == 3:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # . # . #
                        . . . . .
                        . . . . .
        """)
    elif Dice == 4:
        basic.show_leds("""
            # . . . #
                        . . . . .
                        . . . . .
                        . . . . .
                        # . . . #
        """)
    elif Dice == 5:
        basic.show_leds("""
            # . . . #
                        . . . . .
                        . . # . .
                        . . . . .
                        # . . . #
        """)
    elif Dice == 6:
        basic.show_leds("""
            # . # . #
                        . . . . .
                        . . . . .
                        . . . . .
                        # . # . #
        """)
    elif Dice == 7:
        basic.show_leds("""
            # . # . #
                        . . . . .
                        . . # . .
                        . . . . .
                        # . # . #
        """)
    else:
        basic.show_leds("""
            # . # . #
                        . . . . .
                        # . . . #
                        . . . . .
                        # . # . #
        """)
Dice = 0
# Please change this number as this one is used.
radio.set_group(202)
Dice = randint(1, 8)