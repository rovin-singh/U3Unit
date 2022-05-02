let searchNews = async(code) => {
    try{
          const res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${code}`)
          const data= res.json();
          return data;
        }
    catch(err){
        console.log("err:",err);
    }
} 

let newsFun = async(query) => {
    try{
          const response=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
          const newsData= response.json();
          return newsData;
        }
    catch(err){
        console.log("err:",err);
    }
} 

let appendData = (data) =>{
  let container= document.getElementById("results");
  container.innerHTML=null;
   data.forEach(function({title,description,urlToImage}){
       console.log(urlToImage);
    let div=document.createElement("div"); 
    let headlines=document.createElement("h4");
    let des=document.createElement("p");
    let image=document.createElement("img");
   
    image.src=urlToImage;
    headlines.innerText=title;
    des.innerText=description;
    div.append(image,headlines,des);
    div.addEventListener("click",function(){
       window.location.href="news.html";
    });
    container.append(div);
   });
}



export {searchNews,appendData,newsFun}