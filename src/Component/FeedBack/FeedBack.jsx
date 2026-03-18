import { useRef } from 'react';
import './FeedBack.css'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { useState } from 'react';
import feedInfo from './feedInfo';

function FeedBack() {

    const scrollContainerRef = useRef(null)
    const [arr, setArr] = useState(feedInfo)

    // const scroll = (direction) => {
    //     if(scrollContainerRef.current) {
    //         const scrollAmount= 150;
    //         if(direction === 'left') {
    //             scrollContainerRef.current.scrollLeft -= scrollAmount;
    //         } else{
    //             scrollContainerRef.current.scrollLeft += scrollAmount;
    //         }
    //     }
    // }

    const scroll = (direction) => {
        if(scrollContainerRef.current) {
            const cardWidth= 368;
            const currentScroll = scrollContainerRef.current.scrollLeft;
            const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
            
            let newScrollPosition;

            if(direction === 'left'){
                newScrollPosition = Math.max(0, currentScroll - cardWidth)
            }else {

                newScrollPosition = Math.max(cardWidth, currentScroll + cardWidth)
            }
            scrollContainerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            })

        }

    }

    const handleKeyDown = (e) => {
        if(e.key === 'ArrowLeft') {
            scroll('left')
        }
        else if(e.key === 'ArrowRight') {
            scroll('right')
        }
    }

    return (
        <>
            <div className="feedBack">

                <div className=" container flex justify-between align-middle py-20 mt-20 w-[80%] m-auto">
                
                    <div className="right-top flex flex-col gap-4 mt-20 w-[30%]">
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-4xl font-medium'>Customers Feedback</h1>
                            <p className='text-xl'>From career changes to dream jobs, here's how FlyonUI helped.</p>
                        </div>
                        <div className=' btns flex gap-2 '>
                            <button className='arr w-8 h-8 flex  text-center' onClick={() => scroll('left')} aria-label="Previous feedback"><FaArrowLeft className='text-xl' /></button>
                            <button className='arr w-8 h-8 flex  text-center' onClick={() => scroll('right')} aria-label="Next feedback"><FaArrowRight className='text-xl' /></button>
                        </div>
                    </div>
                
                    <div className="left-bottom m-auto ">
                        <div className="feedCards flex gap-2 overflow-hidden " ref={scrollContainerRef} onKeyDown={handleKeyDown} tabIndex={0} role='region' aria-label='Feedback carousel'>
                            {arr.map((item) => (

                            <div className="feedCard p-5 " key={item.id}>
                                <div className="top flex gap-5 align-middle mb-3">
                                    <img src={item.imgPath} alt="" className='w-17 rounded-full' />
                                    <div className="right">
                                        <h3>{item.name}</h3>
                                        <p>{item.job}</p>
                                    </div>
                                </div>
                                <div className="mid flex w-[60%] mb-3" >
                                    <FaStar className='text-2xl' /><FaStar className='text-2xl' /><FaStar className='text-2xl' /><FaStar className='text-2xl' /><FaRegStarHalfStroke className='text-2xl' />
                                </div>
                                <div className="bottom"><p className='lg:text-xl'>{item.subTitle}</p></div>
                            </div>
                            ))}
                        </div>
                    </div>
                
                </div>

            </div>
        </>
    )
}

export default FeedBack