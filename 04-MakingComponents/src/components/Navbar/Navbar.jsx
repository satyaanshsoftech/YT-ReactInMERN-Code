
import logoImage from '../../assets/images/logo.png'
import cartImage from '../../assets/react.svg'
import './Navbar.css'

export default function Navbar()
{
    return(
        <>
            <div class="navbar">
       
        <div class="logo">
            <img src= {logoImage} alt="Logo"/>
        </div>

     
        <ul class="menuItems">
            <li><a href="main.html">Home</a></li>
            <li><a href="#display-products">Products</a></li>
            <li><a href="#footer">About</a></li>
            <li><a href="#footer">Contact</a></li>
        </ul>

    
        <a className="btn-anchor" href="/pages/cart.html">
            <button class="btn">
                <img src= {cartImage} alt="cart icon"/>
                <span> Cart </span>
            </button>
        </a>
    </div> 
        </>
    )
}