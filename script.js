function calcular(event){
    
    event.preventDefault();

    var imc;
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resultado = document.getElementById("resultado");

    imc = peso / (altura * altura);

    if(imc < 18.5){
        resultado.innerHTML = "<br> Seu resultado foi: " + imc + " kg/m2" + "<br> Cuidado, você está muito abaixo do peso!"
    }else if(imc >= 18.5 && imc <= 24.99){
        resultado.innerHTML = "<br> Seu resultado foi: " + imc + " kg/m2" + "<br> Peso normal!"
    }else if(imc >= 25 && imc <= 29.99){
        resultado.innerHTML = "<br> Seu resultado foi: " + imc + " kg/m2" + "<br> Cuidado, você está com excesso de peso!"
    }else if(imc >= 30 && imc <= 34.99){
        resultado.innerHTML = "<br> Seu resultado foi: " + imc + " kg/m2" + "<br> Cuidado, você está com obesidade grau I!"
    }else if(imc >= 35 && imc <= 39.99){
        resultado.innerHTML = "<br> Seu resultado foi: " + imc + " kg/m2" + "<br> Cuidado, você está com obesidade grau II!"
    }else if(imc >= 40){
        resultado.innerHTML = "<br> Seu resultado foi: " + imc + " kg/m2" + "<br> Cuidado, você está com obesidade grau III!"
    }

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}