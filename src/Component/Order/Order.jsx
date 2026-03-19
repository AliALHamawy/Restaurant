import './Order.css'
import { IoMdArrowForward } from "react-icons/io";

function Order() {
    return (
        <>
            <div className="order">
                    <div className="container w-[94%] lg:w-[77%] flex justify-between align-middle m-auto my-20 ">
                        <div className="left text-left justify-start w-[50%] align-middle my-auto ml-7 gap-3 lg:gap-7 flex flex-col ">
                            <h1 className="text-5xl font-bold">Order Now & Satisfy Your Cravings</h1>
                            <p className="font-normal text-xl">Let us bring the flavors you love straight to your door. From classic comfort dishes to chef-curated specials,
                                every bite is made with care and delivered fresh. Skip the wait — your next favorite meal is just a click away.
                            </p>
                            <button className='h-10 rounded-lg flex text-center justify-center align-middle px-3 py-1'>Read More<IoMdArrowForward className='arr' /></button>
                        </div>
                        <div className="right">
                            <img src="/assets/images/pizza.png" alt="" />
                        </div>
                    </div>
                    <div className="border w-[60%] m-auto mb-20"></div>
            </div>
        </>
    )
}

export default Order