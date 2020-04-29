const img =[
    '/assets/img/biegun.jpg',
    '/assets/img/blue-frog.jpg',
    '/assets/img/cobra.jpg',
    '/assets/img/columbia.jpg',
    '/assets/img/conus.jpg',
    '/assets/img/deathstalker.jpg',
    '/assets/img/fugu.jpg',
    '/assets/img/humbold.jpg',
    '/assets/img/jungle.jpg',
    '/assets/img/kissing-bug.jpg',
    '/assets/img/mamba.jpg',
    '/assets/img/owl.jpg',
    '/assets/img/poison-frog.jpg',
    '/assets/img/rafa.jpg',
    '/assets/img/sawanna.jpg',
    '/assets/img/see-wasp.jpg',
    '/assets/img/sneak-in-grass.jpg',
    '/assets/img/sou-africa.jpg'
]

createBody = () =>
    img.reduce((acc, cur)=>
        acc + `<div class="galery-img img-like" style="background-image: url(${cur})"></div>`
    , '')

document.querySelector('.img-place').innerHTML = createBody()

const fullscreenImg = document.querySelector('.fullscreen-img')
const fullscreenContainer = document.querySelector('.fullscreen-container')

document.querySelectorAll('.galery-img').forEach((it)=>{
    it.addEventListener('click', ()=>{
        fullscreenContainer.classList.add('fc-in-use')
        fullscreenImg.src = it.style.backgroundImage.slice(5, -2)
    })
})

fullscreenImg.addEventListener('click', ()=>{
    fullscreenContainer.classList.remove('fc-in-use')
    fullscreenImg.style.backgroundImage = ''
})