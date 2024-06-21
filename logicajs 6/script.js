let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 3)

let xAttempts = 1

while(Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente:")
  xAttempts++
}

//DESAFIO IF E ELSE FEITO

if (xAttempts == 1) {
    
alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou com ${xAttempts} tentativa`)
    
} else {
    
    alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou o número em ${xAttempts} tentativas`)
}
// alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou o número em ${xAttempts} tentativas`)