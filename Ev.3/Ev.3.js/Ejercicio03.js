function negrita() {
    window.document.execCommand("bold", false, null);
}

function cursiva() {
    window.document.execCommand("italic", false, null);
}

function subrayado() {
    window.document.execCommand("underline", false, null);
}

function alineaIzquierda() {
    window.document.execCommand("justifyLeft", false, null);
}

function alineaDerecha() {
    window.document.execCommand("justifyRight", false, null);
}

function alineaCentro() {
    window.document.execCommand("justifyCenter", false, null);
}

function alineaf() {
    window.document.execCommand("justifyFull", false, null);
}

function listano() {
    window.document.execCommand("insertUnorderedList", false, null);
}

function listaor() {
    window.document.execCommand("insertOrderedList", false, null);
}

function subi() {
    window.document.execCommand("subscript", false, null);
}

function supi() {
    window.document.execCommand("superscript", false, null);
}

function fco() {
    color = prompt("Introduce el color de la fuente:", "");
    window.document.execCommand("foreName", false, null);
}

function bco() {
    color = prompt("Introduce el color de fondo:", "");
    window.document.execCommand("backColor", false, null);
}

function insertarimg() {
    var url = prompt("Introduce la URL de la imagen:", "");
    window.document.execCommand("insertImage", false, imagen);
}

function hipervinculo() {
    var url = prompt("Introduce la URL del hipervínculo:", "http://");
    window.document.execCommand("createLink", false, direccion);
}

function Publicar() {
    var contenido = document.getElementById("contenido").innerHTML;
    document.getElementById("mensajes").innerHTML = contenido;
}
