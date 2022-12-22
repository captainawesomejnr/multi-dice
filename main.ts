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
input.onButtonPressed(Button.AB, function () {
    basic.showString("EXITING GAME")
    control.reset()
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
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
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            . . . . .
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
    }
    radio.sendNumber(Dice)
    basic.clearScreen()
    basic.pause(500)
    ShowRoll()
})
function ShowRoll () {
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
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            . . . . .
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
}
let Dice = 0
// Please change this number as this one is used.
radio.setGroup(202)
Dice = randint(1, 8)
