// Este es mi primera actividad, funciona y pasa el test

export function addTwoNumbers(x , y){
  console.log(x + y)
    return x + y 
}
    console.log(addTwoNumbers(2, 3));
    console.log(addTwoNumbers(-2, -3));
    console.log(addTwoNumbers(13, 26));
    console.log(addTwoNumbers(-10, 30));


 
    // Apartado para realizar la calculadora sencilla

    const suma = function (x, y){
        return x + y
    }
    const resta = function (x, y){
        return x - y
    }
    const multiplicacion = function (x, y){
        return x * y
    }
    const division = function (x, y){
        return x / y
    }

const option = +prompt("Seleccione una opción\n 1. Sumar\n 2. Restar\n 3. Multiplicar\n 4. Dividir");
switch(option){
    case 1:
        const num1 = +prompt("Ingrese el primer número");
        const num2 = +prompt("Ahora ingrese el segundo número");
        alert("Resultado: " + suma(num1, num2));
        break;
    case 2:
        const numero1= +prompt("Ingrese el primer número");
        const numero2= +prompt("Ahora ingrese el segundo número");
        alert("Resultado: " + resta(numero1, numero2));
        break;
    case 3:
        const nume1= +prompt("Ingrese el primer número");
        const nume2= +prompt("Ahora ingrese el otro número");
        alert("Resultado: " + multiplicacion(nume1, nume2));
        break;
    case 4:
        const numb1= +prompt("Ingrese un número");
        const numb2= +prompt("Ahora ingrese otro número");
        alert("Resultado: " + division(numb1, numb2));
        break;
    default:
        alert("Ingrese un valor válido en número por favor");
} 