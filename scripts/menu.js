function menuHamburger(){
    const buttonOpen = document.querySelector('.hamburger');
    const buttonClose = document.querySelector('.menu__close');
    const menu = document.querySelector('.menu');

    function closeMenu (element, className){
    element.classList.remove(className)
   }
    function openMenu (element, className){
    element.classList.add(className)
  }

    buttonOpen.addEventListener('click', function(event){
    event.preventDefault();
    openMenu(menu,'menu--opened');
  })
   buttonClose.addEventListener('click', function(event){
    event.preventDefault();
    closeMenu(menu, 'menu--opened')
  })

}


menuHamburger();