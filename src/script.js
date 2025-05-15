//btn-navbar
document.getElementById('btn-menu').addEventListener('click', function(){
    document.getElementById('menu').classList.toggle('hidden')
})

//swiper
const swiper = new Swiper('.swiper', {
    spaceBetween: 12,
    grabCursor: true,
    loop: true,
    slidesPerView: 'auto',
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },

    breakpoints: {
        0: {
            watchOverflow: true,
        },

        640: {
            watchOverflow: true,
        },

        768: {
            watchOverflow: true,
        },

        1024: {
            watchOverflow: false,
        },

        1280: {
            watchOverflow: false,
        },
    }
});


//countdown flashsale
const Hours = document.getElementById('hours')
const Minutes = document.getElementById('minutes')
const Seconds = document.getElementById('seconds')
const Hours2 = document.getElementById('hours2')
const Minutes2 = document.getElementById('minutes2')
const Seconds2 = document.getElementById('seconds2')

const targetDate = new Date("May 26 2025 00:00:00").getTime()
const targetDate2 = new Date("May 26 2025 00:00:00").getTime()

function timer() {
    const currentDate = new Date().getTime()
    const currentDate2 = new Date().getTime()
    const distance = targetDate - currentDate
    const distance2 = targetDate2 - currentDate2

    if (distance,distance2 <= 0) {
        Hours.innerHTML= '00'
        Minutes.innerHTML= '00'
        Seconds.innerHTML= '00'

        Hours2.innerHTML= '00'
        Minutes2.innerHTML= '00'
        Seconds2.innerHTML= '00'
    } 
    else {
        const hours = Math.floor(distance / 1000 / 60 / 60) % 24
        const minutes = Math.floor(distance / 1000 / 60) % 60
        const seconds = Math.floor(distance / 1000) % 60

        const hours2 = Math.floor(distance / 1000 / 60 / 60) % 24
        const minutes2 = Math.floor(distance / 1000 / 60) % 60
        const seconds2 = Math.floor(distance / 1000) % 60

        Hours.innerHTML = hours < 10 ? + hours : hours
        Minutes.innerHTML = minutes < 10 ? + minutes : minutes
        Seconds.innerHTML = seconds < 10 ? + seconds : seconds

        Hours2.innerHTML = hours2 < 10 ? + hours2 : hours2
        Minutes2.innerHTML = minutes2 < 10 ? + minutes2 : minutes
        Seconds2.innerHTML = seconds2 < 10 ? + seconds2 : seconds2
    }
}

setInterval(timer, 1000)

//like-unlike
for (let i=1; i<=12; i++) {
    const like = document.getElementById (`like-btn${i}`)
    const liked = document.getElementById (`liked-btn${i}`)

    like.addEventListener('click', function() {
        like.classList.add ('hidden')
        liked.classList.remove ('hidden')
    })

    liked.addEventListener('click', function() {
        liked.classList.add ('hidden')
        like.classList.remove ('hidden')
    })
}

//remove aos di mobile
function removeAOS() {
    const AOS = document.querySelectorAll('[data-aos]')
  
    if (window.innerWidth <= 768) {
      AOS.forEach(function(remove) {
        remove.removeAttribute('data-aos')
      })
    }
  }
  
  window.addEventListener('load', removeAOS)