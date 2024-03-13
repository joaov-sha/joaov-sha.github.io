window.addEventListener("load",function(){
    vetor = [10,21,31,40];

    this.document.getElementById("01").addEventListener("click",function(event){
        event.preventDefault();
        document.write(`A soma dos elementos contidos no vetor é: ${soma(vetor)}`);
    });

    this.document.getElementById("02").addEventListener("click",function(event){
        event.preventDefault();
        document.write(`A média aritmética dos elementos contidos no vetor é: ${media(vetor).toFixed(2)}`);
    });

    this.document.getElementById("03").addEventListener("click",function(event){
        event.preventDefault();
    });

    this.document.getElementById("04").addEventListener("click",function(event){
        event.preventDefault();
        document.write(`Os números ímpares contidos no vetor são: ${impar(vetor)}`);
    });

    this.document.getElementById("05").addEventListener("click",function(event){
        event.preventDefault();
        maioridade(vetor);
    });

    this.document.getElementById("06").addEventListener("click",function(event){
        event.preventDefault();
        if(verificarMaioridade(vetor) == true){
            document.write(`Todos os elementos são maiores que a idade informada`);
        }else{
            document.write(`Nem todos os elementos || Nenhum dos elementos contidos no vetor são maiores que 18`);
        }
    });

    this.document.getElementById("07").addEventListener("click",function(event){
        event.preventDefault();
        numeros = exibirIdades(vetor);
        document.write(`Os seguintes números são maiores que o número informado: ${numeros}`);
    });

    this.document.getElementById("08").addEventListener("click",function(event){
        event.preventDefault();
        teste = verificarMediaIdades(vetor);
        document.write(`A média das idades acima da idade informada anteriormente é: ${teste}`);
    });
});

// Utilizado o método forEach onde é percorrido cada um dos elementos do vetor e depois executado uma ação sobre, no caso a soma do valor dos elementos ao total

soma = (vet) => {
    total = 0;
    vet.forEach((elemento) => total += elemento);
    return total;
}

// Utilizado o método reduce para calcular a média dos elementos do vetor

media = (vet) => {
    total = vet.reduce((acumulador, valorAtual) => acumulador + valorAtual,0);
    return total/vet.length;
}

// ehMaior = (vet) => {
//     valorInicial = 0;
//     maior = vet.filter((elemento,valorInicial) => elemento > valorInicial);
// }

impar = (vet) => {
    impares = [];
    vet.filter((elemento,index) => (elemento % 2 != 0)?impares.push(vet[index]):"");
    return impares;
}

maioridade = (vet) => {
    afirmacao = vet.every((elemento) => (elemento >= 18)?document.write(`Todos os elementos contidos no vetor são maiores que 18`):document.write(`(Nem todos os || Nenhum dos) elementos contidos no vetor são maiores que 18`));
    return afirmacao;
}

verificarMaioridade = (vet) => {
    verificador = parseInt(prompt("Digite uma idade para verificarmos se todas as idades contidas no vetor são maiores ou iguais a ela:"));
    
    afirmacao = vet.every((elemento) => (elemento >= verificador));
    
    return afirmacao;
}

exibirIdades = (vet) => {
    verdade = [];
    verificador = parseInt(prompt("Digite uma idade para verificarmos se todas as idades contidas no vetor são maiores ou iguais a ela:"));
    afirmacao = vet.every((elemento,index) => (elemento >= verificador)?verdade.push(vet[index]):"");
    return verdade;
}

verificarMediaIdades = (vet) => {
    verificador = parseInt(prompt("Digite uma idade para verificarmos se todas as idades contidas no vetor são maiores ou iguais a ela:"));
    idade = 0;
    contador = 0;
    vet.forEach((elemento) => (elemento >= verificador)?(idade += elemento) && contador++ :"");
    return idade/contador;    
}