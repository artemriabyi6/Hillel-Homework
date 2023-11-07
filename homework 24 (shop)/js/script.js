

const getCompany = document.querySelector('#company')
const getBasket = document.querySelector('#basket')
const getCategories = document.querySelector('#categories')
// const Company = document.querySelector('#company')
// const Company = document.querySelector('#company')

let basketArray = []


getBasket,addEventListener('click', () => {
    window.history.pushState({}, 'Basket', '/basket')


})