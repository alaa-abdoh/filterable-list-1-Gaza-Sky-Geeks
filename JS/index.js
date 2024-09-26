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
    const container= document.querySelector(".products .container")
    container.textContent=""
    products.map((product)=>{
        const div= document.createElement("div");
        const category= document.createElement("h3");
        const name= document.createElement("h4");
        const price= document.createElement("span");
        div.classList.add("product");
        category.textContent= product.category;
        name.textContent= product.name;
        price.textContent= product.price;
        div.append(category, name, price);
        container.append(div)
    })
}
displayProducts(products)