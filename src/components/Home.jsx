import HeroImage from "../assets/HeroImage.png"
import { MdKeyboardArrowRight } from "react-icons/md";
function Home() {
    return (
    <div className="bg-gradient-to-b from-black via-black to-gray-800 w-full h-screen">
        
        <div className="text-white flex flex-col pt-12 max-w-full justify-center h-full md:flex-row md:items-center md:max-w-7xl md:mx-auto">
          <div className="md:p-6 ">
            <h2 className="text-4xl font-bold md:text-7xl">
                I am a Full Stack Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad animi necessitatibus, ratione odit quibusdam incidunt vitae eius id ullam neque eligendi, in expedita sint sunt. Ab amet laborum tenetur excepturi?
            </p>
               <div>
                <button className=" group rounded-md flex px-6 py-3 w-fit my-2  bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    Portfolio
                    <span className="my-auto group-hover:rotate-90 duration-300"><MdKeyboardArrowRight size={25}/></span>
                </button>
            </div>
            </div>  
         
        
        <div className="mt-5 md:mr-5" >
            <img src={HeroImage} className="max-w-sm mx-auto rounded-3xl "alt="" />
        </div>
        </div>
        
       
    </div>
    )
}

export default Home
