!function(){
    var e=document.querySelector(".header");
    window.onscroll=function(){window.pageYOffset>50?e.classList.add("header_active"):
    e.classList.remove("header_active")}}(),function(){
    var e=document.querySelector(".burger"),t=document.querySelector(".header__nav"),
    n=document.querySelector(".header__nav-close"),r=document.querySelectorAll(".header__link");
    if(e.addEventListener("click",function()
    {t.classList.add("header__nav_active")}),
    n.addEventListener("click",function()
    {t.classList.remove("header__nav_active")}),window.innerWidth<=767)
    for
        (var c=0;c<r.length;c+=1)r[c].addEventListener("click",function()
    {t.classList.remove("header__nav_active")})}(),
    document.querySelectorAll(".js-scroll").forEach(function(e)
    {e.addEventListener("click",function()
    {var e,t,n,r,c,i,o=this.getAttribute("href");
    e=o,t=1e3,n=document.querySelector(".header").clientHeight,
    r=document.querySelector(e).getBoundingClientRect().
    top-n,c=window.pageYOffset,i=null,
    requestAnimationFrame(function e(n){null===i&&(i=n);
    var o,a,d,l=n-i,u=(o=l,a=c,d=r,(o/=t/2)<1?d/2*o*o+a:-d/2*(--o*(o-2)-1)+a);window.scrollTo(0,u),
    l<t&&requestAnimationFrame(e)
})})});
