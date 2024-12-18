window.addEventListener("load", () => {
    verifyField();
});

function verifyField() {
    document.getElementById("enviar").addEventListener("click", (event) => {
        event.preventDefault();
        const busca = document.getElementById("busca");
        const erros = document.getElementById("erros");
        const carregando = document.getElementById("carregando");
        
        if (busca.value.trim() === "") {
            const alerta = document.createElement("p");
            alerta.textContent = "Favor informar os dados do livro para realizar a busca!";
            
            erros.innerHTML = "";
            erros.appendChild(alerta);
            busca.focus();

            verifyContent(busca, erros);
        } else {
            enviar.disabled = true;
            carregando.style.display = "block";
            setTimeout(() => {
                carregando.style.display = "none";
                enviar.disabled = false;
                alert("Busca concluída!");
            }, 2000);
        }
    });
}

function verifyContent(busca, erros) {
    busca.addEventListener("change", () => {
        if (erros.innerHTML !== "") {
            erros.innerHTML = "";
        }
    });
}
