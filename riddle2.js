/*
Riddle #2

---------------------------------------------------------------------------------
                CONSIGNA
---------------------------------------------------------------------------------

What is the smallest natural number where the result of moving the digit on the far right to the front of the number is a number 9 times greater?

Similarly, for 142857, when you move the rightmost digit to the first place, it becomes 714285, which is the original number times 5.

Keep in mind:
- In this puzzle, you need the number to become the original times 9.
- Provide your answer using digits only – no spaces, letters, symbols, etc.

Riddle Answer (Required)
(Psst!) We already tried to solve this riddle with AI and its answers were wrong. You will have to think on your own!


---------------------------------------------------------------------------------
                RESOLUCION NUMERO 1
---------------------------------------------------------------------------------

definimos 2 variables, x para el primer numero, e y para el segundo de forma tal que y = 9 * x

var x 
var y 

partimos de la premisa que tanto x como y tienen igual cantidad de digitos. la unica forma posible para que al multiplicar x por 9 el resultado tenga igual cantidad de digitos es:
- que el primer digito de x sea = 1
- que el primer gigito de y sea = 9
Por lo tanto, el ultimo digito de x es igual a 9 (porque es igual al primer digito de y)

Definimos las variables que vamos a necesitar para expresar el resultado de la multiplicacion de cada digito de x * 9

lo que haremos a continuacion es ir conformando el numero x de atras para adelante, siguiendo con el siguiente razonamiento


        _ _ _ _ _ _ _ ... _ _ _ 9
            x 9
        _________________________
        _ _ _ _ _ _ _ ... _ _ _ _

como 9 * 9 es 81, ponemos el 1 como ultimo digito de y que es igual al penultimo digito de x y el 8 lo pasamos arriba

                             8
        _ _ _ _ _ _ _ ... _ _ 1 9
            x 9
        _________________________
        _ _ _ _ _ _ _ ... _ _ _ 1

volvemos a multiplicar, 9 * 1 + 8 = 17

                           1
        _ _ _ _ _ _ _ ... _ 7 1 9
            x 9
        _________________________
        _ _ _ _ _ _ _ ... _ _ 7 1

volvemos a multiplicar, 9 * 7 + 1 = 64

                         6
        _ _ _ _ _ _ _ ... 4 7 1 9
            x 9
        _________________________
        _ _ _ _ _ _ _ ... _ 4 7 1


y esto lo hacemos hasta que unidad = 1 y decena = 0, dado que es la unica forma que de como resultado un numero de una sola cifra y tanto x como y puedan tener la misma cantidad de digitos. 

*/

var x = "9"

function riddle(){
        let unidad = 9
        let decena = 0
        let digito = 0
        let hacer = true
    
    while (hacer){

        digito = (unidad * 9 + decena) % 10 

        decena = parseInt ((unidad * 9 + decena) / 10)

        unidad = digito;

        x = unidad + x
        
        y = unidad + y

        console.log("unidad " + unidad + " decena " + decena)

        if (unidad === 1 && decena === 0){
            hacer = false
        }
        
    }

    return ("el valor de x es " + x + "\n")
}

console.log(riddle())  // "el valor de x es 10112359550561797752808988764044943820224719"

var controlx = 10112359550561797752808988764044943820224719n
var controly = 91011235955056179775280898876404494382022471n
              
console.log((controlx * 9n === controly ))


/*
---------------------------------------------------------------------------------
                RESOLUCION NUMERO 2
---------------------------------------------------------------------------------

y = 9 * x

y = abc.....n => a=1, n=9

y = 9 * 10^(i-1) + (x - 9)/10 => i= cantidad de digitos de x 

9x = 9 * 10^(i-1) + (x - 9)/10

90x = 9 * 10^(i) + x - 9

89x = 9 * (10^(i) - 1)

x = 9/89 10^(i) - 9/89 

9/89 es un decimal periodico entre 0 y 1 que al multiplicar por 10^(i) queda un numero entero de i cantidad de digitos. al restarle 9/89 se le esta restando todos los decimales periodicos

         ,------------------------------------------,
9/89 = 0.1011235955056179775280898876404494380224719......

por lo tanto x = 1011235955056179775280898876404494380224719

*/