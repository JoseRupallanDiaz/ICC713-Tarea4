function buhoMas(id){
    document.getElementById(id).innerHTML = "Los buhos tambien pueden rotar sus cabezas hasta 270 grados.";
}

function cambiarFoto(id){
    const element = document.getElementById(id);
    element.src = "./img/atardecer2.jpg";
    element.style.maxHeight = "232.88px";
    element.style.width = "auto";
}

function cambioLetra(id){
    const element = document.getElementById(id);
    element.style.fontFamily = '"Comic Sans MS", "Comic Sans"';
    element.style.backgroundColor = "red";
}

function formSubmit(){
    console.log(document.getElementById("name").value);
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("yearsold").value);
    console.log(document.getElementById("city").value);
    console.log(document.getElementById("check").checked);
}