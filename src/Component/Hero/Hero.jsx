import './Hero.css'
import { IoMdArrowForward } from "react-icons/io";

function Hero() {
    return (
        <>
            <div className='hero flex flex-col m-auto justify-center align-middle text-center mt-40'>
                
                <div className='w-10/12 m-auto'>
                <p className='fp m-auto'>Serving Food Lovers Since 2016 ❤️</p>
                <h1 className='lg:text-6xl text-4xl font-bold my-6 md:text-5xl'>Savor Every Bite. Savor<br />Every Moment.</h1>
                <p className='sp'>Welcome to a dining experience where flavor, freshness, and hospitality come together.
                    Whether it's your first visit or your hundredth, every plate is made to impress.
                    </p>
                <button className='w-33 h-10 rounded-lg flex text-center justify-center align-middle m-auto px-3 py-1'>Experience the Flavor<IoMdArrowForward className='arr'/></button>
                </div>
                <img src="/assets/images/dishes-hero.png" alt="" className='mt-40 mb-20'/>
            </div>
        </>
    )
}

export default Hero