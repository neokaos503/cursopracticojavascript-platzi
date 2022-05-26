//codigo del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los Lados del Cuadrado miden:" + ladoCuadrado+"cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El Perimetro del cuadrado es:" + perimetroCuadrado+"cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El Area cuadrado es:" + areaCuadrado+"cm2");

console.groupEnd;



console.group("Triangulos");
//codigo del triangulo

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los Lados del triángulo miden:" 
    + ladoTriangulo1 
    + "cm, "
    + ladoTriangulo2 
    + "cm, "
    + baseTriangulo
    + "cm"
);
const alturaTriangulo = 5.5;
console.log("La Altura del triangulo es de: " + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 +baseTriangulo;

console.log( "El perimetro del triangulo es de:" + perimetroTriangulo+"cm")

const areaTriangulo = (baseTriangulo * alturaTriangulo ) / 2;

console.log ("El Área del triangulo es de:" + areaTriangulo + "cm2")

console.groupEnd;
