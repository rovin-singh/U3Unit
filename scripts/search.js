// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {sidebar} from "../components/sidebar.js";

let n=document.getElementById("main");
n.innerHTML=sidebar();


import {searchNews,appendData,news } from ".index.js";

document.getElementById("detailed_news").innerHTML=news();