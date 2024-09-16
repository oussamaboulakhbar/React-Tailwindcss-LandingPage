import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import IconN from '../../public/logo.png'

export default function MyFooter() {
    return (
        <Footer >
            <div className="w-full bg-white">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 my-10 mx-20">
                    <div className='md:w-1/2'>
                        <a href="#" className='text-2xl font-bold flex items-center space-x-3 my-2' >
                            <img src={IconN} alt="" className='w-60 inline-block items-center ' />
                            {/* <span className='text-[#263238]'>NEXCENT</span> */}
                        </a>
                        <div>
                            <p className='text-sm text-neutralGrey'>Copyright © 2020 BOULAKHBAR OUSSAMA.</p>
                            <p className='text-sm text-neutralGrey'>All rights reserved</p>
                        </div>
                        <div className="w-full sm:flex sm:items-center sm:justify-between mt-5">
                            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
                                <Footer.Icon href="#" icon={BsFacebook} />
                                <Footer.Icon href="#" icon={BsInstagram} />
                                <Footer.Icon href="#" icon={BsTwitter} />
                                <Footer.Icon href="#" icon={BsGithub} />
                                <Footer.Icon href="#" icon={BsDribbble} />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
                        <div>
                            <Footer.Title title="about" className="text-black-important" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" className="text-black">Flowbite</Footer.Link>
                                <Footer.Link href="#" className="text-black">Tailwind CSS</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className="text-black-important" title="Follow us"  />
                            <Footer.LinkGroup col >
                                <Footer.Link href="#" className="text-black">Github</Footer.Link>
                                <Footer.Link href="#" className="text-black">Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" className="text-black-important" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" className="text-black">Privacy Policy</Footer.Link>
                                <Footer.Link href="#" className="text-black">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>

            </div>
        </Footer>
    )
}
