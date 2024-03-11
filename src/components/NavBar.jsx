import { useState } from "react";
import {FaBars,FaTimes} from "react-icons/fa"
function NavBar() {
    const[nav,setNav] = useState(false)
    const links =[
        {id:1, link:'home'},
        {id:2, link:'about'},
        {id:3,  link:'portfolio'},
        {id:4, link:'experience'},
        {id:5, link:'contact'},

    
    ];
    return (
        <div className="w-full h-20 bg-black text-white flex fixed items-center justify-between px-4    ">
            <div><h1 className="text-5xl font-signature ml-2">Divyansh</h1></div>   
            <ul className="hidden md:flex">
                {links.map((link)=>  <li key={link.id}className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105">{link.link}</li>)}
              
                
                </ul>  
                <div onClick={()=>setNav(!nav)}className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                    {nav?<FaTimes size={30}/>:<FaBars size={30}/>}

                    </div> 
                    {
                        nav && <ul className="flex flex-col h-screen absolute top-0 left-0 w-full justify-center items-center bg-gradient-to-r from-black to-gray-800 text-gray-500">
                         {links.map((link)=>  <li key={link.id}className="px-4 py-6 capitalize text-4xl">{link.link}</li>)}
                        
                        
                    </ul>
                    }
                    
        </div>
    )
}

export default NavBar
