const alunos = [
    {
        nome: "Cr7",
        nota1: 9.2,
        nota2: 9.9

    },
    {
        nome: "Messi",
        nota1: 9.1,
        nota2: 9.8

    },
    {
        nome: "Mbappe",
        nota1: 7.5,
        nota2: 4.9

    },
    {
        nome: "Neymar",
        nota1: 9.0,
        nota2: 3.1

    }
]

const calcMedia = (nota1,nota2) => {
    return ((nota1 + nota2) /2).toFixed(2)
    
}


for (const media of alunos) {
    if (calcMedia(media.nota1, media.nota2) >7){
        alert(`A média do jogador: ${media.nome} é: ${calcMedia(media.nota1,media.nota2)}
            Parabéns, ${media.nome}!
            Foi o melhor do mundo`)
    }else{
        alert(`A média do jogador: ${media.nome}é: ${calcMedia(media.nota1,media.nota2)}
            Não foi dessa vez, ${media.nome}! 
            Tente novamente ano que vem!
            Não jogou nada esse ano perna de pau `)
    }
}



