import { useState } from 'react'
import './Chef.css'
import ChefInfo from './ChefInfo'
function Chef() {
    const [chef, setChef] = useState(ChefInfo)
    return (
        <>
        <div className="chef">
            <div className="container max-w-[1280px] justify-center gap-3 flex m-auto justify-between">
            {chef.map((item) => (
                <div className="chefCard min-w-[270px] max-w-[310px]" key={item.id}>
                    <div className="image flex justify-center h-[300px]">
                        <img src={item.imgPath} alt="" className='h-[250px] mb-0 mt-12.5'/>
                    </div>
                    <div className='nameDiv'>
                    <h1 className='text-2xl font-bold my-3 ml-1'>{item.name}</h1>
                    </div>
                    <div className="ghefInfo">
                        <p className='p-2 text-xl font-medium'>{item.pos}</p>
                        <p className='p-2 text-xl font-medium'>{item.title}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
        </>
    )
}

export default Chef