function encriptar() {
    var frase = document.getElementById("decryptedText").value.toLowerCase();
    document.getElementById("decryptedText").value = "";
    document.getElementById("decryptedText").focus();

        document.getElementById("notShow").style.display = "show";
        document.getElementById("notShow").style.display = "inherit";
  
        var textoEncriptado = frase.replace(/e/img,"enter");
        var textoEncriptado = textoEncriptado.replace(/i/img,"imes");
        var textoEncriptado = textoEncriptado.replace(/a/img,"ai");
        var textoEncriptado = textoEncriptado.replace(/o/img,"ober");
        var textoEncriptado = textoEncriptado.replace(/u/img,"ufat");

        document.getElementById("encryptedText").innerHTML = textoEncriptado;
        document.getElementById("notShow").style.display = "none";
        document.getElementById("encryptedText").style.display = "show";
        document.getElementById("encryptedText").style.display = "inherit";
        document.getElementById("copyButton").style.display = "show";
        document.getElementById("copyButton").style.display = "inherit";


}

function desencriptar() {
    var frase = document.getElementById("decryptedText").value.toLowerCase();
    document.getElementById("decryptedText").value = "";
    document.getElementById("decryptedText").focus();

    var textoEncriptado = frase.replace(/enter/img,"e");
    var textoEncriptado = textoEncriptado.replace(/imes/img,"i");
    var textoEncriptado = textoEncriptado.replace(/ai/img,"a");
    var textoEncriptado = textoEncriptado.replace(/ober/img,"o");
    var textoEncriptado = textoEncriptado.replace(/ufat/img,"u");

    document.getElementById("encryptedText").innerHTML = textoEncriptado;
    document.getElementById("notShow").style.display = "none";


}

function copiar() {
    var contenido = document.querySelector("#encryptedText");
    contenido.select();
    document.execCommand("copy")
}