const navElements = `<a href="/" class="nav-option">Strona główna</a>
<a href="/src/html/galery.html" class="nav-option">Galeria</a>
<a href="/src/html/best-killers.html" class="nav-option">Najepsi zabójcy</a>
<a href="/src/html/denger-place.html" class="nav-option">Najniebezpieczniejsze mejsca</a>`

const phoneHeader = `<div class="bear img-like"></div>
<i class="fas fa-bars hamburger rotator animated" tabindex="0"></i>
<nav class="roll-nav hide animated">
    ${navElements}
</nav>`

const desktopHeader = `<div class="bear img-like"></div>
<nav class="flex-container">
    ${navElements}
</nav>`

const tooSmall = () =>{
    if(innerWidth< 260){
        const body = document.querySelector('body')
        body.style.display = 'flex'
        body.style.alignItems = 'center'
        body.innerHTML = "Sorry you devise is not support"
    }
}
tooSmall()

document.querySelector('header').innerHTML = (innerWidth<700)?
    phoneHeader : desktopHeader

addEventListener('resize', ()=>{
    document.querySelector('header').innerHTML = (innerHeight>innerWidth)?
    phoneHeader : desktopHeader

    tooSmall()
})

const header = document.querySelector('header')

const bear = document.querySelector('.bear')