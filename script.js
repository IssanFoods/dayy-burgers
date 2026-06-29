/*=====================================

DAYY BURGERS
WHATSAPP SETTINGS

=====================================*/

const WHATSAPP_NUMBER = "917303220600"; // Replace with your WhatsApp number (country code + number)

/*=====================================

DAYY BURGERS

SHOPPING CART ENGINE

PART 1

=====================================*/

let cart = JSON.parse(localStorage.getItem("dayyCart")) || [];

let selectedProduct = null;

/*====================================================

DAYY BURGERS

PART 3A

Core Website JavaScript

====================================================*/


/*==============================
SELECTORS
==============================*/

const header = document.querySelector("header");
const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll("section");
const fadeElements = document.querySelectorAll(".fade");



/*==============================
SMOOTH SCROLL
==============================*/

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const target = this.getAttribute("href");

        if (target.startsWith("#")) {

            e.preventDefault();

            document.querySelector(target).scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});



/*==============================
STICKY HEADER
==============================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(0,0,0,.92)";

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }

    else {

        header.style.background = "rgba(0,0,0,.72)";

        header.style.boxShadow = "none";

    }

});



/*==============================
ACTIVE NAV LINK
==============================*/

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.clientHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



/*==============================
SCROLL REVEAL
==============================*/

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold: .15

});

fadeElements.forEach(el => observer.observe(el));



/*==============================
BACK TO TOP BUTTON
==============================*/

const topButton = document.createElement("button");

topButton.id = "topBtn";

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/*==============================
FLOATING WHATSAPP
==============================*/

const whatsapp = document.createElement("a");

whatsapp.href = "https://wa.me/917303220600";

whatsapp.className = "whatsapp-float";

whatsapp.target = "_blank";

whatsapp.innerHTML = "💬";

document.body.appendChild(whatsapp);



/*==============================
HERO PARALLAX
==============================*/

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    let offset = window.pageYOffset;

    hero.style.backgroundPositionY = offset * 0.45 + "px";

});



/*==============================
MENU CARD HOVER EFFECT
==============================*/

const cards = document.querySelectorAll(".menu-card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const x = e.offsetX;

        const y = e.offsetY;

        card.style.background =

        `radial-gradient(circle at ${x}px ${y}px,

        rgba(255,193,7,.15),

        #1a1a1a 65%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#1a1a1a";

    });

});



/*==============================
IMAGE FADE-IN
==============================*/

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "scale(1)";

        }

    });

}, {

    threshold: .2

});

images.forEach(img => {

    img.style.opacity = "0";

    img.style.transform = "scale(.95)";

    img.style.transition = ".8s";

    imageObserver.observe(img);

});



/*==============================
SECTION TITLE ANIMATION
==============================*/

const titles = document.querySelectorAll(".section-title");

titles.forEach(title => {

    title.classList.add("fade");

    observer.observe(title);

});



/*==============================
COUNTRY CARD EFFECT
==============================*/

const countryCards = document.querySelectorAll(".country-card");

countryCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});



/*==============================
ORDER BUTTON ANIMATION
==============================*/

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-6px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});



/*==============================
PRELOADER
==============================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});



/*==============================
UTILITY
==============================*/

function scrollToSection(id){

    document.querySelector(id).scrollIntoView({

        behavior:"smooth"

    });

}



/*==============================
CONSOLE
==============================*/

console.log("DAYY BURGERS WEBSITE LOADED SUCCESSFULLY");

/*====================================================

DAYY BURGERS
PART 3B
Dynamic Menu Generator

====================================================*/


const menuData = [
  {
    category: "American Loaded Smash Burgers",
    items: [
      {
        name: "Cheesy Buff Smash Burger",
        description: "A single smashed buffalo patty delivering 20g of high-quality protein. ",
        image: "images/menu/CHEESY BUFF SMASH BURGER.jpg",
        price :315
      },
      {
        name: "Cheesy Lamb Smash Burger",
        description: "One perfectly smashed lamb patty bold, rich, and unmistakably refined..",
        image: "images/menu/CHEESY LAMB SMASH BURGER.jpg",
        price:465

      },
      {
        name: "Cheesy Chicken Smash Burger",
        description: "A perfectly smashed 127g premium chicken patty, seared hard.",
        image: "images/menu/CHEESY chicken SMASH BURGER.jpg",
        price :315
      }
     
    ]
  },

  {
    category: "American Classic Smash Burgers",
    items: [{
        name: "Double Og Classic Buff Smash Burger",
        description: "Two smashed buffalo patties delivering deep, rich flavor with beautifully caramelized edges. ",
        image: "images/menu/Double OG Classic Buff Smash Burger.png",
        price :315
      },
      {
        name: "Double Og Classic Lamb Smash Burger",
        description: "Two smashed lamb patties delivering rich, slightly sweet depth with crisped edges.",
        image: "images/menu/Double OG Classic lamb Smash Burger.png",
        price :315
      },
      {
        name: "Double Og Classic Chicken Smash Burger",
        description: "Two smashed chicken patties, seared to golden perfection with juicy centers",
        image: "images/menu/Double OG Classic chicken Smash Burger.png",
        price :315
      }
     ]
  },

  {
    category: "American Meat Cheese Bomb Burgers",
    items: [
        {
        name: "Buff Cheese Bomb Burger",
        description: "Bold, fiery, and unapologetically juicy. This buffalo patty is packed with 30 gm protein",
        image: "images/menu/BUFF CHEESE BOMB BURGER.jpeg",
        price :315
    
      },
      {
        name: "Lamb Cheese Bomb Burger",
        description: "Rich, juicy lamb packed with deep, savory flavor and a surprise molten cheese core waiting inside.",
        image: "images/menu/Cheese Bomb Burger .jpg",
        price :315
      },
      {
        name: "Chicken Cheese Bomb Burger",
        description: "A 190 gm chicken patty stuffed with molten cheese at its core, exploding with flavor in every bite",
        image: "images/menu/Cheese Bomb Burger .jpg",
        price :315
      }
    ]
  },

  {
    category: "Korean Fried & Mince Meat Burgers",
    items: [ {
        name: "K=Style Krispy Chicken Burger",
        description: "Crafted in South Korea, made in Delhi. Sweet N spicy like never before juiciest and crispiest chicken thigh with coleslaw visualized in seoul.",
        image: "images/menu/K style krispy chicken burger.jpeg",
        price :315
      },
      {
        name: "K-Pop Buff Burger",
        description: "This beast brings together a grilled buffalo patty layered with juicy bulgogi mince, glazed in fiery gochujang and your signature in-house Korean sauce.",
        image: "images/menu/k-pop buff burger .jpeg",
        price :315
      },
      {
        name: "K-Pop Lamb Burger",
        description: "One lamb patty, one bulgogi layer juicy, smoky and dangerously addictive. The perfect intro to Korean fusion power.",
        image: "images/menu/k-pop lamb burger.jpeg",
        price :315
      }
    ]
  },

  {
    category: "Indian Grill, Zinger & Crispy Burgers",
    items: [{
        name: "Crunchy Chatkara Chicken Burger",
        description: "Chicken mince blended with desi masalas formed in a crisp patty placed in wonderful buns along with pickled onion and garlic aioli.",
        image: "images/menu/crunchy chatkara chicken burger.jpg",
        price :315
      },
      {
        name: "Kadak Zinger Chicken Burger",
        description: "Four sides of cheese which includes a slice as well perfectly adjusted in a burger with the crispiest and juiciest thigh to give you a whole new experience of zingerness with crisp of onion, capsicum & iceberg lettuce.",
        image: "images/menu/kadak zinger burger.jpeg",
        price :315
      },
      {
        name: "Grill Shrill Chicken Burger",
        description: "Two Chicken thighs weighing 160 gm prepared using T masala of 100% Indian origin with an amalgam of dressings like honey mustard, thousand island and cheese slice to give you heavenly pleasure and satisfaction with 40 gm Protein in a Single Burger.",
        image: "images/menu/grill shrill thigh chicken burger.jpg",
        price :315
      }]
  },

  {
    category: "Indian Vegetarian Burgers",
    items: [{
        name: "Sabz E Shahi Burger",
        description: "Crispy crunchy patty stuffed with fresh veggies topped with crunchy onion rings. Adding on with cheese slices and exquisite sauces to pair up and give you a mouthwatering experience. 100% Veg",
        image: "images/menu/SABZ E SHAHI BURGER.jpeg",
        price :315
      },
      {
        name: "Double Paneer Fusion Burger",
        description: "Dual dose of patties with a cheddar cheese slice getting hot in between both patties which is topped with self crafted chataka onion and quirky beetroot cabbage relish. Warning contains 120 gm Authentic & Tested Paneer.",
        image: "images/menu/DOUBLE FUSION PANEER BURGER.jpg",
        price :315
      },
      {
        name: "Black Bean Burger",
        description: "Made with seasoned black beans, aromatic spices, and a hint of smokiness, the patty is perfectly grilled to achieve a crispy exterior and a soft, satisfying center.",
        image: "images/menu/DOUBLE FUSION PANEER BURGER.jpg",
        price :315
      }]
  },

  {
    category: "Indian Old Delhi Burgers",
    items: [{
        name: "Buff Bong Nihari Burger",
        description: "Bold meets desi in our Buffalo Nihari Burger “ tender nihari-spiced meat, coriander dressing, raw jalapenos, ginger julienne, masaledar onions, cheese, and crisp iceberg lettuce, all stacked in a buttery brioche bun. Fiery, flavorful, unforgettable.",
        image: "images/menu/buff bong nihari burger .jpeg",
        price :315
      },
      {
        name: "Doguna Buff Bong Nihari Burger",
        description: "A Royal Tradition, Reimagined. Experience the soul-stirring flavors of old-world Delhi in every bite. This masterpiece features a Doguna (double) helping of Buffalo Bong (Shank) meat, slow-cooked for hours in a rich..",
        image: "images/menu/doguna buff bong nihari burger .jpeg",
        price :315
      },]
  },

  {
    category: "Saudi Arabian Char-Grilled Burgers",
    items: [{
        name: "Buff Chargrilled Burger",
        description: "Featuring a juicy buffalo meat patty, flame-grilled to perfection for that deep, charred flavor, every bite delivers a robust and satisfying taste.",
        image: "images/menu/Buff Chargrilled Burger.png",
        price :315
      },
      {
        name: "Chicken Chargrilled Burger",
        description: "Made with a succulent chicken patty, expertly flame-grilled to lock in its natural juices and smoky aroma, this burger delivers a perfect bite every time.",
        image: "images/menu/chicken Chargrilled Burger.png",
        price :315
      },
      {
        name: "Lamb Chargrilled Burger",
        description: "Made with a succulent lamb patty seasoned with aromatic spices and flame-grilled to perfection, it delivers a smoky, melt-in-your-mouth experience. Paired with fresh greens, crisp onions, and a hint of creamy sauce in a toasted bun, this burger offers a perfect balance of richness and freshness in every bite.",
        image: "images/menu/lamb Chargrilled Burger.png",
        price :315
      }]
  },

  {
    category: "American Meat Loaded Cheesy Fries",
    items: [{
        name: "Buff Loaded Cheesy Fries",
        description: "Buff Cheesy Fries are a spicy, flavorful twist on the classic cheesy fries, combining the richness of melted cheese with the bold heat of buffalo mince.",
        image: "images/menu/buff loaded cheesy fries .png",
        price :315
      },
      {
        name: "Lamb Loaded Cheesy Fries",
        description: "Lamb Cheesy Fries are a savory and indulgent twist on classic cheesy fries, featuring flavorful lamb patties smashed as the star topping",
        image: "images/menu/lamb loaded cheesy fries .png",
        price :315
      },
      {
        name: "Chicken Loaded Cheesy Fries",
        description: "Chicken Cheesy Fries are a delicious and savory variation of classic cheesy fries, featuring a hearty topping of seasoned chicken mince (ground chicken",
        image: "images/menu/Chicken loaded cheesy fries .png",
        price :315
      }]
  },

  {
    category: "Korean Fried Chicken Sides",
    items: [{
        name: "Korean Fried Crispy Chicken Legs [with Coleslaw]",
        description: "Juicy chicken legs with an ultra-crispy coating, tossed in a rich Korean sauce that blends sweetness with a spicy kick. Served with cool, creamy coleslaw.",
        image: "images/menu/Korean Legs .png",
        price :315
      },
      {
        name: "Korean Jumbo Chicken Wings [with Coleslaw]",
        description: "Crispy jumbo chicken wings tossed in a bold Korean-style glazeâ€”sweet, spicy, and packed with flavor. Served with fresh, creamy coleslaw for the perfect balance.",
        image: "images/menu/Korean Wings .png",
        price :315
      },
     ]
  },

  {
    category: "Indo American Chicken Sides",
    items: [{
        name: "Masaledar Chicken Popcorn (16 Pcs)",
        description: "Juicy chicken thighs came forward to save you from that popcorn chewiness from your plate which comes after eating chewcorns made from chicken breast. Soft soft popcorns with crispy texture sprinkled with tasty tasty masala.",
        image: "images/menu/MASALEDAR CHICKEN POPCORN .jpeg",
        price :315
      },
      {
        name: "Jumbo Chicken Wings [Peri Peri]",
        description: "Giant YES! we call them Jumbo Wings which are sprinkled with peri peri masala to make them more flavorful.",
        image: "images/menu/Chicken Wings .png",
        price :315
      },
      {
        name: "Crispy Fried Chicken Leg [Zesty Lemon Pepper]",
        description: "Chicken Legs with Magical Masala.",
        image: "images/menu/Chicken Leg.png",
        price :315
      }]
  },

  {
    category: "Indo American Vegetarian Sides",
    items: [{
        name: "Sizzling Paneer Poppers (16 Pcs)",
        description: "Bahut heavy protien wala snack with high quality paneer used for preparing every serving. These poppers are served with a special sauce.",
        image: "images/menu/SIZZILING PANEER POPPERS.jpeg",
        price :315
      },
      {
        name: "Aloo Ki Fries",
        description: "Soft yet crispy potato fries sprinkled with pink salt to make you blush.",
        image: "images/menu/ALOO KI FRIES.jpg",
        price :315
      },
      {
        name: "Cheesy Fries",
        description: "Ideal for sharing (or not!), these cheesy crinkle fries are the perfect comfort food for any occasion.",
        image: "images/menu/Cheesy Fries .png",
        price :315
      }]
  },

  {
    category: "Italian Delicate Parmesan Fries",
    items: [{
        name: "Crispy Chicken Parmesan Fries",
        description: "Fragrant mix of grated Parmesan cheese topped with tender, juicy grilled chicken making this dish a satisfying and flavorful treat.",
        image: "images/menu/Crispy Chicken Parmesan Fries .png",
        price :315
      },
      {
        name: "Classic Garlic Parmesan Fries",
        description: "Crispy fries are tossed in a fragrant mix of freshly minced garlic and grated Parmesan cheese, creating a deliciously crispy exterior with a rich, buttery finish.",
        image: "images/menu/Classic Garlic Parmesan Fries .png",
        price :315
      },
      ]
  },

  {
    category: "Desi Indian Chatakdaar Fries",
    items: [{
        name: "Desi Dhamakedar Veg Fries",
        description: "Sprinkled with chataka & creamy mint mayonnaise sauces adds a refreshing finish to each bite then piled high with colorful, fresh veggies like diced tomatoes, onions, cucumbers, and bell peppers.",
        image: "images/menu/Desi Dhamakedaar Veggie Fries .png",
        price :315
      },
      {
        name: "Desi Chataka Chicken Fries",
        description: "Coated in zesty chataka seasoning and topped with juicy, tender chicken, these fries are a flavorful delight. Each bite packs the perfect balance of spice and savory goodness, making them an irresistible treat.",
        image: "images/menu/Desi Chataka Chicken Fries .png",
        price :315
      },]
  },


];



const menuContainer = document.getElementById("menu-container");



function renderMenu(){

    if(!menuContainer) return;

    menuContainer.innerHTML = "";

    menuData.forEach(category=>{

        const section=document.createElement("div");

        section.className="menu-category";

        section.innerHTML=`
           <h2 class="category-title">${category.category}</h2>
            <div class="menu-grid"></div>
        `;

        const grid=section.querySelector(".menu-grid");

        category.items.forEach(item=>{

            const card=document.createElement("div");

            card.className="menu-card clickable-card";

    card.innerHTML=`

        <div class="menu-image">

            <img
                src="${item.image}"
                alt="${item.name}"
                onerror="this.src='images/menu/placeholder.jpg'">

        </div>

        <div class="menu-content">

            <span class="category-badge">

                ${category.category}

            </span>

            <h3>${item.name}</h3>

            <p>${item.description}</p>

            <a href="javascript:void(0)" class="menu-btn">

                View Details

            </a>

        </div>

    `;

    // Open Product Modal when clicking the card
    card.addEventListener("click",function(){

        openProductModal(item);

    });

    grid.appendChild(card);

});
        menuContainer.appendChild(section);

    });

}

renderMenu();



/*==========================
SEARCH
==========================*/

const searchInput=document.createElement("input");

searchInput.type="text";

searchInput.placeholder="Search Burgers...";

searchInput.className="menu-search";

const menu=document.getElementById("menu");

if(menu){

menu.insertBefore(searchInput,menuContainer);

}



searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

document.querySelectorAll(".menu-category").forEach(category=>{

let visibleItems = 0;

category.querySelectorAll(".menu-card").forEach(card=>{

const text = card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

visibleItems++;

}else{

card.style.display="none";

}

});

category.style.display = visibleItems ? "block" : "none";

});

});

document.querySelectorAll(".filter-bar button").forEach(button=>{

    button.addEventListener("click",function(){

        document.querySelectorAll(".filter-bar button").forEach(btn=>{

            btn.classList.remove("active");

        });

        this.classList.add("active");

        const filter=this.dataset.filter;

        document.querySelectorAll(".menu-category").forEach(section=>{

            const title=section.querySelector("h2").innerText;

            if(filter==="all"){

                section.style.display="block";

            }

            else{

                section.style.display=

                    title===filter

                    ?"block"

                    :"none";

            }

        });

    });

});


/*==========================
CATEGORY FILTERS
==========================*/

const filterBar = document.createElement("div");

filterBar.className = "filter-bar";

let buttons = `<button class="active" data-filter="all">All</button>`;

menuData.forEach(category => {

    buttons += `
        <button data-filter="${category.category}">
            ${category.category}
        </button>
    `;

});

filterBar.innerHTML = buttons;

menu.insertBefore(filterBar, searchInput);

/* Click Events */

filterBar.addEventListener("click", function(e){

    if(!e.target.matches("button")) return;

    filterBar.querySelectorAll("button").forEach(btn=>{

        btn.classList.remove("active");

    });

    e.target.classList.add("active");

    const filter = e.target.dataset.filter;

    document.querySelectorAll(".menu-category").forEach(section=>{

        const title = section.querySelector("h2").textContent.trim();

        if(filter==="all"){

            section.style.display="block";

        }

        else{

            if(title===filter){

                section.style.display="block";

            }

            else{

                section.style.display="none";

            }

        }

    });

});

/*==========================================

PRODUCT MODAL

==========================================*/

const modal = document.getElementById("productModal");

const modalImage = document.getElementById("modalImage");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const modalPrice = document.getElementById("modalPrice");

const closeModal = document.querySelector(".close-modal");



function openProductModal(product){

    selectedProduct = product;

    currentQuantity = 1;

updateQuantity();

modal.style.display="flex";

modalImage.src=product.image;

modalTitle.innerHTML=product.name;

modalDescription.innerHTML=product.description;

modalPrice.innerHTML=product.price || "";

document.body.style.overflow="hidden";

}



function closeProductModal(){

modal.style.display="none";

document.body.style.overflow="auto";

}



closeModal.onclick=closeProductModal;



window.onclick=function(e){

if(e.target===modal){

closeProductModal();

}

};



document.addEventListener("keydown",function(e){

if(e.key==="Escape"){

closeProductModal();

}

});

/*==================================

PRODUCT QUANTITY

==================================*/

let currentQuantity = 1;

const qtyDisplay = document.getElementById("productQty");

const plusBtn = document.getElementById("plusQty");

const minusBtn = document.getElementById("minusQty");

function updateQuantity(){

    qtyDisplay.innerHTML = currentQuantity;

}

plusBtn.addEventListener("click",function(){

    currentQuantity++;

    updateQuantity();

});

minusBtn.addEventListener("click",function(){

    if(currentQuantity>1){

        currentQuantity--;

        updateQuantity();

    }

});

updateQuantity();

/*=====================================

SAVE CART

=====================================*/

function saveCart(){

    localStorage.setItem(

        "dayyCart",

        JSON.stringify(cart)

    );

}

/*=====================================

ADD PRODUCT

=====================================*/

function addProductToCart(){

    

    if(!selectedProduct){

        return;

    }

    const existing = cart.find(item=>{

        return item.name===selectedProduct.name;

    });

    if(existing){

        existing.quantity += currentQuantity;

    }

    else{

        cart.push({

            name:selectedProduct.name,

            description:selectedProduct.description,

            image:selectedProduct.image,

            price:selectedProduct.price || 0,

            quantity:currentQuantity

        });


    }

    saveCart();

    updateCartBadge();

    showToast(

        selectedProduct.name +

        " added to cart."

    );

    closeProductModal();
    renderCart();

document.getElementById("cartDrawer").classList.add("open");
renderCart();

cartDrawer.classList.add("open");

}

const addCartBtn = document.getElementById("addCartBtn");

addCartBtn.addEventListener("click",addProductToCart);

/*=====================================

CART BADGE

=====================================*/


function updateCartBadge(){

    let total = 0;

    cart.forEach(item=>{

        total += item.quantity;

    });

    document.getElementById("cartBadge").innerText = total;

}

/*=====================================

TOAST

=====================================*/

function showToast(message){

const toast=document.createElement("div");

toast.className="toast";

toast.innerHTML=message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{

toast.remove();

},400);

},2500);

}

/*=====================================

CART DRAWER

=====================================*/

const cartDrawer=document.getElementById("cartDrawer");

const cartItems=document.getElementById("cartItems");

const cartTotal=document.getElementById("cartTotal");

const closeCart=document.getElementById("closeCart");

document.getElementById("cartIcon").onclick=function(){

    cartDrawer.classList.add("open");

    renderCart();

};

closeCart.onclick = function () {

    cartDrawer.classList.remove("open");

};

document.getElementById("cartIcon").onclick = function () {

    cartDrawer.classList.add("open");

    renderCart();

};

/*=====================================

RENDER CART

=====================================*/

function renderCart(){

cartItems.innerHTML="";

let total=0;

if(cart.length===0){

cartItems.innerHTML="<h3>Your cart is empty.</h3>";

cartTotal.innerHTML="0";

return;

}

cart.forEach((item,index)=>{

total+=item.quantity*(item.price||0);

const div=document.createElement("div");

div.className="cart-item";

div.innerHTML=`

<img src="${item.image}"

onerror="this.src='images/menu/placeholder.jpg'">

<div class="cart-info">

<h4>${item.name}</h4>

<p>₹${item.price||0}</p>

<div class="cart-controls">

<button onclick="decreaseQty(${index})">-</button>

<span>${item.quantity}</span>

<button onclick="increaseQty(${index})">+</button>

</div>

<button

class="remove-item"

onclick="removeItem(${index})">

Remove

</button>

</div>

`;

cartItems.appendChild(div);

});

cartTotal.innerHTML=total;

}

/*=====================================

CART FUNCTIONS

=====================================*/

function increaseQty(index){

cart[index].quantity++;

saveCart();

updateCartBadge();

renderCart();

}

function decreaseQty(index){

if(cart[index].quantity>1){

cart[index].quantity--;

}else{

cart.splice(index,1);

}

saveCart();

updateCartBadge();

renderCart();

}

function removeItem(index){

cart.splice(index,1);

saveCart();

updateCartBadge();

renderCart();

calculateTotals();

}

/*===================================

TOTAL CALCULATION

===================================*/

const DELIVERY_CHARGE = 50;

const GST_RATE = 0.05;

let discount = 0;

function calculateTotals(){

let subtotal = 0;

cart.forEach(item=>{

subtotal += item.quantity * (item.price || 0);

});

subtotal -= discount;

if(subtotal < 0){

subtotal = 0;

}

const gst = Math.round(subtotal * GST_RATE);

const total = subtotal + DELIVERY_CHARGE + gst;

document.getElementById("cartTotal").innerHTML = subtotal;

document.getElementById("gstAmount").innerHTML = gst;

document.getElementById("grandTotal").innerHTML = total;

}

document.getElementById("applyCoupon").onclick=function(){

const code=document.getElementById("couponCode").value.trim().toUpperCase();

if(code==="DAYY100"){

discount=100;

showToast("₹100 Discount Applied");

}else{

discount=0;

showToast("Invalid Coupon");

}

calculateTotals();

};


const checkoutModal=document.getElementById("checkoutModal");

document.getElementById("checkoutBtn").onclick=function(){

if(cart.length===0){

showToast("Your cart is empty");

return;

}

checkoutModal.style.display="flex";

};

window.addEventListener("click",function(e){

if(e.target===checkoutModal){

checkoutModal.style.display="none";

}

});

function generateOrderID(){

    const now = new Date();

    return "DAYY-" +
        now.getFullYear() +
        (now.getMonth()+1).toString().padStart(2,"0") +
        now.getDate().toString().padStart(2,"0") +
        "-" +
        Math.floor(Math.random()*9000+1000);

}

function buildWhatsAppMessage(){

    let subtotal = 0;

    let message = "";

    const orderID = generateOrderID();

    message += "🍔 *DAYY BURGERS ORDER*%0A%0A";

    message += "*Order ID:* " + orderID + "%0A%0A";

    message += "*Customer:* " + document.getElementById("customerName").value + "%0A";

    message += "*Phone:* " + document.getElementById("customerPhone").value + "%0A";

    message += "*Address:* " + document.getElementById("customerAddress").value + "%0A%0A";

    message += "*Items:*%0A";

    cart.forEach(item=>{

        subtotal += item.price * item.quantity;

        message += "• " +
            item.name +
            " x " +
            item.quantity +
            " = ₹" +
            (item.price * item.quantity) +
            "%0A";

    });

    const gst = Math.round(subtotal * GST_RATE);

    const total = subtotal + gst + DELIVERY_CHARGE;

    message += "%0A";

    message += "Subtotal : ₹" + subtotal + "%0A";

    message += "Delivery : ₹" + DELIVERY_CHARGE + "%0A";

    message += "GST : ₹" + gst + "%0A";

    message += "*TOTAL : ₹" + total + "*%0A%0A";

    const note = document.getElementById("orderNote").value;

    if(note){

        message += "*Instructions:* " + note + "%0A%0A";

    }

    message += "Thank you for ordering from DAYY Burgers ❤️";

    return message;

}

document.getElementById("placeOrderBtn").addEventListener("click",function(){

    const name = document.getElementById("customerName").value.trim();

    const phone = document.getElementById("customerPhone").value.trim();

    const address = document.getElementById("customerAddress").value.trim();

    if(name==="" || phone==="" || address===""){

        showToast("Please complete all delivery details.");

        return;

    }

    const message = buildWhatsAppMessage();

    window.open(

        "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + message,

        "_blank"

    );

});










