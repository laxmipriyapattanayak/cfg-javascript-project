class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <header>
        <nav class="navbar">
            <div class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" 
                viewBox="0 0 448 512">
                    <style>svg{fill:#a18f61}</style>
                    <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/>
                </svg>
                <span id="logo_text">&nbsp Authentic India</span>
            </div>
            <ul class="menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><div class="shopping_cart">
                    <a href="cart.html">
                    <i class="fa-solid fa-cart-shopping" style="color: #a18f61";></i>
                    <div class="cart__count">0</div>
                    </a>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
        `
    }
}
customElements.define('my-header',MyHeader);

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <footer>
        <div class="footer_container">
            <div class="footer_div">
                <h3 class="footer_heading">More about us</h3>
            <p class="footer_paragraph">
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Repellendus, dolores 
                accusamus magnam qui, 
                libero maiores sit nam autem, 
                doloremque voluptates natus optio 
                velit itaque pariatur molestiae! Perferendis ad optio dolor?
            </P>
            </div>
            <div class="footer_div">
                <h3 class="footer_heading">keep contacted</h3>
                <ul class="footer_list">
                    <li><a href="#"><i class="fa-brands fa-facebook"></i>&nbsp &nbsp Like us on Facebook</a></li>
                    <li><a href="#"><i class="fa-brands fa-instagram"></i>&nbsp &nbspFollow us on Instagram</a></li>
                    <li><a href="#"><i class="fa-brands fa-twitter"></i>&nbsp &nbspFollow us on Twitter</a></li>
                </ul>
            </div>
            <div class="footer_div">
                <h3 class="footer_heading">Contact Information</h3>
                <ul class="footer_list">
                    <li><a href="index.html"><i class="fa-solid fa-house"></i>Authentic India</a></li>
                    <li><a href="#"><i class="fa-solid fa-mobile-screen"></i>1234567890</a></li>
                    <li><a href="#"><i class="fa-solid fa-envelope"></i>contactus@example.com</a></li>
                </ul>
            </div>
        </div>
         

            
        

    </footer>
        `
    }
}
customElements.define('my-footer',MyFooter);

const cartCount = document.querySelector(".cart__count");
cartCount.textContent = localStorage.getItem('count');