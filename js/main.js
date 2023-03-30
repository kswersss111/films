function getData(){
    console.log('hey')
    const xhr=new XMLHttpRequest()
    xhr.open("GET","https://www.omdbapi.com/?apikey=b6003d8a&s=All");
    xhr.send();
//*сработает но не желательно
    // setTimeout(()=>{})
    xhr.onload=()=>{
    let data=JSON.parse(xhr.response)
    console.log(data.Search)
    
}
}








let users=document.querySelector('.users')


let z=fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All")
z.then((response)=>{
   return response.json()
  
}).then((info)=>{
    console.log(info.Search)
    users.innerHTML=""
    info.Search.forEach((elem)=>{
        // console.log(elem.avatar)
        users.innerHTML+=`<div class="user-n">
        <img
          src="${elem.Poster}"
          alt="user"
          width="130px"
          
        />
        <h5>${elem.Title}</h5>
        <h5>${elem.Year}</h5>
        <br />
      </div>`
    })
}).catch((err)=>{
    console.log(err)
})