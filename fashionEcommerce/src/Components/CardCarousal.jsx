  import collabBrand from "@/constant/collabbrand.js";

  console.log(collabBrand)
  function CardCarousal() {

    return (
        <div className = "w-[90%] m-auto border border-red-700 border-2">
            <div className="">
                {
                    collabBrand.map((d)=>(
                        <div key= {d.id} className="border border-green-700 border-2">
                        <img src={d.img} alt="" className="w-[] h-[450px]"/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
  }

  export default CardCarousal;