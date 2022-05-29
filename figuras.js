//codigo del cuadrado

console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los Lados del Cuadrado miden:" + ladoCuadrado+"cm");


function perimetroCuadrado(lado) {
   return lado * 4;
} 
// console.log("El Perimetro del cuadrado es:" + perimetroCuadrado+"cm");

function areaCuadrado (lado) {
    return lado * lado;
}
//console.log("El Area cuadrado es:" + areaCuadrado+"cm2");

console.groupEnd();



console.group("Triangulos");
//codigo del triangulo

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log(
  //  "Los Lados del triángulo miden:" 
    //+ ladoTriangulo1 
    //+ "cm, "
   // + ladoTriangulo2 
   // + "cm, "
   // + baseTriangulo
   // + "cm"
//);
//function alturaTriangulo = 5.5;
//console.log("La Altura del triangulo es de: " + alturaTriangulo);

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}

//console.log( "El perimetro del triangulo es de:" + perimetroTriangulo+"cm")

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}

//console.log ("El Área del triangulo es de:" + areaTriangulo + "cm2")

console.groupEnd;

console.group("Circulos");
//codigo del Circulo

//const radioCirculo = 4;
//console.log ("El radio del circulo es de:" + radioCirculo + "cm")

//const diametroCirculo = radioCirculo * 2;
//console.log ("El diametro del circulo es de:" + diametroCirculo + "cm")

function diametroCirculo (radio) {
return radio * 2;
}


const PI = Math.PI;
console.log ("El valor de PI es de :" + PI)

function perimetroCirculo (radio) {
const diametro = diametroCirculo(radio);
return diametro * PI;
}


//console.log ("El perimetro del circulo es de:" + perimetroCirculo + "cm")

//const areaCirculo = (radioCirculo * radioCirculo) * PI;

function areaCirculo (radio){
    return (radio*radio)* PI;
}

//console.log ("El area del circulo es de:" + areaCirculo+ "cm2")

console.groupEnd;

// interaccion

function calcularPerimetroCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert (perimetro);

}
function calcularAreaCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert (area);
}

