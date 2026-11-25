const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-";

function gerarSenha() {
    const senhaGerada = document.getElementById("pass");
    const tamanho = Number(document.getElementById("carac").value) || 8;
    const vetor = [];

    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        vetor.push(caracteres.charAt(indiceAleatorio));
    }

    senhaGerada.value = vetor.join("");
}

function copiar() {
    const valor = document.getElementById("pass").value;
    if (!valor) return;

    navigator.clipboard.writeText(valor);
    alert("Senha copiada!");
}