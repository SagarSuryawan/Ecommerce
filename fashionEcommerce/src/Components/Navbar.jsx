import NavbarLogo from '../assets/images/ZAYRA.png';
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";


function Navbar(){
    return(
    <div className=' bg-[#106EBE] text-[#0FFCBE] w-[100%] '>
 <div className="bg-red-500 text-white p-4">Test Tailwind</div>
            {/* topBar */}
        <div className='hidden md:block h-10'>
                <h6 className='animate-bounce'>
                Made in India | COD Availables | Great Offers | 100 % Original | Easy Return
                </h6>
        </div>
       

            {/* Navbar */}
        <div className="logo w-screen h-24 flex justify-between items-center px-4 border border-red-700 border-2">
            <img src={NavbarLogo} alt="navbarLogo" className='rounded'/>

        <div className='searchBar flex justify '>
                <input 
                type="text" 
                placeholder='Enter your choice'
                className='bg-white rounded-full text-black p-1 text-center w-[auto] md:w-60'/>
        </div>

        <div className='forUser flex w-24 p-2 justift-center items-center gap-2'>
            <FaUser className='w-5 h-5 cursor-pointer' />
            <FaHeart className='w-5 h-5 cursor-pointer' />
            <div className='relative'>
            <FaShoppingCart className='w-5 h-5 cursor-pointer' />
            <span className='absolute -top-2 -right-1 bg-[#0FFCBE] text-black w-auto h-4 flex items-center rounded-full cursor-pointer px-0.5 py-0.5'>2</span>
            </div>
            
        </div>
        </div>
</div>
    )
}

export default Navbar;