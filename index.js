const menus = [
    {
        id: 1,
        name: "Aloo Gobi",
        details: "A flavorful vegetarian dish with potatoes and cauliflower, seasoned with Indian spices.",
        price: 40,
        category: "Veg",
        image: "images/veg/aloo_gobi.avif"
    },
    {
        id: 2,
        name: "Butter Paneer",
        details: "A delightful Indian curry featuring paneer (Indian cottage cheese) cooked in a creamy and aromatic tomato-based sauce, seasoned with spices and a touch of butter.",
        price: 70,
        category: "Veg",
        image: "images/veg/butter_paneer.avif"
    },
    {
        id: 3,
        name: "Daal Makhni",
        details: "A classic Indian lentil dish made with black lentils and kidney beans, simmered in a rich and flavorful tomato-based sauce, finished with cream and aromatic spices.",
        price: 90,
        category: "Veg",
        image: "images/veg/daal_makhni.avif"
    },
    {
        id: 4,
        name: "Palak Paneer",
        details: "A delectable vegetarian dish featuring paneer (Indian cottage cheese) cooked in a creamy spinach gravy, seasoned with aromatic spices.",
        price: 190,
        category: "Veg",
        image: "images/veg/palak_paneer.avif"
    },
    {
        id: 5,
        name: "Rajma Chawal",
        details: "A comforting North Indian dish with red kidney beans cooked in a flavorful tomato-based gravy, served with steamed rice.",
        price: 270,
        category: "Veg",
        image: "images/veg/rajma_chawal.avif"
    },
    {
        id: 6,
        name: "Veg Pulav",
        details: "A fragrant rice dish cooked with a medley of colorful vegetables and aromatic spices, offering a delightful and wholesome flavor.",
        price: 170,
        category: "Veg",
        image: "images/veg/veg_pulao.avif",
    },
    //nonveg category
    {
        id: 7,
        name: "Butter Chicken",
        details: "Tender chicken cooked in creamy buttery tomato gravy.",
        price: 170,
        category: "nonVeg",
        image: "images/nonveg/butter_chicken.avif",
    },
    {
        id: 8,
        name: "Chicken Curry",
        details: "Juicy chicken pieces simmered in aromatic spices and rich curry sauce.",
        price: 170,
        category: "nonVeg",
        image: "images/nonveg/chicken_curry.avif",
    },
    {
        id: 9,
        name: "Fish Curry",
        details: "Tender fish fillets cooked in a flavorful blend of spices and coconut milk.",
        price: 170,
        category: "nonVeg",
        image: "images/nonveg/fish_curry.avif",
    },
    {
        id: 10,
        name: "Tawa Fish Fry",
        details: "pan-fried marinated fish and serve with fresh mint chutney",
        price: 170,
        category: "nonVeg",
        image: "images/nonveg/fish_fry.avif",
    },
    {
        id: 11,
        name: "Mutton Handi",
        details: "Tender mutton cooked in a rich and aromatic gravy, simmered to perfection in a traditional handi pot.",
        price: 170,
        category: "nonVeg",
        image: "images/nonveg/mutton_handi.avif",
    },
    {
        id: 12,
        name: "Prawn Curry",
        details: " prawns cooked in a flavorful curry, infused with aromatic spices for a delightful taste",
        price: 170,
        category: "nonVeg",
        image: "images/nonveg/prawn_curry.avif",
    },
    //category snacks
    {
        id: 13,
        name: "Chana Chaat",
        details: " a combination of chana masala (spicy white chickpeas) and bhatura/puri, a deep-fried bread made from maida.git",
        price: 170,
        category: "street_food",
        image: "images/snacks/chana_chaat.avif",
    },
    {
        id: 14,
        name: "Chole Bhature",
        details: " a combination of chana masala (spicy white chickpeas) and bhatura/puri, a deep-fried bread made from maida.",
        price: 170,
        category: "street_food",
        image: "images/snacks/chole-bhature.avif",
    },
    {
        id: 15,
        name: "Medu Vada",
        details: "spicy and savoury doughnut shape like fritter made with urad dal, onion, spices, and seasoning",
        price: 170,
        category: "street_food",
        image: "images/snacks/medu_vada.avif",
    },
    {
        id: 16,
        name: "Pani puri",
        details: "round puffed balls filled with potato mixture and served with sweet and tangy sauce",
        price: 170,
        category: "street_food",
        image: "images/snacks/panipuri.jpg",
    },
    {
        id: 17,
        name: "samosa",
        details: "deep fried pastry with a spiced filling made with potatoes,peas,spices and herbs.",
        price: 170,
        category: "street_food",
        image: "images/snacks/samosa.avif",
    },
    {
        id: 18,
        name: "Vada Pav",
        details: " a deep fried spicy potato dumpling placed inside a bread bun.",
        price: 170,
        category: "street_food",
        image: "images/snacks/vada_pav.avif",
    },
    //category sweet
    {
        id: 19,
        name: "Gulab Jamun",
        details: "an Indian dessert of fried dough balls that are soaked in a sweet, sticky sugar syrup",
        price: 170,
        category: "sweet",
        image: "images/sweet/gulab_jamun.avif",
    },
    {
        id: 20,
        name: "Jalebi",
        details: "a deep fried sweet made from refined flour and then soaked in syrup.",
        price: 170,
        category: "sweet",
        image: "images/sweet/jalebi.avif",
    },
    {
        id: 21,
        name: "Kaju Katli",
        details: "a smooth thin fudge made with cashews & sugar",
        price: 170,
        category: "sweet",
        image: "images/sweet/kaju_katli.avif",
    },
    {
        id: 22,
        name: "Motichur Laddu",
        details: "made from fine balls of gram flour, fried in ghee or oil and soaked in sugar syrup.",
        price: 170,
        category: "sweet",
        image: "images/sweet/laddo.jpg",
    },
    {
        id: 23,
        name: "Ras Malai",
        details: "Creamy, spongy milk dumplings soaked in fragrant saffron milk syrup",
        price: 170,
        category: "sweet",
        image: "images/sweet/ras_malai.avif",
    },
    {
        id: 24,
        name: "Rosogolla",
        details: "Delicious, traditional Indian dessert, made of soft cottage cheese balls soaked in sugar syrup.",
        price: 170,
        category: "sweet",
        image: "images/sweet/rasgulla.avif",
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

const localStorageCart = localStorage.getItem('cart');
const cart =  localStorageCart ? JSON.parse(localStorageCart) : [];


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
        
        const button = card.querySelector('.card__button');
        button.addEventListener("click",() => {
            cart.push(menu);
            const cartCount = document.querySelector(".cart__count");
            
            localStorage.setItem('cart',JSON.stringify(cart));
            localStorage.setItem('count',cart.length);
            cartCount.textContent = localStorage.getItem('count');
        })
        
        if (menu.category === 'Veg') {
            vegContainer.appendChild(card);
        } else if (menu.category === 'nonVeg') {
            nonvegContainer.appendChild(card);
        } else if (menu.category === 'sweet') {
            sweetContainer.appendChild(card);
        } else if (menu.category === 'street_food') {
            snackContainer.appendChild(card);
        }
    })

    vegContainer.childElementCount === 0 ? document.querySelector('#veg').style.display = "none" : document.querySelector('#veg').style.display = "block"
    nonvegContainer.childElementCount === 0 ? document.querySelector('#nonveg').style.display = "none" : document.querySelector('#nonveg').style.display = "block"
    sweetContainer.childElementCount === 0 ? document.querySelector('#snack').style.display = "none" : document.querySelector('#snack').style.display = "block"
    snackContainer.childElementCount === 0 ? document.querySelector('#sweet').style.display = "none" : document.querySelector('#sweet').style.display = "block"
}

displayMenu(menus);


localStorage.setItem('cart',JSON.stringify(cart));
const searchInput = document.getElementById("msearch");
const search = document.getElementById("searchbutton");


const searchMenu = (menus,searchTerm) => {
    return menus.filter((menu) => menu.name.toLowerCase().includes(searchTerm.toLowerCase()));
 }

 search.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const filtermenu=searchMenu(menus,searchTerm);
    displayMenu(filtermenu);
    searchInput.value = "";

 });

 const resetMenu = () => {
    displayMenu(menus);
 }


