const numberOne = Number(prompt('Digite o primeiro número'))
const numberTwo = Number(prompt('Digite o segundo número'))

const som = numberOne + numberTwo
const subtraction = numberOne - numberTwo
const multiplication = numberOne * numberTwo
const division = numberOne / numberTwo
const rest = numberOne % numberTwo
//PRIMEIRA FORMA DE FAZER COM STRING LITERALS
// alert(`A soma dos valores é: ${som}
//     a subtração é ${subtraction}
//     a multiplicação é ${multiplication}
//     a divisão é ${division}
//     e o resto da divisão é ${rest}`)

//FORMA DO EXERCÍCIO PEDIDO
   alert(`A soma é :${som}`) 
   alert(`A subtração é :${subtraction}`) 
   alert(`A multiplicação é :${multiplication}`) 
   alert(`A divisão é :${division}`) 
   alert(`O resto da divisão é :${rest}`) 
   
if (numberOne === numberTwo){
alert("Números iguais")
} else{
    alert("Números diferentes")
}
    
    

if (som %2 == 0){
    alert("O número é par")
}else{
    alert("O número é impar")
}