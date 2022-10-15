let input = require('fs').readFileSync('stdin', 'utf8')
let lines = input.split('\n')

let interGol = 0
let gremioGol = 0
let newGrenal = 1
let amountGrenais = 0
let draw = 0
let chapion
let winInter = 0
let winGremio = 0

app()

function getValue() {

    let [interGolText, gremioGolText] = lines.shift().split(" ")

    interGol = parseInt(interGolText)
    gremioGol = parseInt(gremioGolText)

}

function menu() {

    console.log('Novo grenal (1-sim 2-nao)')
    newGrenal = Number(lines.shift().split('\n'))

    if (newGrenal !== 2) {
        getValue()

    }

    return newGrenal

}

function calculatorResult() {

    if (interGol === gremioGol) draw += 1

    if (interGol > gremioGol) {
        winInter += 1
    }
    else { winGremio += 1 }


    if (newGrenal === 1) {
        amountGrenais += 1
    }

}

function result() {

    chapion = winInter > winGremio ?
        'Inter venceu mais' :
        'Gremio venceu mais'

    console.log(`${amountGrenais} grenais`)
    console.log(`Inter:${winInter}`)
    console.log(`Gremio:${winGremio}`)
    console.log(`Empates:${draw}`)
    console.log(`${chapion}`)
}

function app() {


    let [interGolText, gremioGolText] = lines.shift().split(" ")

    interGol = parseInt(interGolText)
    gremioGol = parseInt(gremioGolText)

    while (newGrenal !== 2) {
        calculatorResult()
        menu()


    }

    result()

}