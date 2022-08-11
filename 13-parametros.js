//parametros/argumentos de funcao

function soma(num1,num2){
    return num1 + num2;
}

console.log(soma(3,5));

//ordem dos parametros

function nomeIdade(nome,idade){
    return `meu nome é ${nome} e tenho ${idade} anos`;
}

console.log(nomeIdade('shih',22));

function multiplica(num1 = 1 , num2 = 1){
    return num1 * num2;
}

console.log(multiplica(soma(4,5),soma(3,3)));