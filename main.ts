radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > Dice) {
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
        control.reset()
    } else if (receivedNumber == Dice) {
        basic.showIcon(IconNames.Asleep)
        control.reset()
    } else {
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        control.reset()
    }
})
let Dice = 0
radio.setGroup(202)
Dice = randint(1, 8)
radio.sendNumber(Dice)
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
