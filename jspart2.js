
var assortmentData = [
    {
      inStock: true,
      isHit: false
    },
    {
      inStock: false,
      isHit: false
    },
    {
      inStock: true,
      isHit: true
    },
    {
      inStock: true,
      isHit: false
    },
    {
      inStock: false,
      isHit: false
    }
  ];
  
  updateCards = (stockhit) =>{
    const items = document.querySelectorAll('.good')
    for(i = 0; i<items.length; i++){
      let item = items[i]
      let info = stockhit[i]
      
      if(info.inStock){
        item.classList.add('good--available')
        } else{item.classList.add('good--unavailable')}
      if(info.isHit){item.classList.add('good--hit')}
    }
  }
    
  updateCards(assortmentData);  