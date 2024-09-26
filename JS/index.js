import products from "./products.js"

function productFilter(category){
    if(category == "all")
        return products
    else return products.filter((pro)=> pro.category === category)
}

const buttons= document.querySelectorAll(".filter .container button");
buttons.forEach((btn)=>{
    btn.addEventListener('click',(event)=>{
        buttons.forEach((btn)=>btn.classList.remove("active"));
        event.target.classList.add("active");
        displayProducts(productFilter(event.target.id))
    }) 
})

function displayProducts(products){
    // Handle the case of show products in the page
}