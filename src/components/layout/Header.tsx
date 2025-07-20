"use client"

import Link from "next/link";
import {Moon, Sun} from "lucide-react";
import {useState} from "react";

const Header = () => {
    const [theme, setTheme] = useState("light");
    return <header className="flex items-center justify-between px-[10rem] py-[1rem]">
        <span className="text-xl font-medium">Todo Tasks</span>
        <div className="flex items-center justify-between gap-[1.5rem]">
            <Link href={"/login"}>Log in</Link>
            <Link href={"/signup"} className="bg-neutral-950 py-1 px-4 rounded-lg text-white">Sign up</Link>
            { theme === "light" ?
                <button onClick={() => setTheme("dark")} className="cursor-pointer hover:bg-neutral-950 p-1 rounded-full hover:text-white"><Sun /></button>
                :
                <button onClick={() => setTheme("light")} className="cursor-pointer hover:bg-neutral-950 p-1 rounded-full hover:text-white"><Moon /></button>
            }
        </div>
    </header>
}

export default Header;