

function click(){
    var idiv = document.createElement('div');
    idiv.innerHTML = "<p> I am a div </p>"
    document.getElementById("parent").appendChild(idiv);
}