const imgthumb = document.getElementById('img-thumb')
const jumbo = document.getElementById('img-jumbo')
const thumbImg = document.querySelectorAll('.thumb')


imgthumb.addEventListener('click', (e) => {
    thumbImg.forEach((e) => {
        e.classList.remove('active')
    })
    e.target.classList.add('active')


    //jumbo img ketika diklik
    let imgThumbSource = e.target.id;
    let img = 'img/jumbo/' + imgThumbSource + '.png';

    if (e.target.id === 'img-thumb') {
        img = 'img/jumbo/1.png'
        thumbImg[0].classList.add('active')
    }
    jumbo.setAttribute('src', img)

    //jumbo img animasi
    jumbo.classList.add('img-jumbo-animasi')
    setInterval(() => {
        jumbo.classList.remove('img-jumbo-animasi')
    }, 600)
})

const header = document.getElementById('header')
window.addEventListener('scroll', (e) => {
    let h = e.currentTarget.scrollY
    if (h >= 100) {
        header.classList.add('header-sticky')
    } else if (h == 0) {
        header.classList.remove('header-sticky')
    }
})

const hMenu = document.getElementById('header-menu')
const hamburgerMenu = document.getElementById('ham-click')
hamburgerMenu.addEventListener('click', (e) => {
    hMenu.classList.toggle('hamburger-click')
})