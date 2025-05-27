import CardCarousal from "@/Components/CardCarousal";
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
// carousel
import Carousel from "@/Components/Carousel";
import Highlander from "../assets/carousalImages/Highlander.webp"
import Hoop from "../assets/carousalImages/Hoop.webp"
import ketch from "../assets/carousalImages/ketch.webp"
import tokiyotalkies from "../assets/carousalImages/TokyoTalkies.webp"
import vishudh from "../assets/carousalImages/Vishudh.webp"

const images = [
    { src: Highlander, alt: "Highlander" },
    { src: Hoop, alt: "Hoop" },
    { src: ketch, alt: "Ketch" },
    { src: tokiyotalkies, alt: "Tokyo Talkies" },
    { src: vishudh, alt: "Vishudh" },
  ]

function HomePage(){
 return(

        <HomeLayout>
                <div className="productCategory relative grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-5 m-5 justify-center items-center p-2 text-center hover:cursor-pointer">

                        <div className=" flex flex-col justify-center items-center gap-3 p-2 group transition-transform duration-300 hover:scale-105 z-50 w-auto">
                            <img src={mensFashion}
                            className="w-24 h-20 transition-all duration-300 ease-in-out rounded-full group-hover:scale-110"
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

                        <div className=" flex flex-col justify-center items-center gap-3 p-2 group transition-transform duration-300 hover:scale-105 z-50 w-autop-2 group transition-transform duration-300 hover:scale-105">
                            <img src={womensFashion}
                            className="w-24 h-20 transition-all duration-300 ease-in-out rounded-full group-hover:scale-110 "
                            alt="womensfashion" />
                            <p className="text-sm tracking-wide font-light tracking-wide font-light transition-transform duration-300 group-hover:scale-105 group-hover:underline">Womens Fashion</p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-3 p-2 group transition-transform duration-300 hover:scale-105 z-50 w-auto p-2 group transition-transform duration-300 hover:scale-105">
                            <img src={ethnicFashion}
                            className="w-24 h-20 transition-all duration-300 ease-in-out rounded-full group-hover:scale-110"
                            alt="ethnicFashion" />
                            <p className="text-sm tracking-wide font-light tracking-wide font-light transition-transform duration-300 group-hover:scale-105 group-hover:underline">ethnic Fashion</p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-3 p-2 group transition-transform duration-300 hover:scale-105 z-50 w-auto p-2 group transition-transform duration-300 hover:scale-105">
                            <img src={tshirt}
                            className="w-24 h-20 transition-all duration-300 ease-in-out rounded-full group-hover:scale-110"
                            alt="t-shirt" />
                            <p className="text-sm tracking-wide font-light tracking-wide font-light transition-transform duration-300 group-hover:scale-105 group-hover:underline">T-shirt</p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-3 p-2 group transition-transform duration-300 hover:scale-105 z-50 w-auto p-2 group transition-transform duration-300 hover:scale-105">
                            <img src={jeans}
                            className="w-24 h-20 transition-all duration-300 ease-in-out rounded-full group-hover:scale-110 "
                            alt="jeans" />
                            <p className="text-sm tracking-wide font-light tracking-wide font-light transition-transform duration-300 group-hover:scale-105 group-hover:underline">Jeans</p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-3 p-2 group transition-transform duration-300 hover:scale-105 z-50 w-auto p-2 group transition-transform duration-300 hover:scale-105">
                            <img src={shirts}
                            className="w-24 h-20 transition-all duration-300 ease-in-out rounded-full group-hover:scale-110"
                            alt="shirts" />
                            <p className="text-sm tracking-wide font-light tracking-wide font-light transition-transform duration-300 group-hover:scale-105 group-hover:underline">Shirts</p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-3 p-2 group transition-transform duration-300 hover:scale-105 z-50 w-auto p-2 group transition-transform duration-300 hover:scale-105">
                            <img src={touser_pants}
                            className="w-24 h-20 transition-all duration-300 ease-in-out rounded-full group-hover:scale-110"
                            alt="touser&pants" />
                            <p className="text-sm tracking-wide font-light tracking-wide font-light transition-transform duration-300 group-hover:scale-105 group-hover:underline">Touser & Pants</p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-3 p-2 group transition-transform duration-300 hover:scale-105 z-50 w-auto p-2 group transition-transform duration-300 hover:scale-105">
                            <img src={shorts}
                            className="w-24 h-20 transition-all duration-300 ease-in-out rounded-full group-hover:scale-110"
                            alt="shorts" />
                            <p className="text-sm tracking-wide font-light tracking-wide font-light transition-transform duration-300 group-hover:scale-105 group-hover:underline">Shorts</p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-3 p-2 group transition-transform duration-300 hover:scale-105 z-50 w-auto p-2 group transition-transform duration-300 hover:scale-105">
                            <img src={brands}
                            className="w-24 h-20 transition-all duration-300 ease-in-out rounded-full group-hover:scale-110"
                            alt="Brands" />
                            <p className="text-sm tracking-wide font-light tracking-wide font-light transition-transform duration-300 group-hover:scale-105 group-hover:underline">Brands</p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-3 p-2 group transition-transform duration-300 hover:scale-105 z-50 w-auto p-2 group transition-transform duration-300 hover:scale-105 z-50">
                            <img src={newArrivals}
                            className="w-24 h-20 transition-all duration-300 ease-in-out rounded-full group-hover:scale-110"
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

                        <div className="absolute top-1/13 left-1/6 bg-[#FFB5C0] lg:w-120 lg:h-100 font-semibold shadow-xl/20 p-4 rounded-lg md:w-80 md:h-60 sm:w-40 sm:h-20 ">
                        <h1 className="lg:text-8xl text-[#330F14] text-shadow-lg/40 md:text-4xl sm:text-2xl">GET EXTRA <br/> 10% OFF </h1>
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
                <div>
                    <h1 className="text-center mt-10 text-lg hover:text-black hover:text-xl hover:underline transition-all duration-800 tracking-widest  ">SHOP BY BRANDS</h1>
                    <Carousel images={images} />
                </div>

{/* TOP COLLAB */}
                <div>
                    <h1 className="text-center mt-10 text-lg hover:text-black hover:text-xl hover:underline transition-all duration-800 tracking-widest  ">TOP COLLAB</h1> 
                    <CardCarousal/>
                </div>
{/* for him and her */}
                <div className="productByGender relative mt-10 w-[90%] m-auto cursor-pointer">
                    <img src="https://pictures.kartmax.in/live/original/0x0/sites/aPfvUDpPwMn1ZadNKhP7/theme/0092may(1)-e75baea8-13b0-4aa2-beae-abb89c8f7931.jpg" alt="" className="rounded-md" />
                    <div className="flex absolute top-[80%] left-[45%]  w-[15%] justify-between rounded-md">
                        <button className="text-black bg-[#A3A3A3] h-10 px-3 rounded-md cursor-pointer">HIM</button>
                        <button className="text-black bg-[#A3A3A3] h-10 px-3 rounded-md cursor-pointer">HER</button>
                    </div>
                </div>

              
        </HomeLayout>
  )
}

export default HomePage;