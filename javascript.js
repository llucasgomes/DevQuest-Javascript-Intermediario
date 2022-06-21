//ok-borda
//erro-borda
//msg-erro


$('.btn-enviar').click(function () { 
    validacao();
});


function validacao() {
    

    if ($('#nome').val() =="") {
       $('label[name="nome"]').addClass("msg-erro");
       $('#nome').addClass('erro-borda')
       $('#nome').removeClass('ok-borda')
    } else{
        $('#nome').addClass('ok-borda')
        $('#nome').removeClass('erro-borda')
        $('label[name="nome"]').removeClass("msg-erro");
    }
    if ($('#email').val() =="") {
        $('label[name="email"]').addClass("msg-erro");
        $('#email').addClass('erro-borda')
        $('#email').removeClass('ok-borda')
     } else{
         $('#email').addClass('ok-borda')
         $('#email').removeClass('erro-borda')
         $('label[name="email"]').removeClass("msg-erro");
     }
     if ($('#fone').val() =="") {
        $('label[name="fone"]').addClass("msg-erro");
        $('#fone').addClass('erro-borda')
        $('#fone').removeClass('ok-borda')
     } else{
         $('#fone').addClass('ok-borda')
         $('#fone').removeClass('erro-borda')
         $('label[name="fone"]').removeClass("msg-erro");
     }
     if ($('#mensagem').val() =="") {
        $('label[name="mensagem"]').addClass("msg-erro");
        $('#mensagem').addClass('erro-borda')
        $('#mensagem').removeClass('ok-borda')
     } else{
         $('#mensagem').addClass('ok-borda')
         $('#mensagem').removeClass('erro-borda')
         $('label[name="mensagem"]').removeClass("msg-erro");
     }















    
   
    if ($('#mensagem').val() =="") {
        $('label[name="mensagem"]').addClass("msg-erro");
    }
    
}

