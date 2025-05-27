import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import footerLogo from '../assets/ZAYRA.png';


function Footer() {

    return(
       
       <div className=" w-auto h-80 bg-[#106EBE] pt-10">
        <div className="w-[80%] bg-[#0FFCBE] border border-[#0FFCBE] border-1  m-auto rounded-full mb-5 "></div>

        {/* FOOTER */}
        <div className="container m-auto w-[80%] h-[90%] px-4 flex items-center gap-4 border border-black border-2">

            {/* FOOTER LOGO */}
            <div className="footetLogo w-auto">
                <img src={footerLogo} 
                className=" w-50 h-30 hidden sm:block"
                alt="footer_logo" />
                <div className='logos flex flex-col sm:flex-row h-8 w-28 mt-2 justify-center items-center justify-evenly gap-4'>
                    <FaInstagram className="w-5 h-5 cursor-pointer" />
                    <FaFacebook  className="w-5 h-5 cursor-pointer"/>
                    <FaMailBulk  className="w-5 h-5 cursor-pointer"/>
                </div>
            </div>

            {/* Footer menu */}
            <div className='footerMenu absolute left-1/2 flex justify-evenly  px-4 w-auto h-auto gap-5 sm:m-auto border border-700-blue border-2'>

                <div className="text-left p-2">
                    <h1 className='mb-8 cursor-pointer text-[#0FFCBE]'>Discovery</h1>

                    <div className='space-y-5 text-white text-left'>
                        <p className='cursor-pointer'>New Season</p>
                        <p className='cursor-pointer'>Most Searched</p>
                        <p className='cursor-pointer'>Most Selled</p>
                    </div>
                    
                </div>

                <div className="text-left p-3">
                    <h1 className='mb-8 cursor-pointer text-[#0FFCBE]'>About</h1>

                    <div className='space-y-5 text-white text-left'>
                        <p className='cursor-pointer'>Help</p>
                        <p className='cursor-pointer'>Most Searched</p>
                        <p className='cursor-pointer'>Affiliate</p>
                    </div>
                    
                </div>

                <div className="text-left p-3">
                    <h1 className='mb-8 cursor-pointer text-[#0FFCBE]'>Info</h1>

                    <div className='space-y-5 text-white text-left'>
                        <p className='cursor-pointer'>Contact Us</p>
                        <p className='cursor-pointer'>Privacy Policies</p>
                        <p className='cursor-pointer'>Terms & Condition</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
       </div>
    )
}

export default Footer;