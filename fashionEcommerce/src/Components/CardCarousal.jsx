  import collabBrand from "@/constant/collabbrand.js";
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";

  console.log(collabBrand)
  function CardCarousal() {

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2
  };

    return (
        <div className = "w-[90%] m-auto">
            <div>
                <Slider {...settings}>
                {
                    collabBrand.map((d)=>(
                        <div key= {d.id} className=" flex justify-center items-center justify-evenly">
                        <img src={d.img} alt="" className="w-[] h-[450px] rounded-md"/>
                        </div>
                    ))
                }
                </Slider>
            </div>
        </div>
    )
  }

  export default CardCarousal;