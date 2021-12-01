/* 1. Leia o código abaixo. 
Indique todas as mensagens impressas no console, 
**SEM EXECUTAR o programa**.
    
    
    const bool1 = true
    const bool2 = false
    const bool3 = !bool2
    
    let resultado = bool1 && bool2
    console.log("a. ", resultado)
    
    resultado = bool1 && bool2 && bool3 
    console.log("b. ", resultado) 
    
    resultado = !resultado && (bool1 || bool2) 
    console.log("c. ", resultado)
    
    console.log("d. ", typeof resultado)

    //-----------------------------------------------//

    Resultado: 
    a. false
    b. false
    c. true
    d. boolean

    //----------------------------------------------//


  2.Seu colega se aproxima de você falando que o código dele não funciona como devia.  
    Vamos ajudá-lo: 
    Consegue perceber algum problema? 
    O que será impresso no console?

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

//----------------------------------------------//

Resultado:
O problema está no tipo de dado que o programa está interpretando. 
Ele está concatenando o resultado de 2 strings, sendo que deveria ser feita a conversão de string para number para em seguida ser feita a soma.
Será impresso no controle
Ex: primeiroNumero 20
    segundoNumero 30
    2030 e não o valor da soma que seria 50
    
//----------------------------------------------//

3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

Sugestão: 

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

//-------------------------------------------------//

Exercício de escrita de código

1. Faça um programa que:

a) Pergunte a idade do usuário

b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
    */

const idadeUsuario = Number(prompt("Informe a sua idade:"))
const idadeAmigo = Number(prompt("Informe a idade do seu melhor amigo:"))
console.log("Sua idade é maior que a do seu melhor amigo ?", idadeUsuario > idadeAmigo)
console.log("A diferença entre as 2 idades é igual a", idadeUsuario - idadeAmigo ,"anos")

//---------------------------------------------------------//


/*
2. Faça um programa que:

a) Peça ao usuário que insira um número **par**

b) Imprima na console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código */


const par = Number(prompt("Informe um número par"))
console.log("O resto da divisão por 2 do número informado é igual a:", par % 2)

/*O padrão observado foi que todo número par quando submetido a divisão por 2 tem como resto 0.
Caso o usuário insira um número ímpar o resto da divisão por 2 é igual a 1*/

/*//---------------------------------------------------------------//


3. Faça um programa que pergunte ao usuário sua idade em anos. 
Depois, imprima no console 

a) A idade do usuário em meses

b) A idade do usuário em dias

c) A idade do usuário em horas
*/

const idade = Number(prompt("Qual a sua idade em anos ?"))
console.log("Você possui", idade * 12, "meses de vida")
console.log("Você possui", idade * 365, "dias de vida")
console.log("Você possui", idade * 8760, "horas de vida")

/*//-------------------------------------------------------// 


4. Faça um programa que pergunte ao usuário dois números. 
Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações.
*/ 

const num1 = Number(prompt("Informe o primeiro número:"))
const num2 = Number(prompt("Informe o segundo número:"))
console.log("O primeiro número é maior que o segundo ?", num1 > num2)
console.log("O primeiro número é igual ao segundo ?", num1 === num2)
console.log("O primeiro número é divisível pelo segundo ?", num1 % num2 === 0)
console.log("O segundo  número é divisível pelo primeiro ?", num2 % num1 === 0)