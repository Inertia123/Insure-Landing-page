function toggleClass(){
    const toggle = document.querySelector('.hammenu');
    toggle.classList.toggle('open');
    const close = document.querySelector('.navbar');
    close.classList.toggle('visible');
}