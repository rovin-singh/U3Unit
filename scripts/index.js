// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


// url="https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}"
// url2="fetch(`https://masai-mock-api.herokuapp.com/news?q={query} `)

import {sidebar} from "../components/sidebar.js";

let n=document.getElementById("main");
n.innerHTML=sidebar();

import {searchNews,appendData,newsFun} from "../components/fetch.js";
let q;

let news = (event) =>{
    if(event.key==="Enter"){
         q=document.getElementById("search_input").value;  
         window.location.href="search.html";
    }
    newsFun(q).then((res)=>{
       console.log(res);
       appendData(res.articles);
    });
}

document.getElementById("search_input").addEventListener("keyup",news);     


searchNews("in").then((res)=>{
    console.log(res.articles);
    appendData(res.articles);
});

function cSearch(){
  console.log(this.id);
  searchNews(this.id).then((res)=>{
      console.log(res.articles);
      appendData(res.articles);
  });
}


let ids=document.getElementById("sidebar").children;

for(let el of ids){
    // console.log(el);
    el.addEventListener("click",cSearch);
}

export {news};