import { Link } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
// import images for category
import mensFashion from "../assets/MensFashion.jpg"
import  womensFashion from "../assets/womensFashion.jpg"
import  ethnicFashion from "../assets/ethnicFashion.jpg"
import  jeans from "../assets/jeans.png"
import  tshirt from "../assets/tshirt.jpg"
import  shirts from "../assets/shirts.jpg"
import  touser_pants from "../assets/touser_pants.jpg"
import  shorts from "../assets/shorts.jpg"
import  brands from "../assets/brands.jpg"
import  newArrivals from "../assets/newArrivals.jpg"


function HomePage(){

    return(
        <HomeLayout>
            <div className="flex gap-5 m-5 justify-center itmes-center p-2 ">
                    <div>
                        <img src={mensFashion}
                        className="w-24 h-20 rounded-full"
                         alt="mensfashion" />
                        <p>Mens Fashion</p>
                    </div>
                    <div>
                        <img src={womensFashion}
                        className="w-24 h-20 rounded-full"
                         alt="womensfashion" />
                        <p>Womens Fashion</p>
                    </div>
                    <div>
                        <img src={ethnicFashion}
                        className="w-24 h-20 rounded-full "
                         alt="ethnicFashion" />
                        <p>ethnic Fashion</p>
                    </div>
                    <div>
                        <img src={tshirt}
                        className="w-24 h-20 rounded-full "
                         alt="t-shirt" />
                        <p>T-shirt</p>
                    </div>
                    <div>
                        <img src={jeans}
                        className="w-24 h-20 rounded-full"
                         alt="jeans" />
                        <p>Jeans</p>
                    </div>
                    <div>
                        <img src={shirts}
                        className="w-24 h-20 rounded-full "
                         alt="shirts" />
                        <p>Shirts</p>
                    </div>
                    <div>
                        <img src={touser_pants}
                        className="w-24 h-20 rounded-full"
                         alt="touser&pants" />
                        <p>Touser & Pants</p>
                    </div>
                    <div>
                        <img src={shorts}
                        className="w-24 h-20 rounded-full"
                         alt="shorts" />
                        <p>Shorts</p>
                    </div>
                    <div>
                        <img src={brands}
                        className="w-24 h-20 rounded-full"
                         alt="Brands" />
                        <p>Brands</p>
                    </div>
                    <div>
                        <img src={newArrivals}
                        className="w-24 h-20 rounded-full"
                         alt="new Arrivals" />
                        <p>New Arrivals</p>
                    </div>
                    
            </div>
        </HomeLayout>
    )
}

export default HomePage;