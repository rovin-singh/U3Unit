// Ude Import export (MANDATORY)

import {sidebar} from "../components/sidebar.js";

let n=document.getElementById("main");
n.innerHTML=sidebar();


import {searchNews,appendData,newsFun} from "../components/fetch.js";

document.getElementById("detailed_news").innerHTML=
searchNews("in").then((res)=>{
    console.log(res.articles);
    appendData(res.articles);
});

