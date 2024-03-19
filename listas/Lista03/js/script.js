window.addEventListener("load",function(){
    
    this.document.getElementById("tipo").addEventListener("blur",function(){
        clear();
        var tipo = document.getElementById("tipo").value;
        determinarAcao(tipo);
    });
});

determinarAcao = tipo => {
    fetch(`https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json`)
    .then(response => response.json())
    .then(conteudo =>{
        switch (tipo) {
            case "1":
                console.log(tipo);
                conteudo.forEach(elemento => {
                    p = document.createElement(`p`);
                    criarElemento(elemento);
                });
                break;
            case "2":
                    console.log(tipo);
                    conteudo.forEach(elemento => {
                        p = document.createElement(`p`);
                        if(elemento.sexo == "M"){
                            criarElemento(elemento);
                        }
                    });
                break;
            case "3":
                    console.log(tipo);
                    conteudo.forEach(elemento => {
                        p = document.createElement(`p`);
                        if(elemento.sexo == "F"){
                            criarElemento(elemento);
                        }
                })
                break;
            case "4":
                    console.log(tipo);
                    conteudo.forEach(elemento => {
                        p = document.createElement(`p`);
                        if((elemento.notaBim1 + elemento.notaBim2) >= 60.0){
                            criarElemento(elemento);
                        }
                    });
                break;
            case "5":
                    console.log(tipo);
                    conteudo.forEach(elemento => {
                        p = document.createElement(`p`);
                        if((elemento.notaBim1 + elemento.notaBim2) < 60.0){
                            criarElemento(elemento);
                        }
                    });
                break;
            case "6":
                    break;
            case "7":
                    console.log(tipo);
                    nota = conteudo.reduce((acumulador, elemento) =>{
                        return acumulador + elemento.notaBim1 + elemento.notaBim2;
                    },0);

                    alunos = conteudo.length;

                    media = nota/alunos;

                    p = document.createElement(`p`);

                    p.textContent = `${media.toFixed(1)}`;

                    document.getElementById("resposta").appendChild(p);
                    
        }
    })
}

function clear() {
    document.getElementById("resposta").innerHTML = "";
}

function criarElemento(elemento){
    p.textContent = `${elemento.nome}: ${(elemento.notaBim1).toFixed(1)} (bimestre 1) e ${(elemento.notaBim2).toFixed(1)} (bimestre 2) = ${(elemento.notaBim1 + elemento.notaBim2).toFixed(1)}`;
    document.getElementById("resposta").appendChild(p);
}