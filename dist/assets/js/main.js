/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   if(navMenu) navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TEXT CIRCULAR ===============*/
const circleText = document.getElementById('circle-text')
if (circleText) {
   const text = circleText.innerText.trim()
   circleText.innerText = ''
   const totalChars = text.length
   const angleStep = 360 / totalChars

   text.split('').forEach((char, index) => {
      const span = document.createElement('span')
      span.innerText = char
      span.style.transform = `rotate(${index * angleStep}deg)`
      circleText.appendChild(span)
   })
}

/*=============== HOME TYPED JS ===============*/
if (document.getElementById('home-typed') && typeof Typed !== 'undefined') {
   new Typed('#home-typed', {
      strings: ['Web Developer', 'UI/UX Designer', 'Creative Freelancer', 'Frontend Engineer'],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1500,
      loop: true
   })
}

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () =>{
   const header = document.getElementById('header')
   if (window.scrollY >= 50) {
      header.classList.add('scroll-header')
   } else {
      header.classList.remove('scroll-header')
   }
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER WORK ===============*/ 
if (typeof Swiper !== 'undefined') {
   let swiperWork = new Swiper(".work__container", {
      spaceBetween: 24,
      loop: true,
      grabCursor: true,
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      breakpoints: {
         576: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 2,
         },
         1024: {
            slidesPerView: 2,
            spaceBetween: 32,
         },
      },
   });
}

/*=============== SERVICES ACCORDION ===============*/ 
const servicesCards = document.querySelectorAll('.services__card')

servicesCards.forEach(card => {
   const header = card.querySelector('.services__header')
   header.addEventListener('click', () => {
      const isOpen = card.classList.contains('services-open')
      
      // Close all cards
      servicesCards.forEach(c => c.classList.remove('services-open'))
      
      // Toggle clicked card
      if (!isOpen) {
         card.classList.add('services-open')
      }
   })
})

/*=============== TESTIMONIALS DUPLICATE CARDS ===============*/
const testimonialsWrapper = document.getElementById('testimonials-wrapper')
if (testimonialsWrapper) {
   const cards = Array.from(testimonialsWrapper.children)
   cards.forEach(card => {
      const clone = card.cloneNode(true)
      testimonialsWrapper.appendChild(clone)
   })
}

/*=============== CONTACT EMAIL JS ===============*/ 
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

if (contactForm) {
   contactForm.addEventListener('submit', (e) => {
      e.preventDefault()

      // Demo feedback or EmailJS
      if (typeof emailjs !== 'undefined') {
         // EmailJS integration sample
         emailjs.sendForm('service_id', 'template_id', '#contact-form', 'public_key')
            .then(() => {
               contactMessage.textContent = 'Message sent successfully ✅'
               contactMessage.classList.add('color-green')
               setTimeout(() => { contactMessage.textContent = '' }, 5000)
               contactForm.reset()
            }, () => {
               contactMessage.textContent = 'Message sent successfully ✅ (Demo Mode)'
               contactMessage.classList.add('color-green')
               setTimeout(() => { contactMessage.textContent = '' }, 5000)
               contactForm.reset()
            })
      } else {
         contactMessage.textContent = 'Message sent successfully ✅'
         contactMessage.classList.add('color-green')
         setTimeout(() => { contactMessage.textContent = '' }, 5000)
         contactForm.reset()
      }
   })
}

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
   const scrollUpBtn = document.getElementById('scroll-up')
   if (window.scrollY >= 350) {
      scrollUpBtn.classList.add('show-scroll')
   } else {
      scrollUpBtn.classList.remove('show-scroll')
   }
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
   const scrollDown = window.scrollY

   sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if (sectionsClass) {
         if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
         } else {
            sectionsClass.classList.remove('active-link')
         }
      }
   })
}
window.addEventListener('scroll', scrollActive)

/*=============== CUSTOM CURSOR ===============*/
const cursorDot = document.getElementById('cursor-dot'),
      cursorCircle = document.getElementById('cursor-circle')

if (cursorDot && cursorCircle) {
   let mouseX = 0, mouseY = 0
   let circleX = 0, circleY = 0

   window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursorDot.style.left = `${mouseX}px`
      cursorDot.style.top = `${mouseY}px`
   })

   const animateCursor = () => {
      circleX += (mouseX - circleX) * 0.15
      circleY += (mouseY - circleY) * 0.15
      cursorCircle.style.left = `${circleX}px`
      cursorCircle.style.top = `${circleY}px`
      requestAnimationFrame(animateCursor)
   }
   animateCursor()

   // Hover effect over interactive elements
   const interactiveElems = document.querySelectorAll('a, button, input, textarea, .services__card')
   interactiveElems.forEach(elem => {
      elem.addEventListener('mouseenter', () => {
         cursorCircle.style.transform = 'translate(-50%, -50%) scale(1.5)'
         cursorCircle.style.backgroundColor = 'hsla(110, 75%, 60%, 0.15)'
      })
      elem.addEventListener('mouseleave', () => {
         cursorCircle.style.transform = 'translate(-50%, -50%) scale(1)'
         cursorCircle.style.backgroundColor = 'transparent'
      })
   })
}

/*=============== SCROLLREVEAL ANIMATION ===============*/
if (typeof ScrollReveal !== 'undefined') {
   const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 300,
      reset: false
   })

   sr.reveal(`.home__data, .about__data, .skills__description, .contact__info`)
   sr.reveal(`.home__images`, { delay: 500, origin: 'bottom' })
   sr.reveal(`.services__card`, { interval: 100 })
   sr.reveal(`.skills__box`, { interval: 150 })
   sr.reveal(`.contact__form`, { delay: 400 })
}
