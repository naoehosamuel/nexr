/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});
particlesJS.load('particles-js2', 'assets/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});
particlesJS.load('particles-js3', 'assets/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});
function services(){
  var page = document.getElementsByTagName('body')[0];
  document.querySelector(".hamburger").classList.toggle("mudar");
    const ul = document.querySelector('.div_menu_mobile');
    if(screen.width <= 768){
        ul.classList.remove('aberto');
        page.classList.remove('scroll');
      document.getElementById('servicos').scrollIntoView();
      
    }else{
      document.getElementById('servicos').scrollIntoView();
    }
}
function nois(){
  var page = document.getElementsByTagName('body')[0];
  document.querySelector(".hamburger").classList.toggle("mudar");
  const ul = document.querySelector('.div_menu_mobile');
  if(screen.width <= 768){
      ul.classList.remove('aberto');
      page.classList.remove('scroll');
  document.getElementById('quemNoisEh').scrollIntoView();
  }else{
  document.getElementById('quemNoisEh').scrollIntoView();
  }
}
function orca(){
  var page = document.getElementsByTagName('body')[0];
  document.querySelector(".hamburger").classList.toggle("mudar");
  const ul = document.querySelector('.div_menu_mobile');
  if(screen.width <= 768){
      ul.classList.remove('aberto');
      page.classList.remove('scroll');
  document.getElementById('orcamento').scrollIntoView();
  }else{
  document.getElementById('orcamento').scrollIntoView();
  }

}
window.addEventListener('scroll', function () {
  const fabVoltar = document.querySelector('.fab_voltar');
  if (window.pageYOffset <= 400){
      fabVoltar.classList.remove('aparecendo');
      fabVoltar.style.height = "0"
  } else if (window.pageYOffset >= 400){
      fabVoltar.classList.add('aparecendo');
      fabVoltar.style.height = "46px"
  }
});
function irTopo() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}
function menu_click(X){
  var page = document.getElementsByTagName('body')[0];
  X.classList.toggle("mudar");
  const ul = document.querySelector('.div_menu_mobile');
  if(ul.classList.contains('aberto')){
      ul.classList.remove('aberto');
      page.classList.remove('scroll');
  }else{
      ul.classList.add('aberto');
      page.classList.add('scroll');
  }
}  