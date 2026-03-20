import { useState } from 'react'
import './Questions.css'
import QuestionsCard from './QuestionsCard'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useRef } from 'react';

function Questions() {
    const [questionSlide, setQuestionSlid] = useState(QuestionsCard)
    const scrollQuestion = useRef(null)

    const scroll = (direction) => {
        if (scrollQuestion.current) {
            const cardWidth = 350
            const currentScroll = scrollQuestion.current.scrollLeft
            const maxScroll = scrollQuestion.current.scrollWidth

            let newScrollPosition;
            if (direction == 'left')
                newScrollPosition = Math.max(0, currentScroll - cardWidth)
            else
                newScrollPosition = Math.min(maxScroll - scrollQuestion.current.clientWidth, currentScroll + cardWidth)
            scrollQuestion .current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            })
        }
    }
    const handleKeyDown = (e) => {
        if(e.key === 'ArrowLeft')
            scroll('left')
        else if(e.key === 'ArrowRight')
            scroll('right')
    }
    return (
        <>
            <div className="questions">
                <div className="container flex flex-col max-w-[1250px] m-auto">
                    <div className="someTitle m-auto flex flex-col text-center my-20">
                        <h1 className='font-bold  2xl:text-5xl xl:text-5xl md:text-5xl text-3xl mb-5'>Frequently Asked Questions</h1>
                        <p className='font-normal 2xl:text-3xl xl:text-3xl md:text-3xl text-2xl'>Levarage artificial intelligence algorithms to provide users with valuable insights</p>
                    </div>
                    <div className="bottomSection flex max-h-[500px]  max-w-[1100px] m-auto text-center align-middle">

                        <button className='arr w-8 h-8 p-2 flex text-center rounded-full m-auto' onClick={()=> scroll('left')}><FaArrowLeft className='text-xl' /></button>
                        <div className="p-5 questionsSlider flex overflow-hidden gap-9 max-h-90" ref={scrollQuestion}>
                            {questionSlide.map((item) => (

                                <div className="slide min-w-[310px] flex flex-col text-center max-h-87 justify-between  p-3" key={item.id}>
                                    <div className="flex flex-col gap-5 mb-3">

                                        <h1 className='text-[19px]'>{item.question}</h1>
                                        <p className='text-[16px]'>{item.answer}</p>
                                    </div>
                                    <button className=' flex w-[130px] justify-between text-center align-middle my-auto'>Learn More <FaArrowRight className='text-xl' /></button>
                                </div>
                            ))}
                        </div>
                        <button className='arr w-8 h-8 p-2 flex rounded-full m-auto' onClick={()=> scroll('right')}><FaArrowRight className='text-xl' /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Questions