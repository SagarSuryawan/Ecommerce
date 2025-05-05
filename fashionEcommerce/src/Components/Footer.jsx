import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import footerLogo from '../assets/ZAYRA.png';


function Footer() {

    return(
       
       <div className=" w-auto h-80 bg-[#106EBE] pt-10">
        <div className="w-[80%] bg-[#0FFCBE] border border-[#0FFCBE] border-1  m-auto rounded-full mb-5 "></div>

        {/* FOOTER */}
        <div className="container relative  m-auto w-[80%]  h-[75%] px-4  flex items-center">

            {/* FOOTER LOGO */}
            <div className="footetLogo w-auto">
                <img src={footerLogo} 
                className=" w-50 h-30"
                alt="footer_logo" />
                <div className='logos flex h-8 w-28 mt-2 justify-center items-center justify-evenly gap-4'>
                    <FaInstagram className="w-5 h-5 cursor-pointer" />
                    <FaFacebook  className="w-5 h-5 cursor-pointer"/>
                    <FaMailBulk  className="w-5 h-5 cursor-pointer"/>
                </div>
            </div>

            {/* Footer menu */}
            <div className='footerMenu absolute left-1/2 flex justify-evenly py-4 px-4 w-[50%] h-[80%]'>

                <div>
                    <h1 className='mb-8 cursor-pointer text-[#0FFCBE]'>Discovery</h1>

                    <div className='space-y-3 text-white'>
                        <p className='cursor-pointer'>New Season</p>
                        <p className='cursor-pointer'>Most Searched</p>
                        <p className='cursor-pointer'>Most Selled</p>
                    </div>
                    
                </div>

                <div>
                    <h1 className='mb-8 cursor-pointer text-[#0FFCBE]'>About</h1>

                    <div className='space-y-3 text-white'>
                        <p className='cursor-pointer'>Help</p>
                        <p className='cursor-pointer'>Most Searched</p>
                        <p className='cursor-pointer'>Affiliate</p>
                    </div>
                    
                </div>

                <div>
                    <h1 className='mb-8 cursor-pointer text-[#0FFCBE]'>Info</h1>

                    <div className='space-y-3 text-white '>
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