
export function addTwoNumbers(x , y){
  console.log(x + y)
    return x + y 
}
    console.log(addTwoNumbers(2, 3));
    console.log(addTwoNumbers(-2, -3));
    console.log(addTwoNumbers(13, 26));
    console.log(addTwoNumbers(-10, 30));
 
const option = +prompt("Selecciona una opción\n 1. Sumar\n 2. Restar\n 3. Multiplicar\n 4. Dividir");
switch(option){
    case 1:
        const num1 = +prompt("Ingresa un número");
        const num2 = +prompt("Ingresa otro número")
        const suma = (num1 + num2);
        console.log = (`Resultado: ${suma}`)
        break;
    case 2:
        const numero1= +prompt("Ingresa un número");
        const numero2= +prompt("Ingresa otro número");
        console.log(Resta(numero1, numero2));
        break;
    case 3:
        const nume1= +prompt("Ingresa un número");
        const nume2= +prompt("Ingresa otro número");
        console.log(Multiplicacion(nume1, nume2));
        break;
    case 4:
        const numb1= +prompt("Ingresa un número");
        const numb2= +prompt("Ingresa otro número");
        console.log(Multiplicacion(numb1, numb2));
        break;
    default:
        alert("Debes ingresar una opción válida, en número");
} 