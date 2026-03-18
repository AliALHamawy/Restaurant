import './ApoutUs.css'
import { IoMdArrowForward } from "react-icons/io";
import { BsPersonFillCheck } from "react-icons/bs";
import { MdRestaurantMenu } from "react-icons/md";
import { MdCelebration } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { useEffect, useRef, useState } from 'react';
function ApoutUs() {
    const [isVisible, setIsVisible] = useState(false)
    const aboutInfoRef = useRef(null)
    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            {
                threshold: 0.3,
                rootMargin: '0px',
            }
        );
        if(aboutInfoRef.current) {
            observer.observe(aboutInfoRef.current)
        }
        return()=>{
            if(aboutInfoRef.current) {
                observer.unobserve(aboutInfoRef.current)
            }
        }
    },[])
    return (
        <>
            <div className='about  flex flex-col justify-center align-middle py-20 m-auto gap-10 '>
                <h1 className='font-medium text-6xl m-auto'>Apout Us</h1>
                <p className='m-auto text-center text-xl lg:w-9/12 '>Our achievement story stands as a powerful testament to teamwork and perseverance. United,
                    we have faced challenges, celebrated victories, and woven a narrative of growth and success.
                </p>
                <button className='h-10 rounded-lg flex text-center justify-center align-middle m-auto px-3 py-1'>Read More<IoMdArrowForward className='arr' /></button>
                <div className="flex lg:w-[70%] w-[90%] m-auto flex-col" ref={aboutInfoRef}>
                    <img src="/assets/images/restaurant-about-us.png" alt="" />
                    <div className="largee">
                        <div className='aboutInfo flex flex-row w-[65%] h-50 justify-between p-10 m-auto 'style={{opacity:isVisible?1:0 , transition: 'opacity .5s ease-in-out'}}>
                            <div className="infoGroup flex flex-col justify-center align-middle text-center gap-2">
                                <span className='flex justify-center '><BsPersonFillCheck className='text-4xl' /></span>
                                <h2 className='text-3xl font-bold'>7+</h2>
                                <p className=''>Years of Experience</p>
                            </div>
                            <div className="infoGroup flex flex-col justify-center align-middle text-center gap-2">
                                <span className='flex justify-center '><MdRestaurantMenu className='text-4xl' /></span>
                                <h2 className='text-3xl font-bold'>30+</h2>
                                <p className=''>Dishes in Our Menu</p>
                            </div>
                            <div className="infoGroup flex flex-col justify-center align-middle text-center gap-2">
                                <span className='flex justify-center '><MdReviews className='text-4xl' /></span>
                                <h2 className='text-3xl font-bold'>500+</h2>
                                <p className=''>Customer Reviews</p>
                            </div>
                            <div className="infoGroup flex flex-col justify-center align-middle text-center gap-2">
                                <span className='flex justify-center '><MdCelebration className='text-4xl' /></span>
                                <h2 className='text-3xl font-bold'>10K+</h2>
                                <p className=''>Happy Customers</p>
                            </div>
                        </div>
                    </div>
                    <div className="smalee">
                        <div className='aboutInfo flex sm:flex-row p-10 m-auto '
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transition: 'opacity .5s ease-in-out'
                            }}>
                            <div className='flex gap-2 m-auto'>
                                <div className="infoGroup flex flex-col justify-center align-middle text-center gap-2">
                                    <span className='flex justify-center '><BsPersonFillCheck className='text-4xl' /></span>
                                    <h2 className='text-3xl font-bold'>7+</h2>
                                    <p className=''>Years of Experience</p>
                                </div>
                                <div className="infoGroup flex flex-col justify-center align-middle text-center gap-2">
                                    <span className='flex justify-center '><MdRestaurantMenu className='text-4xl' /></span>
                                    <h2 className='text-3xl font-bold'>30+</h2>
                                    <p className=''>Dishes in Our Menu</p>
                                </div>
                            </div>
                            <div className='flex gap-2 m-auto'>
                                <div className="infoGroup flex flex-col justify-center align-middle text-center gap-2">
                                    <span className='flex justify-center '><MdReviews className='text-4xl' /></span>
                                    <h2 className='text-3xl font-bold'>500+</h2>
                                    <p className=''>Customer Reviews</p>
                                </div>
                                <div className="infoGroup flex flex-col justify-center align-middle text-center gap-2">
                                    <span className='flex justify-center '><MdCelebration className='text-4xl' /></span>
                                    <h2 className='text-3xl font-bold'>10K+</h2>
                                    <p className=''>Happy Customers</p>
                                </div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApoutUs