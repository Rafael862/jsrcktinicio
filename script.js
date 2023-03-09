let numberOne  = prompt('Digite um número')
let numberTwo  = prompt('Digite outro número')

alert(`A soma destes números é: ${Number(numberOne) + Number(numberTwo)}`)
alert(`A subtração destes números é: ${numberOne - numberTwo}`)
alert(`A multiplicação destes números é: ${numberOne * numberTwo}`)
alert(`A divisão destes números é: ${numberOne / numberTwo}`)
alert(`O resto destes números é: ${numberOne % numberTwo}`)
let soma = Number(numberOne) + Number(numberTwo)
let resto = soma % 2

if(resto == 0){
    alert(`A soma dos 2 números é par: ${soma}`)
}else {
    alert(`A soma dos 2 números é ímpar: ${soma}`)
}
if(numberOne === numberTwo){
    alert('Os números inseridos são iguais')
} else {
    alert('Os números inseridos são diferentes')
}
