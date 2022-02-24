const press=document.getElementById("press")
const mobilenav=document.getElementById("mobile-navigation")
const cancel=document.getElementById("cancel")
const preloader=document.getElementById("loader")
function loading()
{
  preloader.style.display="none";
}
// right to left swipe mobile menu
press.addEventListener("click",()=>{
  mobilenav.classList.add("swipemenu")
})
cancel.addEventListener("click",()=>{
  mobilenav.classList.remove("swipemenu")
})
// sticky nav bar
var stickyNavTop=$('#head').offset().top;
$(window).scroll(function()
{
  if($(this).scrollTop()>stickyNavTop)
  {
    $('#head').addClass("stickyy")
    $(".light-logo").css("display","none")
    $(".dark-logo").css("display","block")
    $(".mb-lg-0 li a").css("color","black")
    $(".goTop").css("opacity","1")
  }
  else 
  {
    $('#head').removeClass("stickyy")
    $(".light-logo").css("display","block")
    $(".dark-logo").css("display","none")
    $(".mb-lg-0 li a").css("color","white")
    $(".submenu li a").css("color","black")
    $(".goTop").css("opacity","0")
  }
})
// border effect
function bordereffect1(elem)
{
  $(elem).find("div").removeClass("animate2");
  $(elem).find("div").addClass("animate1");
}
function bordereffect2(elem)
{
  $(elem).find("div").removeClass("animate1");
  $(elem).find("div").addClass("animate2");
}
// checkeffect
function check(elem1,elem2)
{
  const a=document.getElementById(elem1);
  const b=document.getElementById(elem2);
  if(a.checked)
  {
    b.style.display="block"
  }
  else 
  {
    b.style.display="none"
  }
}
// owl-carousel
$('.owl-carousel1').owlCarousel({
    loop:true,
    nav:false,
    items:1,
    margin:10,
    dots:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    slideSpeed: 2000,
  })
  $('.owl-carousel2').owlCarousel({
    loop:true,

    dots:false,
    responsive: 
    {
      0: 
      {
        items:4
      },
      576:
      {
        items:8
      }
    }
  })
  // typingeffect
  var type=new Typed("#typed",{stringsElement:"#typed-strings",
  typeSpeed: 100,
  backSpeed:20,
  loop:true,
  loopCount:Infinity
});