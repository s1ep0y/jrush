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

let swiper =  new Swiper ('.swiper-container',{
    slidesPerView: 'auto',
    spaceBetween: 16,
    // freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });