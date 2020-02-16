document.addEventListener('click', (event)=>{
    console.log(event.target.name)
    const closeAll = () =>{
        document.querySelectorAll('.visible').forEach(item=>{
            item.classList.remove('visible')
            document.querySelector(`.content`).style.position='static';
            document.querySelector('.war-fog').style.display = "none"
            document.body.style.overflow='auto'
        })
    }
    // document.body.style
    const show = (target)=>{
        closeAll()
        console.log('check')
        document.querySelector(`.${target}`).classList.add('visible');
        document.body.style.overflow='hidden'
    }
    if(!event.target.closest('.visible')){
        closeAll()
    }
    if(event.target.name == 'close'){
        closeAll()
    }
    if(event.target.name == 'Open-Menu'){
        show('side-menu')
        
    }
    if(event.target.name == 'chat'){
        
        show('modal--name--feedback')
        document.querySelector('.war-fog').style.display = "block"
    }
    if(event.target.name == 'call'){
        show('modal--name--call')
        document.querySelector('.war-fog').style.display = "block"
    }
    
    
    
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
    if(window.innerWidth < 768){
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
