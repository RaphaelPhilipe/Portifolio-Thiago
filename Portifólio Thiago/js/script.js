window.addEventListener("scroll", function(){
    let header = document.querySelector('#nav-fixed')
    header.classList.toggle('rolagem',window.scrollY > 0)
})