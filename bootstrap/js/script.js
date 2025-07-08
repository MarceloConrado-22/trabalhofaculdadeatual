let botao = document.querySelector("#botao");
botao.style.background="blue";
botao.style.color ="white";


botao.addEventListener("click",e=>{
    botao.style.background="red";
    botao.innerHTML="Pequenas mudanças diárias podem levar a grandes resultados.";
});
     
