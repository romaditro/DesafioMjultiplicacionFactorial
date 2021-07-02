let numeroUsusario = 0;

/*------------------------------------------------------------------*/
//Solicitar numero entre 1 y 20.
const solicitar_numero = () =>{
    let numeroUsusario;

    do{
        numeroUsusario = prompt("Ingrese un número entre 1 y 20: ");
        numeroUsusario = Number.parseInt(numeroUsusario);
    }while((numeroUsusario < 1) || (numeroUsusario > 20));

    return numeroUsusario;
}

/*------------------------------------------------------------------*/
//Calcular e imprime la multiplicacion
const multiplicacion = (numero) =>{
    let contador = 1;

    console.log(`Tabla de Multiplicar`);
    for(let i = 1; i <= numero; i++){
        console.log(`${i} x ${numero} = ${i * numero}`);
    }
}

/*------------------------------------------------------------------*/
//Calcular e imprime el factorial
const factorial = (numero) =>{
    //primer for para generar los numeros desde 1 hasta el numero ingresado por el usuario.
    for(let i = 1; i <= numero; i++){
        //segundo for para calcular el factorial.
        let factorial = 1;
        for(let j = i; j>0; j--){
            factorial *= j;
        }
        console.log(`Factorial de ${i} es: ${factorial}`);
    }
}

/*------------------------------------------------------------------*/

//Solicitar numero entre 1 y 20.20
numeroUsusario = solicitar_numero();

console.log(`El número ingresado es:  ${numeroUsusario}`);
console.log(`================================`);

multiplicacion(numeroUsusario);

console.log(`================================`);
factorial(numeroUsusario);

console.log(`================================`);