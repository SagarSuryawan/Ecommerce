import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function CartDrawer() {

    const [drawerOpen, setdrawerOpen] = useState(false)

    const toogleCartDrawer = () => {
        setdrawerOpen(!drawerOpen);
    }
    return(
        <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:1/4 h-full bg-white shadow-lg transform trasition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0 ":"translet-x-full"}`}>
            {/* close button */}
            <div className="flex justify-end p-4">
                <button onClick={toogleCartDrawer}>
                    <IoMdClose className = "h-6 w-6 text-grey-600"/>
                </button>
            </div>
        </div>
    )
}

export default CartDrawer;