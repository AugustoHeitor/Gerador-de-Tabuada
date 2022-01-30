function tabuada(){
    let campo = window.document.getElementById("campo")
    let res = window.document.getElementById("resultado")
    campo = Number(campo.value)
    let limite = 0
    let tabu = ""

    if (campo == ""){
        alert("Insira um número")
    }else{
        while(limite < 10){
           limite++
           tabu += campo + "x" +limite+ "="+ campo*limite + "<br />"

           res.innerHTML = tabu
           
        }
    }
    

    

}

