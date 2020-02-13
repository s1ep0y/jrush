openMenu= () => {
    
    document.getElementById('menu').classList.add('visible');
};

hideMenu = () => {
    document.getElementById('menu').classList.remove('visible');
};

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

function sliderControl(target){
    console.log(isSwiperWork)
    // todo - заставить эту херню нормально удаляться. Шел второй час
    if(window.innerWidth < 768){
        isSwiperWork = true;
        document.querySelectorAll(`.${target}__container`).forEach(elem=>{
            elem.classList.add('swiper-container')
        })
        document.querySelectorAll(`.${target}__wrapper`).forEach(elem=>{
            elem.classList.add('swiper-wrapper')
        })
        
        document.querySelectorAll(`.${target}__list-item`).forEach(element => {
        element.classList.add('swiper-slide')
        });
        
            let mySwiper = new Swiper ('.swiper-container',{
            slidesPerView: 'auto',
            spaceBetween: 16,
            autoplay: {
                delay: 2000,
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
            let mySwiper = document.querySelector('.swiper-container').swiper;
            mySwiper.destroy(true, true);
            document.querySelectorAll(`.${target}__container`).forEach(elem=>{
                elem.classList.remove('swiper-container')
            })
            document.querySelectorAll(`.${target}__wrapper`).forEach(elem=>{
                elem.classList.remove('swiper-wrapper')
            })
            
            document.querySelectorAll(`.${target}__list-item`).forEach(element => {
            element.classList.remove('swiper-slide')
            });
            isSwiperWork = false
            return
        }
}

window.onload = sliderControl('content-body')
window.addEventListener('resize', function(){
    sliderControl('content-body')
  });
