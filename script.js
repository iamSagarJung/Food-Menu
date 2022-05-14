const fooditems=[
    {
        name:"Chicken pizza",
        category:"Pizzas",
        image:"pizza1.jpg",
        desc:"pizza loremLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate optio illum magnam, quos voluptatem quia recusandae ea aut quam?",
        Price:"$10.1"

    },
    {
        name:"Spinach Bacon pizza",
        category:"Pizzas",
        image:"pizza2.jpg",
        desc:"pizza loremLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate optio illum magnam, quos voluptatem quia recusandae ea aut quam?",
        Price:"10$"

    },
    {
        name:"Chicken Briyani",
        category:"Briyani",
        image:"Briyani1.jpg",
        desc:"Briyani loremLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate optio illum magnam, quos voluptatem quia recusandae ea aut quam?",
        Price:"$6.5"
    },
    {
        name:" Steam Mo-Mo",
        category:"Mo-Mo",
        image:"momo1.jpg",
        desc:"Steam Momo loremLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate optio illum magnam, quos voluptatem quia recusandae ea aut quam?",
        Price:"$6"
    },
    {
        name:"Fried Mo-MO",
        category:"Mo-Mo",
        image:"momo2.jpg",
        desc:"Fried momo loremLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate optio illum magnam, quos voluptatem quia recusandae ea aut quam?",
        Price:"$8.55"
    },
    {
        name:"C Mo-MO",
        category:"Mo-Mo",
        image:"momo3.jpg",
        desc:"Fried momo loremLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate optio illum magnam, quos voluptatem quia recusandae ea aut quam?",
        Price:"$8"
    },
    {
        name:"Mutton Briyani",
        category:"Briyani",
        image:"briyani2.jpg",
        desc:"Briyani loremLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate optio illum magnam, quos voluptatem quia recusandae ea aut quam?",
        Price:"$12"
    },
    {
        name:"Ham Burger",
        category:"Burgers",
        image:"2.jpg",
        desc:"Briyani loremLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate optio illum magnam, quos voluptatem quia recusandae ea aut quam?",
        Price:"$5"
    },
    {
        name:"Chicken Burger",
        category:"Burgers",
        image:"3.jpg",
        desc:"Briyani loremLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate optio illum magnam, quos voluptatem quia recusandae ea aut quam?",
        Price:"$3"
    },
]

const pizza=document.querySelector(".pizza")
const namee=document.querySelector(".name")
const photo=document.querySelector(".momo1 img")
const desc=document.querySelector(".description")
const price=document.querySelector("price")
const foodContainer=document.querySelector(".food-container")
const allbtns=document.querySelectorAll(".navbar")


window.addEventListener("load",()=>{
    displayMenuItems(fooditems)
})


function displayMenuItems(menuItems){
    let allmenu=menuItems.map((items)=>{
        return `<div class="momo1">
          <img src=${items.image}>
            <div class="text">
              <h2 class="name">${items.name}</h2>
            <p class="description">${items.desc}</p>
           <price>Price: ${items.Price}</price>
         </div>
          </div>`

    })
    allmenu=allmenu.join("")
foodContainer.innerHTML=allmenu;

}

function pizzaItem(){
    let 
}
    
    for(let btn of allbtns){
        
        btn.addEventListener("click",(e)=>{
            const categ=e.target.textContent
            const category=fooditems.filter((menuItems)=>{
                return categ===menuItems.category
            })
            displayMenuItems(category)
            if(categ==="ALL"){
                displayMenuItems(fooditems)
            }
        })
    }
   