let inp=document.querySelector("#search");
let cards=document.querySelector(".cards")
const users = [
  {
    name: "Rihan",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXjUjiml2BJG763qO79SQdv0D9YqkNQZXDA&s",
    bio: "lost in thoughts 🌙 | dreamer & believer"
  },
  {
    name: "Basar",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi-bcSLw5YhWRmDfCrrUElFq14n5jl_7kfW_Bsh5hc7A&s",
    bio: "coding my way to success 💻🔥"
  },
  {
    name: "Danish",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJl-4kHDCUUFffzA5oSU683nXesbmycBWM0KQPrr0oKw&s",
    bio: "simplicity is the key ✨"
  },
  {
    name: "Aarti",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwA7ihb7IKvJ9bO5mQayO2gpq8DpspndwsDH-oXPPFMxqWBAl7E5OO42qS&s=10",
    bio: "gym | hustle | repeat 💪"
  },
  {
    name: "Priti",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGmXHy65sKhZM6uK9CPRHMAcr_Z4PersdEOZ2u50rig&s",
    bio: "creating my own sunshine ☀️"
  },
  {
    name: "Pallavi ",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-aTTqhAzgg9wYwVk9B4ppZRwY05w_2KUUo8nuJYoj0XeqmxRjmKpHV0&s",
    bio: "silence speaks louder 🔥"
  },
  {
    name: "meera joshi",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzQJ-Nuhybfg7xN_yalFzuUGrtqpQ6wxrMF3UtcwwMH3_-o72VzLYeAk&s",
    bio: "books > people 📚"
  }
];
function showUsers(arr) {
  arr.forEach(function(user) {
        //img 
    const card = document.createElement("div")
    const img = document.createElement("img")
    img.src=user.pic
    img.classList.add("img")
    card.classList.add("card")
    
    cards.appendChild(card)
    card.appendChild(img)
    
    //content 
    const content = document.createElement("div");
    const heading = document.createElement("h3")
    const para = document.createElement("p")
    content.classList.add("content")
    heading.innerText = user.name
    para.innerText = user.bio
    card.appendChild(content)
    content.appendChild(heading)
    content.appendChild(para)
    
});
}
showUsers(users)

inp.addEventListener("input",(arg) => {
    let value=inp.value.toLowerCase()
    let newUser = users.filter((user) => {
        return user.name.toLowerCase().startsWith(value)
    })
    
    cards.innerHTML=""
    showUsers(newUser)
    if (newUser=="") {
      cards.innerHTML="Not found😡😡"
      cards.style.color="red"
    }
    
})