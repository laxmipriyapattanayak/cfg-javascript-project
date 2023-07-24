const cartTemplate = document.querySelector(".cart_template");
const cartContainer = document.querySelector(".cart__container")

const getCartsDataFromLocalStorage = () => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
}

const displayCart = (()=>{
    const carts =  getCartsDataFromLocalStorage();
    carts.map((cart)=> {
        /* find how many duplicate datas are there inside carts array and add a quantity property and  total price 
        property to the array carts and calculating total price  */
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

        const deleteButton = cartLine.querySelector("#delete");
        deleteButton.addEventListener("click", () => {
            removeItemFromCart(c.id);
        })

        const decreaseButton = cartLine.querySelector(".decrease");
        decreaseButton.addEventListener("click",() =>{
            decreaseQuantity(c.id);
        });

        const increaseButton = cartLine.querySelector(".increase");
        increaseButton.addEventListener("click",() =>{
            increaseQuantity(c);
        });
    
    
        cartContainer.appendChild(cartLine)
    });
    
})

const updateTotalAmount = () => {
    const totalAmountElement = document.querySelector("#total_amount");
    //get Carts from local storage
    const carts = getCartsDataFromLocalStorage();
    const subtotal = carts.reduce((total, cart) => total + cart.price, 0);
    totalAmountElement.textContent = subtotal;
};

displayCart();
updateTotalAmount();

const updateCartCountBadge = () => {
    const cartCount = document.querySelector(".cart__count");
    cartCount.textContent = localStorage.getItem('count');
}

const removeItemFromCart = (itemId) => {
    //get Carts from local storage
    const carts = getCartsDataFromLocalStorage();
    //filter the remove data 
    const updatedCart = carts.filter((item) => item.id !== itemId);
    //update local storage with new data
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    localStorage.setItem('count',updatedCart.length);
    // Clear the cart container
    cartContainer.innerHTML = ""; 
    //carts.splice(0, carts.length, ...updatedCart); // Update the 'carts' array
    
    //Refresh the cart count in the header
    updateCartCountBadge()
    // Re-create the cart container
    displayCart(); 
    //Update the Total amount
    updateTotalAmount();
};

const decreaseQuantity = (itemId) => {
    const carts = getCartsDataFromLocalStorage();
    //find the index of the item for 
    const indexToBeDeletete = carts.findLastIndex(d => d.id === itemId)
    //delete from the array
    carts.splice(indexToBeDeletete,1)

    //update local storage
    localStorage.setItem('cart', JSON.stringify(carts));
    localStorage.setItem('count',carts.length);
    
    // Re-create the cart container
    cartContainer.innerHTML = "";
    displayCart()
    
    //Total calculation
    updateTotalAmount()
    
    //update badge
    updateCartCountBadge()
}

const increaseQuantity = (item) => {
    //read local storage
    const carts = getCartsDataFromLocalStorage();

    //add the new item to the array
    carts.push(item)
    
    //update local storage
    localStorage.setItem('cart', JSON.stringify(carts));
    localStorage.setItem('count',carts.length);

    // Re-create the cart container
    cartContainer.innerHTML = "";
    displayCart()
    
    //Total calculation
    updateTotalAmount()
    
    //update badge
    updateCartCountBadge()
}




