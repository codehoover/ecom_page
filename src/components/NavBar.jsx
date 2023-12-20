import Astrologo from "../assets/A.png"

export default function NavBar(){
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
                    <button id="search-button">Search</button>
                </div>

                <div id="wishlist">

                </div>

            </div>

            <div id="navbar-banner">
                <p>PROUDLY CANADIAN</p>

            </div>

        </div>



    )
}