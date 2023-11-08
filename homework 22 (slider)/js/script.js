const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const images = document.querySelectorAll('img')

let counter = 0

function checkActiveElement(e) {
    e.forEach(() => {
        if(e[0].classList.contains('active')) {
            prevBtn.setAttribute('disabled', true)
        } else if(e[e.length - 1].classList.contains('active')) {
            nextBtn.setAttribute('disabled', true)
        }
         else {
            prevBtn.removeAttribute('disabled')
        }
    });
} 

nextBtn.addEventListener('click', () => {
prevBtn.removeAttribute('disabled')
counter++
images[counter].classList.add('active')
images[counter - 1].classList.remove('active')
checkActiveElement(images)
})

prevBtn.addEventListener('click', () => {
    nextBtn.removeAttribute('disabled')
    counter--
    images[counter].classList.add('active')
    images[counter + 1].classList.remove('active')
    checkActiveElement(images)
})

checkActiveElement(images)
