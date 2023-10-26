const getContainer = document.querySelector('#container')
const getprevBtn = document.querySelector('#prev')
const getnextBtn = document.querySelector('#next')
const getSlide1 = document.querySelector('#item-1')
const getSlide2 = document.querySelector('#item-2')
const getSlide3 = document.querySelector('#item-3')
const getSlide4 = document.querySelector('#item-4')


let AllSlides = [getSlide1, getSlide2, getSlide3, getSlide4]

function addClass(arr) {
    arr.forEach((e) => {
        let classes = e.classList
        if(!classes.contains('active')) {
            console.log(e)
        }
    })
}
addClass(AllSlides)
let increment = 0



getnextBtn.addEventListener('click', () => {
    AllSlides[increment].classList.remove('active')
    AllSlides[increment++].classList.add('active')
    
})

