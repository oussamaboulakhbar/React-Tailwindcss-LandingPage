import React from 'react'

export default function Blog() {
    const blogs = [
        { id: 1, discreption: 'Creating Streamlined Safeguarding Processes with OneRen', img: '/src/assets/image 18.png' },
        { id: 2, discreption: 'What are your safeguarding responsibilities and how can you manage them?', img: '/src/assets/image 19.png' },
        { id: 3, discreption: 'Revamping the Membership Model with Triathlon Australia', img: '/src/assets/image 20.png' }
    ]
    return (
        <div className='mb-10'>
            <div className="md:w-1/2 text-center mx-auto  py-16 " id='faq'>
                <h2 className='text-neutralDGrey font-semibold text-4xl mb-2'>Caring is the new marketing</h2>
                <p className='text-neutralGrey text-sm mx-10 py-2'>The Nexcent blog is the best place to read about the latest membership insights,
                    trends and more. See who's joining the community, read about how our community
                    are increasing their membership income and lot's more.</p>
            </div>
            {/* all blogs */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between ">
                {
                    blogs.map((blog) =>
                    (
                        <div key={blog.id} className=' relative mx-auto mb-12 cursor-pointer'>
                            <img src={blog.img} alt="" className="hover:scale-95 transition-all duration-300" />
                            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 
                                -bottom-12">
                                <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.discreption}</h3>
                                <div className='flex items-center justify-center gap-8  '>
                                    <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700 '>Readmore 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none" className='inline-block ml-2 ' >
                                            <path d="M12.4999 9.39905L15.7928 6.10615C16.1834 5.71563 16.1834 5.08246 15.7928 4.69194L12.4999 1.39905M15.4999 5.39905L1.49994 5.39905" stroke="#4CAF4F" />
                                        </svg>  
                                    </a>
                                </div>
                            </div> 
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}
