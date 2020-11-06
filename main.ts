input.onButtonPressed(Button.A, function () {
    for (let numbers = 0; numbers <= 4; numbers++) {
        basic.showNumber(numbers)
    }
    basic.clearScreen()
    basic.showString("Time to eat ")
    amount_of_food = (1 + 2) * 2
    basic.showString("please feed micro pet with")
    basic.showNumber(amount_of_food)
    basic.showString("pieces of food")
    basic.showString("to feed press pin 1")
})
input.onPinPressed(TouchPin.P1, function () {
    for (let food = 0; food <= 6; food++) {
        basic.showNumber(food)
    }
    basic.clearScreen()
    basic.showString("Micro- pet is feeded")
    basic.showIcon(IconNames.Happy)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.clearScreen()
    basic.showString("you scored 1 point ")
    total_points += 1
})
let total_points = 0
let amount_of_food = 0
let counter = 3
while (counter >= 0) {
    basic.showNumber(counter)
    counter += -1
}
basic.clearScreen()
basic.showString("loading ")
let y = 4
for (let x = 0; x <= 4; x++) {
    led.plot(x, y)
    basic.pause(200)
    led.unplot(x, y)
    basic.pause(200)
}
basic.showString("welcome to Micro-Pet ")
let my_image = images.createImage(`
    # . . . #
    # # # # #
    # # . # #
    # . # . #
    . # # # .
    `)
my_image.showImage(0)
music.playMelody("A A A G B B A A ", 120)
basic.clearScreen()
let comand = randint(0, 10)
if (comand == 5 || comand == 1) {
    basic.showString("Micro pet is hungry. Press button A ")
} else {
    basic.showString("press button B")
}
basic.forever(function () {
	
})
