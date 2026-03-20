import './DownBar.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';

function DownBar() {
    return (
        <>
            <div className="downBar max-w-[1250px] flex justify-between my-4 sm:mx-5 m-auto ">
                <div className="left flex justify-center align-middle text-center gap-1 ">
                    <img src="/assets/images/favicon/favicon.ico" alt="" className='w-8 h-8' />
                    <h1 className='pt-0.5 font-bold'>Restaurant</h1>
                </div>
                <ul className='flex gap-10'>
                    <ScrollLink className='abcd font-bold text-[18px]' style={{ cursor: 'pointer' }} to="about" smooth={true}
                        duration={500}
                        spy={true}
                        offset={-70}>About Us</ScrollLink>
                    <ScrollLink className='abcd font-bold text-[18px]' style={{ cursor: 'pointer' }} to="services" smooth={true}
                        duration={500}
                        spy={true}
                        offset={-70}>Services</ScrollLink>
                    <ScrollLink className='abcd font-bold text-[18px]' style={{ cursor: 'pointer' }} to="team" smooth={true}
                        duration={500}
                        spy={true}
                        offset={-70}>Team</ScrollLink>
                    <ScrollLink className='abcd font-bold text-[18px]' style={{ cursor: 'pointer' }} to="question" smooth={true}
                        duration={500}
                        spy={true}
                        offset={-70}>FAQS</ScrollLink>
                </ul>
                <div className='flex gap-5'>
                    <a target='_blank' href="https://www.facebook.com/share/15y8VErk1w/">
                    <FaFacebook className='downIcon' />
                    </a>
                    <a target='_blank' href="https://www.instagram.com/alialhamawy?igsh=MTVjZTEzd29wNWtjeQ==">
                    <FaInstagram className='downIcon' />
                    </a>
                    <a target='_blank' href="https://github.com/AliALHamawy">
                    <FaGithub className='downIcon' />
                    </a>
                </div>
            </div>
        </>
    )
}

export default DownBar