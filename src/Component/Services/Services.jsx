import './Services.css'
import { IoMdArrowForward } from 'react-icons/io'
function Services() {
    return (
        <>
            <div className="services container m-auto text-center ">
                <h1 className='text-4xl font-medium my-10'>Crafting Moments, Serving You</h1>
                <p className='text-xl mb-30'>From unforgettable flavors to seamless service, we’re here to make every meal feel special. Whether you dine in, take out, or order online we’ve got your cravings covered.</p>
                <div className="services-cards flex flex-wrap justify-center w-[80%] m-auto  gap-6 mb-10">
                    <div className="card flex text-left justify-between  gap-4 flex-col w-4/12">
                        <img src="/assets/images/free-blog-1.png" alt="" />
                        <div className='mx-8 my-2'>
                            <div className="flex flex-col gap-4">
                            <h2 className='text-2xl'>Buffet Service</h2>
                            <p>Navigate effortlessly with our intuitive design, optimized for all devices. Enjoy a seamless experience whether you're on a computer or mobile device.</p>
                        </div>
                            </div>
                            <button className='h-10 rounded-lg flex text-center justify-center align-middle mb-3 px-3 mx-8 py-1'>Read More<IoMdArrowForward className='arr' /></button>
                    </div>
                    <div className="card flex text-left  gap-4 flex-col w-4/12">
                        <img src="/assets/images/free-blog-2.png" alt="" />
                        <div className='mx-8 my-2'>
                            <div className="flex flex-col gap-4">
                            <h2 className='text-2xl'>Food delivery</h2>
                            <p>Enjoy a safe shopping experience with multiple payment options and SSL encryption. Your personal and financial information is always protected.</p>
                        </div>
                            </div>
                            <button className='h-10 rounded-lg flex text-center justify-center align-middle mb-3 px-3 mx-8 py-1'>Read More<IoMdArrowForward className='arr' /></button>
                    </div>
                    <div className="card flex text-left  gap-4 flex-col w-4/12">
                        <img src="/assets/images/free-blog-3.png" alt="" />
                        <div className='mx-8 my-2'>
                            <div className="flex flex-col gap-4">
                            <h2 className='text-2xl'>Cafeteria</h2>
                            <p>Find products quickly with advanced filters, sorting options, and suggestion. Save time and effortlessly locate exactly what you need with ease.</p>
                        </div>
                            </div>
                            <button className='h-10 rounded-lg flex text-center justify-center align-middle mb-3 px-3 mx-8 py-1'>Read More<IoMdArrowForward className='arr' /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services