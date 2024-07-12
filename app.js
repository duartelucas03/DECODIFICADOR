let msginicial_titulo = 'Nenhuma mensagem encontrada'
let msginicial_p = 'Digite um texto que você deseja criptografar ou descriptografar.'

function desapear(){
    document.getElementById("msg_i").style.display = "none";
    document.getElementById("msg_i2").style.display = "none";
    document.getElementById("lupa").style.display = "none";
    document.getElementById('copiar').style.display = 'flex';
    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('mi_rf').style.justifyContent = 'space-between'
}

function verificaEntrada(texto) {
    return /^[a-z\s]+$/.test(texto);
}

function criptografar() {
    let text = document.querySelector('textarea').value
    
    if (verificaEntrada(text)){
        desapear()
        text = text.replace(/e/g, "enter");
        text = text.replace(/i/g, "imes");
        text = text.replace(/a/g, "ai");
        text = text.replace(/o/g, "ober");
        text = text.replace(/u/g, "ufat");
        exibirTextoNaTela('resultado', text)
        document.getElementById('copiar').removeAttribute('disabled')
    }
}

function descriptografar() {    
    let text = document.querySelector('textarea').value

    if (verificaEntrada(text)){
        desapear()
        text = text.replace(/enter/g, "e");
        text = text.replace(/imes/g, "i");
        text = text.replace(/ai/g, "a");
        text = text.replace(/ober/g, "o");
        text = text.replace(/ufat/g, "u");
        exibirTextoNaTela('resultado', text)
        document.getElementById('copiar').removeAttribute('disabled')
    }
}

function exibirTextoNaTela(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('msg_i', msginicial_titulo);
    exibirTextoNaTela('msg_i2', msginicial_p);
}

exibirMensagemInicial()

function copiar() {
    let texto = document.getElementById('resultado').innerText;
    navigator.clipboard.writeText(texto);
}

