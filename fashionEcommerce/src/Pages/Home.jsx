
import { MdCurrencyRupee } from "react-icons/md";
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
// carousal




function HomePage(){
 return(
        <HomeLayout>
                <div className=" productCategory relative  flex gap-5 m-5 justify-center itmes-center p-2 text-center hover:cursor-pointer">

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

                        <div className="p-2 group transition-transform duration-300 hover:scale-105 z-50">
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
                    <div className="relative m-auto cursor-pointer">
                        <img src={banner}
                        alt="banner"
                        className="w-[90%] h-120 m-auto shadow-xl/30 rounded-lg" />

                        <div className="absolute top-1/13 left-1/6 bg-[#FFB5C0] w-120 h-100 font-semibold shadow-xl/20 p-4 rounded-lg">
                        <h1 className="text-8xl text-[#330F14] text-shadow-lg/40">GET EXTRA <br/> 10% OFF </h1>
                        <span className="text-[#66323A]">ON SHOPPING FOR </span>
                        <br/>
                        <div className=" relativeflex gap-1 items-center">
                            <MdCurrencyRupee className="text-[#66323A] absolute top- 1 left--2 text-2xl text-shadow-lg"/>
                            <span className="text-5xl ml-6 text-black font-semibold text-shadow-lg">2499</span>
                        </div>
                        </div>
                        
                
                    </div>
                    
                </div>

                {/* carousal for brands */}
                <div className="carousal border border-red-700 border-2 w-[90%] m-auto mt-10">
                    <div className="carousel w-full flex overflow-x-auto scroll-smooth snap-x snap-mandatory">
                        <div id="item1" className="carousel-item w-full flex-shrink-0 snap-start">
                            <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" className="w-full" />
                        </div>
                        <div id="item2" className="carousel-item w-full flex-shrink-0 snap-start">
                            <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp" className="w-full" />
                        </div>
                        <div id="item3" className="carousel-item w-full flex-shrink-0 snap-start">
                            <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp" className="w-full" />
                        </div>
                        <div id="item4" className="carousel-item w-full flex-shrink-0 snap-start">
                            <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp" className="w-full" />
                        </div>
                    </div>
                    <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                    </div>
                </div>

              
        </HomeLayout>
  )
}

export default HomePage;