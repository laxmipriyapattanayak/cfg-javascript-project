const menus = [
    {
        id: 1,
        name: "Fastfood",
        details: "yet to fill",
        price: 40,
        category: "Veg",
        image: "images/veg/veg1.avif"
    },
    {
        id: 2,
        name: "Pan Cakes",
        details: "yet to fill",
        price: 70,
        category: "Veg",
        image: "images/veg/veg1.avif"
    },
    {
        id: 3,
        name: "Thai Meals",
        details: "yet to fill",
        price: 90,
        category: "Veg",
        image: "images/veg/veg1.avif"
    },
    {
        id: 4,
        name: "Pasta Soup",
        details: "yet to fill",
        price: 190,
        category: "Veg",
        image: "images/veg/veg1.avif"
    },
    {
        id: 5,
        name: "Pizza Do Piazza",
        details: "yet to fill",
        price: 270,
        category: "Veg",
        image: "images/veg/veg1.avif"
    },
    {
        id: 6,
        name: "Chicken Rice",
        details: "yet to fill",
        price: 170,
        category: "Veg",
        image: "images/veg/veg1.avif",
    },
    //nonveg category
    {
        id: 7,
        name: "Chicken Rice",
        details: "yet to fill",
        price: 170,
        category: "nonVeg",
        image: "images/veg/veg1.avif",
    },
    {
        id: 8,
        name: "Chicken Rice",
        details: "yet to fill",
        price: 170,
        category: "nonVeg",
        image: "images/veg/veg1.avif",
    },
    {
        id: 9,
        name: "Chicken Rice",
        details: "yet to fill",
        price: 170,
        category: "nonVeg",
        image: "images/veg/veg1.avif",
    },
    {
        id: 10,
        name: "Chicken Rice",
        details: "yet to fill",
        price: 170,
        category: "nonVeg",
        image: "images/veg/veg1.avif",
    },
    {
        id: 11,
        name: "Chicken Rice",
        details: "yet to fill",
        price: 170,
        category: "nonVeg",
        image: "images/veg/veg1.avif",
    },
    {
        id: 12,
        name: "Chicken Rice",
        details: "yet to fill",
        price: 170,
        category: "nonVeg",
        image: "images/veg/veg1.avif",
    },
    //category snacks
    {
        id: 13,
        name: "Chicken Rice",
        details: "yet to fill",
        price: 170,
        category: "snacks",
        image: "images/veg/veg1.avif",
    },
    {
        id: 14,
        name: "Chicken Rice",
        details: "yet to fill",
        price: 170,
        category: "snacks",
        image: "images/veg/veg1.avif",
    },
    {
        id: 15,
        name: "Chicken Rice",
        details: "yet to fill",
        price: 170,
        category: "snacks",
        image: "images/veg/veg1.avif",
    },
    {
        id: 16,
        name: "Chicken Rice",
        details: "yet to fill",
        price: 170,
        category: "snacks",
        image: "images/veg/veg1.avif",
    },
    {
        id: 17,
        name: "Chicken Rice",
        details: "yet to fill",
        price: 170,
        category: "snacks",
        image: "images/veg/veg1.avif",
    },
    {
        id: 18,
        name: "Chicken Rice",
        details: "yet to fill",
        price: 170,
        category: "snacks",
        image: "images/veg/veg1.avif",
    },
    //category sweet
    {
        id: 19,
        name: "Chicken Rice",
        details: "yet to fill",
        price: 170,
        category: "sweet",
        image: "images/veg/veg1.avif",
    },
    {
        id: 20,
        name: "Chicken Rice",
        details: "yet to fill",
        price: 170,
        category: "sweet",
        image: "images/veg/veg1.avif",
    },
    {
        id: 21,
        name: "Chicken Rice",
        details: "yet to fill",
        price: 170,
        category: "sweet",
        image: "images/veg/veg1.avif",
    },
    {
        id: 22,
        name: "Chicken Rice",
        details: "yet to fill",
        price: 170,
        category: "sweet",
        image: "images/veg/veg1.avif",
    },
    {
        id: 23,
        name: "Chicken Rice",
        details: "yet to fill",
        price: 170,
        category: "sweet",
        image: "images/veg/veg1.avif",
    },
    {
        id: 24,
        name: "Chicken Rice",
        details: "yet to fill",
        price: 170,
        category: "sweet",
        image: "images/veg/veg1.avif",
    }

]

const cardTemplate = document.querySelector('#card__template');
const vegContainer = document.getElementById("veg-container");
const nonvegContainer = document.getElementById("nonveg-container");
const sweetContainer = document.getElementById("sweet-container");
const snackContainer = document.getElementById("snack-container");
const veg = document.getElementById("veg");
const nonveg = document.getElementById("nonveg");
const snack = document.getElementById("snack");
const sweet = document.getElementById("sweet");

const displayMenu = (menus) => {

    vegContainer.innerHTML = "";
    nonvegContainer.innerHTML = "";
    sweetContainer.innerHTML = "";
    snackContainer.innerHTML = "";
    
    menus.forEach((menu)=>{
        const card = document.importNode(cardTemplate.content, true);
        card.querySelector('.card__name').textContent = menu.name;
        card.querySelector('.card__details').textContent = menu.details;
        card.querySelector('.card__price').textContent = menu.price;
        card.querySelector('img').src = menu.image;
    
        if (menu.category === 'Veg') {
            vegContainer.appendChild(card);
        } else if (menu.category === 'nonVeg') {
            nonvegContainer.appendChild(card);
        } else if (menu.category === 'sweet') {
            sweetContainer.appendChild(card);
        } else if (menu.category === 'snacks') {
            snackContainer.appendChild(card);
        }

    
    })

    vegContainer.childElementCount === 0 ? document.querySelector('#veg').style.display = "none" : document.querySelector('#veg').style.display = "block"
    nonvegContainer.childElementCount === 0 ? document.querySelector('#nonveg').style.display = "none" : document.querySelector('#nonveg').style.display = "block"
    sweetContainer.childElementCount === 0 ? document.querySelector('#snack').style.display = "none" : document.querySelector('#snack').style.display = "block"
    snackContainer.childElementCount === 0 ? document.querySelector('#sweet').style.display = "none" : document.querySelector('#sweet').style.display = "block"
}
displayMenu(menus);

const searchInput = document.getElementById("msearch");
const search = document.getElementById("searchbutton");


const searchMenu = (menus,searchTerm) => {
    return menus.filter((menu) => menu.name.toLowerCase().includes(searchTerm.toLowerCase()));
 }

 search.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const filtermenu=searchMenu(menus,searchTerm);
    displayMenu(filtermenu);
 });

 const resetMenu = () => {
    displayMenu(menus);
 }



