let derecha = 0
let izquierda = 0
basic.forever(function () {
    derecha = randint(10, 80)
    izquierda = randint(5, 80)
    cuteBot.motors(izquierda, derecha)
    basic.pause(1000)
})
