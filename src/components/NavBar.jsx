import Astrologo from "../assets/A.png"
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingCart,AttachMoney } from "@mui/icons-material";
import { useState } from "react";


export default function NavBar(){
    const [open,setOpen] = useState(false);

    function handleOpen(){
        setOpen(!open);
    }

    return(
        <div>
            <div id="navbar-container">
                <a href="#">
                    <img src={Astrologo} width={200} height={200} alt="Astro Logo"/>
                </a>
                
                <div id="navbar-opts">
                    <a id="opt" href="#">HOME</a>
                    <a id="opt" href="#">COLLECTIONS</a>
                    <a id="opt" href="#">SHOP</a>
                    <a id="opt" href="#">ABOUT US</a>
                </div>

                <div id="search-bar">
                    <input id="search-input" placeholder="Search for a Product"></input>
                    <button id="search-button"><SearchIcon/></button>
                </div>

                <div id="shopping-cart">
                    <ShoppingCart/>
                </div>

                <div id="currency">
                    <button id="currency-selector" onClick={handleOpen}>
                        <AttachMoney/>
                        
                            <div id="dropdown">
                                {open ? <div>USD</div> : <div>CAD</div>}

                            </div>
                    </button>
                </div>
                


            </div>

            <div id="navbar-banner">
                <p>PROUDLY CANADIAN</p>

            </div>

        </div>



    )
}