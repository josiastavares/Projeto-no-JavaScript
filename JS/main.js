

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"
}
function redirecionar(){
    window.open("https://web.dio.me/home")
    window.location.href = "https://web.dio.me/home"
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto")
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novoNome){
    return frase.replace(nome, novoNome)
}

function validaIdade(idade){
    var valida;
    if(idade >= 18){
        valida = true;
    }else{
        valida = false
    }
    return valida
}

var idade = prompt("Qual sua idade?")
alert(validaIdade(idade))

alert(soma(5, 7))
alert(setReplace("Vai Japão", "Japão", "Brasil"))
*/

//var d = new Date();
//alert(d);
//alert(d.getMonth() + 1);
//alert(d.getMinutes());
//alert(d.getDay());
//alert(d.getHours());


/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count)
    alert(count)
    count++;
};
*/

/*
var idade = prompt("Qual a sua idade?");
if(idade >= 18){
    alert("Maior de Idade");
}else{
    alert("Menor de idade");
}
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxo"}];
console.log(frutas);
alert(frutas[1].nome);
*/

//var fruta = {nome:"maça", cor:"vermelha"};
//console.log(fruta.nome);
//alert(fruta.cor);


//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista)
//console.log(lista.toString())
//console.log(lista.join(" - "))


//var nome = "Eduardo Tavares";
//var idade = 17;
//var idade2 = 10;
//var frase = "O Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " Anos")
//alert(idade + idade2)
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));