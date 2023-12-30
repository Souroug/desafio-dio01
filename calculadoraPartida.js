//declarando a função com os parametros vitoria e derrota
function calcular (vitoria, derrota) {
    let resultado = vitoria - derrota

    let nivelHeroi // declarando o nível do heroi
   
// declarando  o nível do  heroi usando "if eslse"

if (vitoria >10){
     nivelHeroi = "Ferro"

} else if(vitoria >=11 && vitoria<20){
    nivelHeroi = "Bronze"

}else if(vitoria >=21 && vitoria<50){
     nivelHeroi = "Prata"

}else if(vitoria >=51 && vitoria<80){
     nivelHeroi = "Ouro"

}else if(vitoria >=81 && vitoria<90){
    nivelHeroi = "Diamante"

}else if(vitoria >=91 && vitoria<100){
     nivelHeroi = "Lendário"

}else {
     nivelHeroi = "Imortal"
}

}
 console.log ("O Heroi tem saldo de ${resultado} está no nível de ${nivelHeroi}")


 calcular (25, 5) // chamando a função 

 