import { useState } from 'react';
import './Header.css'
import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
    const [isMenuOpen, setIsMenuOppen] = useState(false)

    const togglemenu = () => {
        setIsMenuOppen(!isMenuOpen)
    }
    return (
        <>
            <nav className=''>
                <div className="none flex container justify-between align-middle m-auto text-lg font-medium p-5 py-4 lg:p-20 lg:py-4 gap-1">
                    <div className="left flex justify-center align-middle text-center gap-1 ">
                        <img src="/assets/images/favicon/favicon.ico" alt="" className='w-8 h-9' />
                        <h1 className='pt-0.5'>Restaurant</h1>
                    </div>
                    <div className="hidden lg:flex mid">
                        <ul className='flex gap-5'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Team</li>
                            <li>FAQS</li>
                        </ul>
                    </div>
                    <div className="right flex gap-6 align-middle text-center justify-center">
                        <button className='flex justify-center text-center align-middle w-33 h-10 rounded-lg '>Book A Table</button>
                        {isMenuOpen ? (
                        <IoCloseSharp className='lg:hidden visible menu text-4xl align-middle mt-0.5 p-1 ' onClick={togglemenu} />
                        ) : (
                        <MdMenu className='lg:hidden visible menu text-4xl align-middle mt-0.5 p-1 ' onClick={togglemenu} />)}
                    </div>
                </div>
                <div className={`lg:hidden sm-ulDiv  transition-all duration-500 ease-in-out verflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className='flex gap-5 flex-col sm-ul p-4'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Team</li>
                        <li>FAQS</li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Header