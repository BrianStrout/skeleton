(()=>{var i=window.matchMedia("(max-width: 1270px)"),o=window.matchMedia("(max-width: 700px)"),e=()=>o.matches?"mobile":i.matches?"tablet":"desktop";console.log("index js running");var a=!1;a=!0;var t;window.onload=()=>{t=e(),console.log(t)};})();