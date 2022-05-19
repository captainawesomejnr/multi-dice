radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > Dice) {
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
        music.playMelody("G B A G C5 B A B ", 120)
        music.playTone(440, music.beat(BeatFraction.Double))
        control.reset()
    } else if (receivedNumber == Dice) {
        basic.showIcon(IconNames.Asleep)
        music.playMelody("E B C5 A B G A F ", 120)
        control.reset()
    } else {
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        music.playMelody("C D E F G A B C5 ", 120)
        control.reset()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("EXITING GAME")
    control.reset()
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        # . # . #
        `)
    basic.showLeds(`
        # . # . #
        . . . . .
        . . # . .
        . . . . .
        # . # . #
        `)
    basic.showLeds(`
        # . # . #
        . . . . .
        # . . . #
        . . . . .
        # . # . #
        `)
    basic.clearScreen()
    basic.pause(500)
    if (Dice == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (Dice == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . . . . .
            . . . . .
            `)
    } else if (Dice == 3) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (Dice == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (Dice == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else if (Dice == 6) {
        basic.showLeds(`
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            # . # . #
            `)
    } else if (Dice == 7) {
        basic.showLeds(`
            # . # . #
            . . . . .
            . . # . .
            . . . . .
            # . # . #
            `)
    } else {
        basic.showLeds(`
            # . # . #
            . . . . .
            # . . . #
            . . . . .
            # . # . #
            `)
    }
    basic.clearScreen()
})
let Dice = 0
radio.setGroup(202)
Dice = randint(1, 8)
radio.sendNumber(Dice)
