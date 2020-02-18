const warFog = document.querySelector('.war-fog')
const showWarFog = (()=> warFog.style.display = 'block')
const hideWarFog = (()=> warFog.style.display = 'none')

const lockBody = (()=> document.querySelector('body').style.overflow='hidden')
const unlockBody = (()=> document.querySelector('body').style.overflow='auto')

const callButton = document.querySelectorAll('[name=call]')
const feedbackButton = document.querySelectorAll('[name=feedback]')
const menuButton = document.querySelector('[name=open-menu]')

const closeButton = document.querySelectorAll('[name=close]')

const menu = document.querySelector('.side-menu')
const callModal = document.querySelector('.modal--name--call')
const feedbackModal = document.querySelector('.modal--name--feedback')





menuButton.addEventListener('click', (event)=>{
    menu.classList.add('visible')
    lockBody()
    showWarFog();
})

feedbackButton.forEach((button)=>{
    button.addEventListener('click', (event)=>{
        menu.classList.remove('visible')
        feedbackModal.classList.add('visible')
        lockBody()
        showWarFog();
    })
})

callButton.forEach((button)=>{
    button.addEventListener('click', (event)=>{
        console.log('sup')
        menu.classList.remove('visible')
        callModal.classList.add('visible')
        lockBody()
        showWarFog();
    })
})

closeButton.forEach((button)=>{
    button.addEventListener('click', (event)=>{
        event.target.closest('.visible').classList.remove('visible')
        hideWarFog()
        unlockBody()
        
})
})

warFog.addEventListener('click', (event)=>{
    document.querySelector('.visible').classList.remove('visible')
    hideWarFog()
    unlockBody()
})



document.querySelectorAll('.show-hide-buttons').forEach(item=>{
    const change = item.previousElementSibling
    const open = item.querySelectorAll('button:first-child')[0];
    const close = item.querySelectorAll('button:last-child')[0]
    open.addEventListener('click', function(){
        change.classList.add('showfulldiv');
        open.style.display='none';
        close.style.display='flex';
    })
    close.addEventListener('click', function(){
        change.classList.remove('showfulldiv');
        open.style.display='flex';
        close.style.display='none';
    })
})



var isSwiperWork = undefined;

function sliderControl(){
    if(document.body.clientWidth < 768){
        isSwiperWork = true;
        document.querySelectorAll(`.content-body__container`).forEach(elem=>{
            elem.classList.add('swiper-container')
        })
        document.querySelectorAll(`.prices__container`).forEach(elem=>{
            elem.classList.add('swiper-container')
        })
        document.querySelectorAll(`.content-body__wrapper`).forEach(elem=>{
            elem.classList.add('swiper-wrapper')
        })

        
        
        document.querySelectorAll(`.content-body__list-item`).forEach(element => {
        element.classList.add('swiper-slide')
        });


        document.querySelectorAll(`.prices__list-item`).forEach(element => {
            element.classList.add('swiper-slide')
            });
            document.querySelectorAll(`.prices__wrapper`).forEach(elem=>{
                elem.classList.add('swiper-wrapper')
            })

            
            let mySwiper = new Swiper ('.swiper-container',{
            slidesPerView: 'auto',
            spaceBetween: 16,
            autoplay: {
                delay: 7000,
            },
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        return
    }
    
        if(isSwiperWork){
            document.querySelectorAll('.swiper-container').forEach(element=>{
                element.swiper.destroy(true, true);
            })
            document.querySelectorAll(`.prices__container`).forEach(elem=>{
                elem.classList.remove('swiper-container')
            })
            document.querySelectorAll(`.content-body__container`).forEach(elem=>{
                elem.classList.remove('swiper-container')
            })
            document.querySelectorAll(`.content-body__wrapper`).forEach(elem=>{
                elem.classList.remove('swiper-wrapper')
            })
            
            document.querySelectorAll(`.content-body__list-item`).forEach(element => {
            element.classList.remove('swiper-slide')
            });
            document.querySelectorAll(`.prices__list-item`).forEach(element => {
                element.classList.remove('swiper-slide')
                });
                document.querySelectorAll(`.prices__wrapper`).forEach(elem=>{
                    elem.classList.remove('swiper-wrapper')
                })
            isSwiperWork = false
            return
        }
}

window.onload = sliderControl('content-body')
window.addEventListener('resize', function(){
    sliderControl('content-body')
  });
