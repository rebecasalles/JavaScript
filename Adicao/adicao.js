const read = require('readline-sync');

console.clear()
let n1 = Number(read.question("digite o primeiro valor: "))
console.log(typeof(n1))
let n2 = Number(read.question("digite o segundo valor: "))
console.log(typeof(n2))
let operacao = read.question("digite a operacao(sinal: +, -, *, /): ")

if (operacao == "+"){
	mensagem = "Você selecionou adição";
	let soma= n1 + n2
	console.log(soma)
} else if (operacao == "-"){
	mensagem = "Você selecionou subtração";
	let subtracao = n1 - n2
	console.log(subtracao)
} else if (operacao == "*"){
	mensagem = "Você selecionou multiplicação";
	let multiplicacao = n1 * n2
	console.log(multiplicacao)
} else if (operacao == "/"){
	mensagem = "Você selecionou divisão";
	let divisao = n1 / n2
	console.log(divisao)
}