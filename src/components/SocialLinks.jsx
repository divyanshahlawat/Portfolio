import {FaLinkedin,FaGithub} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs"
function SocialLinks() {
    const links =[
        {id:1,
        child:(
                 <>
                        LinkedIn <FaLinkedin size={30}/>
                        </>
        ),
        href:"https://linkedin.com",
        style:"rounded-tr-md"
        },
         {id:2,
        child:(
                 <>
                        GitHub <FaGithub size={30}/>
                        </>
        ),
        href:"https://github.com/divyanshahlawat",
        
        },
         {id:3,
        child:(
                 <>
                        Mail <HiOutlineMail size={30}/>
                        </>
        ),
        href:"mailto:foo@gmail.com",
        
        },
         {id:4,
        child:(
                 <>
                        Resume <BsFillPersonLinesFill size={30}/>
                        </>
        ),
        href:"https://linkedin.com",
        style:"rounded-br-md",
        download:true

        }
        
    ]
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed x">
            <ul>
                {links.map(({id,child,href,style,download})=>( <li key={id} className={"flex justify-between items-center w-40 px-4 h-14 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300" + " " + style}>
                    <a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank"rel="noreferrer" >
                       {child}
                    </a>
                </li>))}
               
            </ul>
        </div>
    )
}

export default SocialLinks
