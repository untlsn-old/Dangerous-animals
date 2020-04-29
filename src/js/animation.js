setTimeout(()=>{
    scrollTo(0, 0)
}, 200)
setTimeout(()=>{
    document.querySelector('.loading').remove()
}, 2000)

const hamburgerEvents = () =>{
    if(innerHeight > innerWidth){
        const hamburger = document.querySelector('.hamburger')
        const nav = document.querySelector('.roll-nav')
        let hamburgerIsFocus = false

        hamburger.addEventListener('click', ()=>{
            if(hamburgerIsFocus)
                hamburger.blur()
            else
                hamburger.focus()
        
            hamburgerIsFocus = !hamburgerIsFocus
        })

        nav.addEventListener('click', ()=>{
            hamburger.focus()
        })

        hamburger.addEventListener('focus', ()=>{
            nav.classList.add('show')
            nav.classList.remove('hide')
        })

        hamburger.addEventListener('blur', ()=>{
            nav.classList.remove('show')
            nav.classList.add('hide')
        })
    }
}
hamburgerEvents()

addEventListener('resize', ()=>{
    hamburgerEvents()
})

const topestTop = header.offsetTop

addEventListener('scroll', ()=>{
    if(window.pageYOffset > topestTop){
        header.classList.add('scroled-header')
    }
    else{
        header.classList.remove('scroled-header')
    }
})

document.querySelectorAll('.column-container').forEach((it)=>{

    const img = it.querySelector('.right-img')
    const text = it.querySelector('.left-text')

    addEventListener('scroll',()=>{
        const position = it.getBoundingClientRect()

        if(position.top < window.innerHeight && position.bottom >= 0) {
            img.classList.add('set-from-right')
            text.classList.add('set-from-left')
        }
    })
})