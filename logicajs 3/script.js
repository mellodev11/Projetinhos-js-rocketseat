let student = prompt("qual seu nome?")
let p1 = prompt("nota prova 1")
let p2 = prompt("nota prova 2")
let p3 = prompt("nota prova 3")

let result = (Number(p1) + Number(p2) + Number(p3)) /3
result = result.toFixed(2)
if(result >=6){

    alert(student +  " Parabéns você está aprovado" + " Sua nota média foi de: " + result)
} else{
    alert(student + " estude para a prova de recuperação, você está reprovado")
}