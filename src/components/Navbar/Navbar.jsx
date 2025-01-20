
import { useState } from "react";
import Link from "../Link/Link";
import { LuMenu, LuCircleX   } from "react-icons/lu";

const Navbar = () => {

    const [open, setOpen] =useState(false);
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/dashboard", name: "Dashboard" }
    ];

    return (
        <nav className="text-black bg-yellow-200 p-6">
            <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                {/* setOpen(!open) dile akbar click korle open abr click korle close hobe */}
                {
                    open ===true? <LuCircleX className=""></LuCircleX>: <LuMenu className=" "></LuMenu>
                }
            
            </div>
            <ul className={`md:flex duration-1000 absolute md:static
                ${open? 'top-16': '-top-60'}
                bg-yellow-200 px-6 rounded-lg`}>
            {
                routes.map((route) => <Link key={route.id} route={route}></Link> )
            }
            </ul>
        </nav>
    );
};

export default Navbar;