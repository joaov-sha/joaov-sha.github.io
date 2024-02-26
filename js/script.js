window.addEventListener("load",function(){
    idades = [10,21,31,40];

    this.document.getElementById("01").addEventListener("click",function(){
        um(idades);
    });

    this.document.getElementById("02").addEventListener("click",function(){
        dois(idades);
    });

    this.document.getElementById("03").addEventListener("click",function(){
        tres(idades);
    });

    this.document.getElementById("04").addEventListener("click",function(){
        quatro(idades);
    });

    this.document.getElementById("05").addEventListener("click",function(){
        cinco(idades);
    })

    this.document.getElementById("06").addEventListener("click",function(){
        seis(idades);
    });

    this.document.getElementById("07").addEventListener("click",function(){
        sete(idades);
    });

    this.document.getElementById("08").addEventListener("click",function(){
        oito(idades);
    });
});

function um(idades){
    var somaIdades = (idades) => {
        soma = 0;
        for(i = 0; i < idades.length; i++) soma += idades[i];
        return soma;
    }
    document.write(`<p>Soma das idades = ${somaIdades(idades)}</p>`);
}

function dois(idades){
    var mediaAritmetica = (idades) => {
        media = 0;
        soma = 0;
        for(i = 0; i < idades.length; i++) soma += idades[i];
        media = soma/idades.length;
        return media;
    }
    document.write(`<p>A média aritmética das idades é: ${mediaAritmetica(idades)}</p>`);
}

function tres(idades){
    var maiorIdade = (idades) => {
        maior = Math.max(...idades);
        return maior;
    }
    document.write(`<p>A maior idade é: ${maiorIdade(idades)} .</p>`);
}

function quatro(idades){
    var paridade = (idades) => {
        impar = [];
        for(i = 0; i < idades.length; i++) idades[i]%2!=0?impar.push(idades[i]):console.log(`${idades[i]} não é par`)
        return impar;
    }
    document.write(`<p>As idades ímpares são: ${paridade(idades)}</p>`);
}

function cinco(idades){
    var maior = (idades) => {
        x = 18;
        for(let idade of idades){
            if(idade <= x){
                return false;
            }
        }
        return true;
    }
    if(maior(idades) == true){
        document.write(`<p>É verdadeiro que todas as idades são maiores que 18 anos.</p>`);
    }else{
        document.write(`<p>É falso que todas as idades são maiores que 18 anos.</p>`);
    }
}

function seis(idades){
    valor = parseInt(prompt("Informe um valor que deseja verificar:"));

    var maior = (idades) => {
        for(i = 0; i < idades.length; i++){
            if(idades[i] < valor){
                return false;
            }
        }
        return true;
    }

    if(maior(idades) == false){
        document.write(`<p>É falso que todas as idades sejam maiores que ${valor} anos.</p>`);
    }else{
        document.write(`<p>É verdadeiro que todas as idades sejam maiores que ${valor} anos.</p>`);
    }
}

function sete(idades){
    valor = parseInt(prompt("Informe um valor para que sejam registradas as idades"));

    var maiorQue = (idades) => {
        maior = [];
        for(let idade of idades) idade >= valor ? maior.push(idade):console.log(`${idade} é menor que ${valor}`);
        return maior;
    }
    
    document.write(`A(s) idade(s) que é/são maior(es) ou iguais a ${valor} ano(s) são: ${maiorQue(idades)}`);
}

function oito(idades){
    valor = parseInt(prompt("Informe um valor de idade para que sejam registradas as idades:"));
    calcularMedia = (idades) => {

        media = 0;

        quantidade = 0;

        for(i = 0; i < idades.length; i++){
            if(idades[i] >= valor){
                media += idades[i];
                quantidade++;
            }
        }

        media = media / quantidade;

        return media;
    }
    document.write(`A média das idades das pessoas com idades maiores que ${valor} ano(s) é: ${(calcularMedia(idades)).toFixed(2)} ano(s).`);
}