const localStorageCart = localStorage.getItem('cart');
const carts =  localStorageCart ? JSON.parse(localStorageCart) : [];

const cartTemplate = document.querySelector(".cart_template");
const cartContainer = document.querySelector(".cart__container")

// cart.forEach((c) => {
//     const cartLine = document.importNode(cartTemplate.content, true);
//     cartLine.querySelector("#item_name").textContent = c.name;
//     cartLine.querySelector("#item_price").textContent = c.price;
//     cartLine.querySelector("#item_quantity").textContent = c.quantity;
//     cartLine.querySelector("#total").textContent = c.price;

//     cartContainer.appendChild(cartLine)
// })

carts.map((cart)=> {
    const duplicate = carts.filter((item)=> item.id === cart.id)
    return {...cart, qty: duplicate.length, totalPrice: cart.price * duplicate.length }
}).reduce((acc,curValue)=>{
    const isExist = acc.find(o => o.id === curValue.id)
    if(!isExist) {
        acc.push(curValue)
    }
    return acc
},[]).forEach((c) => {
    const cartLine = document.importNode(cartTemplate.content, true);
    cartLine.querySelector("#item_name").textContent = c.name;
    cartLine.querySelector("#item_price").textContent = c.price;
    cartLine.querySelector("#item_quantity").textContent = c.qty;
    cartLine.querySelector("#total").textContent = c.totalPrice;

    cartContainer.appendChild(cartLine)
})