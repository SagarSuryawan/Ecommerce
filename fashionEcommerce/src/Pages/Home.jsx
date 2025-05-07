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
import  banner from "../assets/banner.jpg"


function HomePage(){

    return(
        <HomeLayout>
            <div className=" productCategory relative flex gap-5 m-5 justify-center itmes-center p-2 text-center hover:cursor-pointer">

                    <div className=" p-2 group transition-transform duration-300 hover:scale-105 z-50">
                        <img src={mensFashion}
                        className="w-24 h-20 transition-all duration-300 ease-in-out rounded-full group-hover:scale-110 my-2"
                         alt="mensfashion" />
                        <p className="text-sm tracking-wide font-light tracking-wide font-light transition-transform duration-300 group-hover:scale-105 group-hover:underline">Mens Fashion</p>

                          {/* Dropdown */}
                        <div className="absolute border border-red-800 border-2 w-120 left-1/2 -translate-x-1/2 top-full mt-2 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                            <ul className="text-sm text-gray-700">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Shirts</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Pants</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Shoes</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-2 group transition-transform duration-300 hover:scale-105">
                        <img src={womensFashion}
                        className="w-24 h-20 transition-all duration-300 ease-in-out rounded-full group-hover:scale-110 my-2"
                         alt="womensfashion" />
                        <p className="text-sm tracking-wide font-light tracking-wide font-light transition-transform duration-300 group-hover:scale-105 group-hover:underline">Womens Fashion</p>
                    </div>

                    <div className="p-2 group transition-transform duration-300 hover:scale-105">
                        <img src={ethnicFashion}
                        className="w-24 h-20 transition-all duration-300 ease-in-out rounded-full group-hover:scale-110 my-2 "
                         alt="ethnicFashion" />
                        <p className="text-sm tracking-wide font-light tracking-wide font-light transition-transform duration-300 group-hover:scale-105 group-hover:underline">ethnic Fashion</p>
                    </div>

                    <div className="p-2 group transition-transform duration-300 hover:scale-105">
                        <img src={tshirt}
                        className="w-24 h-20 transition-all duration-300 ease-in-out rounded-full group-hover:scale-110 my-2 "
                         alt="t-shirt" />
                        <p className="text-sm tracking-wide font-light tracking-wide font-light transition-transform duration-300 group-hover:scale-105 group-hover:underline">T-shirt</p>
                    </div>

                    <div className="p-2 group transition-transform duration-300 hover:scale-105">
                        <img src={jeans}
                        className="w-24 h-20 transition-all duration-300 ease-in-out rounded-full group-hover:scale-110 my-2"
                         alt="jeans" />
                        <p className="text-sm tracking-wide font-light tracking-wide font-light transition-transform duration-300 group-hover:scale-105 group-hover:underline">Jeans</p>
                    </div>

                    <div className="p-2 group transition-transform duration-300 hover:scale-105">
                        <img src={shirts}
                        className="w-24 h-20 transition-all duration-300 ease-in-out rounded-full group-hover:scale-110 my-2"
                         alt="shirts" />
                        <p className="text-sm tracking-wide font-light tracking-wide font-light transition-transform duration-300 group-hover:scale-105 group-hover:underline">Shirts</p>
                    </div>

                    <div className="p-2 group transition-transform duration-300 hover:scale-105">
                        <img src={touser_pants}
                        className="w-24 h-20 transition-all duration-300 ease-in-out rounded-full group-hover:scale-110 my-2"
                         alt="touser&pants" />
                        <p className="text-sm tracking-wide font-light tracking-wide font-light transition-transform duration-300 group-hover:scale-105 group-hover:underline">Touser & Pants</p>
                    </div>

                    <div className="p-2 group transition-transform duration-300 hover:scale-105">
                        <img src={shorts}
                        className="w-24 h-20 transition-all duration-300 ease-in-out rounded-full group-hover:scale-110 my-2"
                         alt="shorts" />
                        <p className="text-sm tracking-wide font-light tracking-wide font-light transition-transform duration-300 group-hover:scale-105 group-hover:underline">Shorts</p>
                    </div>

                    <div className="p-2 group transition-transform duration-300 hover:scale-105">
                        <img src={brands}
                        className="w-24 h-20 transition-all duration-300 ease-in-out rounded-full group-hover:scale-110 my-2"
                         alt="Brands" />
                        <p className="text-sm tracking-wide font-light tracking-wide font-light transition-transform duration-300 group-hover:scale-105 group-hover:underline">Brands</p>
                    </div>

                    <div className="p-2 group transition-transform duration-300 hover:scale-105">
                        <img src={newArrivals}
                        className="w-24 h-20 transition-all duration-300 ease-in-out rounded-full group-hover:scale-110 my-2"
                         alt="new Arrivals" />
                        <p className="text-sm tracking-wide font-light tracking-wide font-light transition-transform duration-300 group-hover:scale-105 group-hover:underline">New Arrivals</p>

                        <div className="absolute border border-red-800 border-2 w-48 left-3/40 -translate-x-1/2 top-full mt-2 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                            <ul className="text-sm text-gray-700">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Shirts</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Pants</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Shoes</li>
                            </ul>
                        </div>
                    </div>     
                    
            </div>
            {/* banner */}
            <div className="banner">
                <div className="relative m-auto border border-red-800 border-2">
                    <img src={banner}
                     alt="banner"
                     className="w-[80%] m-auto" />

                     <div className="absolute top-1/4 left-1/5 border border-red-800 border-2 p-3">
                     <h1 className="text-8xl text-black">GET EXTRA <br/> 10% OFF </h1>
                     <span>ON SHOPPING FOR </span>
                     </div>
                    
            
                </div>
                
            </div>

        </HomeLayout>
    )
}

export default HomePage;