const iphonesColors = {
    White: "../img/silver.png",
    SpaceGrey: "../img/spacegray.png"
}


let btn = document.querySelectorAll('button[data-popo]')
let macBook = document.querySelector(".img")
let items = document.querySelectorAll('button[data-popo]')
let txt = document.querySelector('.blue')
let narx = document.querySelectorAll('div[data-p]')


btn.forEach(btn => {
    btn.onclick = () => {

        let key = btn.innerHTML
        macBook.style.backgroundImage = `url(${iphonesColors[key]})`
        items.forEach(el => el.classList.remove('active'))
        btn.classList.add('active')
        txt.innerHTML = [key]
        
        
// forEach(pri => pri. )



    }
})


let prices = document.querySelectorAll('.item')
prices.forEach(btnn => {
    btnn.onclick = () => {
        prices.forEach(el => el.classList.remove('active'))
        btnn.classList.add('active')
    }
})
































