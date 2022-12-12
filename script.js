alert("Digite os numeros a serem calculados!")

function calcula(n1,n2){
   alert(`A Soma de ${Number(n1)} + ${Number(n2)} = ${Number(n1)+Number(n2)} `)
   alert(`A Subtração de ${Number(n1)} - ${Number(n2)} = ${Number(n1) - Number(n2)} `)
   alert(`A Multiplicação de ${Number(n1) } * ${ Number(n2)} = ${Number(n1) * Number(n2)} `)
   alert(`A Divsão de ${Number(n1)} / ${Number(n2)} = ${Number(n1) / Number(n2)} `)
   alert(`O Resultado de ${Number(n1)}+${Number(n2)} = ${Number(n1) + Number(n2)} é um numero ${(Number(n1)+Number(n2))%2==0?"Par": "Impar"}`)   ;
   alert(`${n1 == n2?"Os dois operadores são identicos! ":"Os dois operadores distitos! "}`)
}


let operador1 = prompt("Digie o primeiro operador!");
let operador2 = prompt("Digie o segundo operador!")

calcula(operador1,operador2)




