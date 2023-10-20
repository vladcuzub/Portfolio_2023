const navbar = document.querySelector('.navbar')
const menuBtn = document.querySelector('.menu-btn')
const linksBtn = document.querySelectorAll('.links_btn')

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('open')
  menuBtn.classList.toggle('active')
})

linksBtn.forEach(linkBtn => {
  linkBtn.addEventListener('click', () => {
    navbar.classList.toggle('open')
    menuBtn.classList.toggle('active')
  })
})

