const navBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const footerYear = document.querySelector('.footer__year')
const navLinkAll = document.querySelectorAll('.nav__link')

const openNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')

	navLinkAll.forEach(item => {
		item.addEventListener('click', () => {
            navBtn.classList.remove('is-active')
			navMobile.classList.remove('nav-mobile--active')
			
		})
	})
}

const handleCurrentYoear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYoear()
navBtn.addEventListener('click', openNav)
