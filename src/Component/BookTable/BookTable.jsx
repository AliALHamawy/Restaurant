import './BookTable.css'

function BookTable() {
    return (
        <>
            <div className="bookTable mt-20 flex">
                <div className="container lg:max-w-[990px] m-auto flex gap-1 my-20 p-5 lg:flex-row flex-col justify-center align-middle">
                    <div className="leftBook flex flex-col lg:w-[60%] m-auto">
                        <h1 className='bookHeader'>Book a Table</h1>
                        <div className='flex gap-5 lg:flex-row flex-col m-auto'>
                            <div>
                                <label htmlFor="name">Your Name</label><br />
                                <input type="text" name="" id="name" placeholder='Enter your name ' className='flex w-[100%} m-auto'/>
                            </div>
                            <div>
                                <label htmlFor="phone">Phone Number</label><br />
                                <input type="phone" name="" id="phone" placeholder='+1 (212) 555-1234' />
                            </div>
                            <div>
                                <label htmlFor="date">Enter The Date</label><br />
                                <input type="date" name="" id="date" />
                            </div>
                            <div>
                                <label htmlFor="time">Enter Time</label><br />
                                <input type="time" name="" id="time" />
                            </div>
                            <div className=''>
                                <label htmlFor="message" >Message</label><br />
                                <textarea name="" id="message" placeholder='Enter your message' className='w-[520px]'></textarea>
                            </div>
                        </div>
                        <button className='w-[90%]'>Book a Reservation</button>
                    </div>
                    <div className='rightBook min-w-[38%] flex flex-col m-auto  text-center mt-1'>
                        <div className='w-[100%] h-[120px] flex flex-col text-center p-1'>
                            <h1>Email/Phone</h1>
                            <div>
                                <p>johndoe@gmail.com</p>
                                <p>+148 589 2001 2466</p>
                            </div>
                        </div>
                        <div className='w-[100%] h-[180px] flex flex-col text-center p-1 mt-13'>
                            <h1>Our Location</h1>
                            <p className='w-40 m-auto'>Office 149,
                                450 South Brand Brooklyn
                                San Diego County,
                                CA 91905, USA</p>
                        </div>
                        <p className='mt-20'>Opening Hours <span>9AM - 11PM</span> Everyday</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookTable