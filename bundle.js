(()=>{var u=window.matchMedia("(max-width: 1270px)"),d=window.matchMedia("(max-width: 700px)"),p=()=>d.matches?"mobile":u.matches?"tablet":"desktop";var a=0,i=Array.from(document.querySelectorAll(".page__sheet")),n;var o=new Map;o.set(1,"pull__up-page1");o.set(2,"pull__up-page2");o.set(3,"pull__up-page3");var c=[{pageNumber:1,link:"linkToPage1",pageDiv:"pull__up-page1"},{pageNumber:2,link:"linkToPage2",pageDiv:"pull__up-page2"},{pageNumber:3,link:"linkToPage3",pageDiv:"pull__up-page3"}],s=e=>{if(console.log("current:",n),!e){e="error";return}for(let t of c)if(console.log(t),t.link===e)if(t.pageDiv===n){console.log("same page bruh");return}else document.getElementById(`${t.pageDiv}`).classList.remove("in__view");console.log(e),setTimeout(()=>{if(e==="linkToPage1"){a=1,n="pull__up-page1",document.getElementById("pull__up-page1").classList.add("called"),document.getElementById("pull__up-page1").classList.add("in__view"),document.getElementById("pull__up-page2").classList.remove("called"),document.getElementById("pull__up-page3").classList.remove("called");return}if(e==="linkToPage2"){a=2,document.getElementById("pull__up-page2").classList.add("called"),document.getElementById("pull__up-page2").classList.add("in__view"),document.getElementById("pull__up-page1").classList.remove("called"),document.getElementById("pull__up-page3").classList.remove("called");return}if(e==="linkToPage3"){a=3,document.getElementById("pull__up-page3").classList.add("called"),document.getElementById("pull__up-page3").classList.add("in__view"),document.getElementById("pull__up-page1").classList.remove("called"),document.getElementById("pull__up-page2").classList.remove("called");return}},1500)};var l=e=>{e.classList.contains("header__link")&&s(e.id)};console.log("index js running");window.onload=()=>{let e=p();switch(console.log(e),e){case"desktop":document.addEventListener("click",t=>{t.preventDefault,l(t.target)});break;case"tablet":document.addEventListener("touchstart",t=>{t.preventDefault,l(t.target)});break;case"mobile":document.addEventListener("touchstart",t=>{t.preventDefault,l(t.target)})}};})();
