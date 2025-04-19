import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState("")
    const [isOpen, setIsOpen] = useState(false)   

    const handelSearchToggle = () => {
        setIsOpen(!isOpen)
    }

    const handelSearch = (e) => {
        e.preventDefault();
        console.log( searchTerm)
         setIsOpen(false);
    }
    
    return(
        <div className={`flex justify-center items-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto" }`}>
        {isOpen ?  (
            <form onSubmit={handelSearch} className="relative flex items-center justify-center w-full">

             <div className="relative w-1/2 border ">
                <input
                type="text" 
                placeholder="Search"
                value={searchTerm} 
                onChange={(e)=> setSearchTerm(e.target.value) }
                className="bg-grey-100 px-4 py-2 pr-12 rounded-lg focus-outline-none w-full placeholder:text-grey-700 "/>

                 <button  type="submit" className="absolute right-2 top-1 transform-translate-y-1/2 text-grey-600 hover:text-grey-800 ">
                    <HiMagnifyingGlass className="h-6 w-6"/>
                 </button>
             </div>
             <button 
             type="button"
             onClick={handelSearchToggle}
             className="absolute right-4 top-1/2 transform -translate-y-1/2 text-grey-600 hover:text-hover-800">
                    <HiMiniXMark className="h-6 w-6"/>
                 </button>
        </form>) : (

            <button onClick={handelSearchToggle}>
                 <HiMagnifyingGlass className="h-6 w-6"/>
            </button>
        
        )}
        </div>
    )
}

export default SearchBar;