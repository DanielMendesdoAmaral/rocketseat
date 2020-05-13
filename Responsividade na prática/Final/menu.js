let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = document.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => { //function arrow
    menuSection.classList.toggle("on", show) //Se tiver a classe on ele tira, se não existir ele põe. Coloque o show apenas para não bugar.

    document.body.style.overflow = show ? "hidden" : "initial" //O overflow hidden não permite rolar. Se a tela do menu estiver aberta (analisado pela variável show), estiver on, ele não deixa rolar. Senão, deixa.

    show = !show;
})