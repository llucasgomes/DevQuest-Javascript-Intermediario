//ok-borda
//erro-borda
//msg-erro

const campos = document.querySelectorAll(".campo")
const msgErro = document.querySelectorAll("label")

function validador(){
    campos.forEach(function (item,index) {
        if (campos[index].value == "") {
           item.classList.add("erro-borda")
           item.classList.remove("ok-borda")
           msgErro[index].classList.add("msg-erro")
        } else{
            item.classList.remove("erro-borda")
            item.classList.add("ok-borda")
            msgErro[index].classList.remove("msg-erro")
        }
    });
}
