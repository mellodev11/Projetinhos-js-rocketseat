let option;
let items = [];

while (option != 3) {

    option = Number(prompt(`Olá usuário! Digite o número da opção desejada:
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa`))


    //CASO COM SWITCH
    switch (option) {
        case 1:
            let item = prompt("Digite um item na lista")
            items.push(item)
            break;
        case 2: if (items.length == 0) {
            alert("Não existem itens cadastrados")
        } else {
            alert(items)
        }


            break;
        case 3:
            alert("tchau")

            break;

        default:alert("opção invalida"
        )
            break;
    }


//CASO COM IF E ELSE
    // if (option == 1) {
    //     let item = prompt("Digite um item na lista")
    //     items.push(item)

    // }
    // else if (option == 2) {

    //     if (items.length == 0) {
    //         alert("Não existem itens cadastrados")
    //     } else {
    //         alert(items)
    //     }
    // }
    // else {
    //     alert("tchau")
    // }











}
// console.log(option, items)