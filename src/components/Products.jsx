import React from 'react'
import AboutImg from '../assets/banner3.png'
export default function Products() {
    return (
        <div >
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto " id='product'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={AboutImg} alt="" />
                    </div>
                    <div className="md:w-3/5 mx-auto">
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5 '>How to design your site footer like we did</h2>
                        <p className="text-sm text-neutralGrey mb-8 md:w-3/4 ">Donec a eros justo. Fusce egestas tristique ultrices. 
                        Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. 
                        Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, 
                        at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. 
                        Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, 
                        hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        <button className='btn-primary'>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
