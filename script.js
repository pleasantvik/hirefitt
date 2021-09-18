const nav = document.querySelector('.nav__list')
const hambuger = document.querySelector('.hambuger')

hambuger.addEventListener('click', function () {
  nav.classList.toggle('hidden')
})
