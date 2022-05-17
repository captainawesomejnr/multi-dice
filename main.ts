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
function Startup () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
        basic.showLeds(`
            . . # # #
            . . # . #
            # # # # #
            # . # . .
            # # # . .
            `)
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # # #
            . . # . #
            . . # # #
            `)
    }
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
}
input.onGesture(Gesture.Shake, function () {
    Dice = randint(1, 8)
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
    basic.showNumber(Dice)
    radio.sendNumber(Dice)
})
let Dice = 0
radio.setGroup(202)
Startup()
