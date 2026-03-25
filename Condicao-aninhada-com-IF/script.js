let renda = Number(prompt("Digite sua renda: "));

// ! simbolo de negação
// isNaN: is not number (verifica se não é um número)
if(!isNaN(renda)){
    if (renda >= 3000) {
        let nomeLimpo = prompt("Nome Limpo? (sim ou nao)");
        if (nomeLimpo === "sim") {
            alert("Financeiro aprovado");
        } else {
            alert("Nome negativado");
        }
    } else {
        alert("Renda insuficiente");
    }
}