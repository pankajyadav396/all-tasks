"use client"
import React, { useState } from 'react';

const Hero = () => {
    const [first, setFirst] = useState('tab1');
    const handleTabChange = (tab) => {
        setFirst(tab);
    };

    return (
        <div className='pt-[50px]'>
            <div className='max-w-[1140px] min-[1400px]:max-w-[1320px] mx-auto px-3'>
                <div className=' flex items-center justify-between pb-10'>
                    <select
                        className="border cursor-pointer border-fuchsia-700 text-fuchsia-700 rounded-3xl px-3 py-2"
                        value={first}
                        onChange={(e) => handleTabChange(e.target.value)}
                    >
                        <option value="tab1">March</option>
                        <option value="tab2">April</option>
                        <option value="tab3">May</option>
                        <option value="tab4">June</option>
                        <option value="tab5">July</option>
                        <option value="tab6">August</option>
                        <option value="tab7">September</option>
                        <option value="tab8">October</option>
                        <option value="tab9">November</option>
                        <option value="tab10">December</option>
                    </select>

                    <h1 className='text-[50px] ff-poppins font-medium  leading-normal'>All tasks of year 2024</h1>
                    <a href='#' className=' cursor-pointer text-[40px] font-semibold'>Profile</a>
                </div>
                {first === 'tab1' && (
                    <div className='w-full min-h-[216px] mt-8'>
                        <div className="flex flex-wrap flex-row w-full items-center">
                            <div className=' w-5/12 px-3'>
                                <p className="text-slate-950 text-2xl font-semibold font-poppins leading-[27px]">Next Js Basic :- <br /> (Router , Map , Array , object , Swiper)</p>
                            </div>
                            <div className='w-7/12 px-3'>
                                <div className='flex gap-5'>
                                    <p className="text-gray-400 text-base font-normal font-poppins leading-7">Github Link:- </p>
                                    <a href="https://github.com/pankajyadav396/my-practice-app.git" target='_blank' className='text-xl hover:underline hover:text-fuchsia-700 text-black'>github.com/pankajyadav396/my-practice-app.git</a>
                                </div>
                                <div className='flex mt-3 gap-5'>
                                    <p className="text-gray-400 text-base font-normal font-poppins leading-7">Live Link:- </p>
                                    <a href="https://my-practice-app-rho.vercel.app/" target='_blank' className='text-xl hover:underline hover:text-fuchsia-700 text-black'>https://my-practice-app-rho.vercel.app/</a>
                                </div>
                            </div>
                            <div className=' w-5/12 px-3 mt-10'>
                                <p className="text-slate-950 text-2xl font-semibold font-poppins leading-[27px]">Labs 248 :-</p>
                            </div>
                            <div className='w-7/12 px-3 mt-10'>
                                <div className='flex gap-5'>
                                    <p className="text-gray-400 text-base font-normal font-poppins leading-7">Github Link:- </p>
                                    <a href="https://github.com/pankajyadav396/game-labs.git" target='_blank' className='text-xl hover:underline hover:text-fuchsia-700 text-black'>github.com/pankajyadav396/248-labs.git</a>
                                </div>
                                <div className='flex mt-3 gap-5'>
                                    <p className="text-gray-400 text-base font-normal font-poppins leading-7">Live Link:- </p>
                                    <a href="https://game-labs.vercel.app/" target='_blank' className='text-xl hover:underline hover:text-fuchsia-700 text-black'>https://248-labs.vercel.app/</a>
                                </div>
                            </div>
                            <div className=' w-5/12 px-3 mt-10'>
                                <p className="text-slate-950 text-2xl font-semibold font-poppins leading-[27px]">Cloopp Page :-</p>
                            </div>
                            <div className='w-7/12 px-3 mt-10'>
                                <div className='flex gap-5'>
                                    <p className="text-gray-400 text-base font-normal font-poppins leading-7">Github Link:- </p>
                                    <a href="https://github.com/pankajyadav396/newbootstrap-page.git" target='_blank' className='text-xl hover:underline hover:text-fuchsia-700 text-black'>github.com/pankajyadav396/Cloopp-page.git</a>
                                </div>
                                <div className='flex mt-3 gap-5'>
                                    <p className="text-gray-400 text-base font-normal font-poppins leading-7">Live Link:- </p>
                                    <a href="https://cloopp-page.vercel.app//" target='_blank' className='text-xl hover:underline hover:text-fuchsia-700 text-black'>https://cloopp-page-rho.vercel.app/</a>
                                </div>
                            </div>
                            <div className=' w-5/12 px-3 mt-10'>
                                <p className="text-slate-950 text-2xl font-semibold font-poppins leading-[27px]">Form Validation :-</p>
                            </div>
                            <div className='w-7/12 px-3 mt-10'>
                                <div className='flex gap-5'>
                                    <p className="text-gray-400 text-base font-normal font-poppins leading-7">Github Link:- </p>
                                    <a href="https://github.com/pankajyadav396/my-form.git" target='_blank' className='text-xl hover:underline hover:text-fuchsia-700 text-black'>github.com/pankajyadav396/form-validation.git</a>
                                </div>
                                <div className='flex mt-3 gap-5'>
                                    <p className="text-gray-400 text-base font-normal font-poppins leading-7">Live Link:- </p>
                                    <a href="https://my-form-eosin.vercel.app/" target='_blank' className='text-xl hover:underline hover:text-fuchsia-700 text-black'>https://my-form-validation.vercel.app/</a>
                                </div>
                            </div>
                            <div className=' w-5/12 px-3 mt-10'>
                                <p className="text-slate-950 text-2xl font-semibold font-poppins leading-[27px]">Html with vite and slider :-</p>
                            </div>
                            <div className='w-7/12 px-3 mt-10'>
                                <div className='flex gap-5'>
                                    <p className="text-gray-400 text-base font-normal font-poppins leading-7">Github Link:- </p>
                                    <a href="https://github.com/pankajyadav396/setup-vites.git" target='_blank' className='text-xl hover:underline hover:text-fuchsia-700 text-black'>github.com/pankajyadav396/form-validation.git</a>
                                </div>
                                <div className='flex mt-3 gap-5'>
                                    <p className="text-gray-400 text-base font-normal font-poppins leading-7">Live Link:- </p>
                                    <a href="https://setup-vites.vercel.app/" target='_blank' className='text-xl hover:underline hover:text-fuchsia-700 text-black'>https://my-form-validation.vercel.app/</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {first === 'tab2' && (
                    <div></div>
                )}
                {first === 'tab3' && (
                    <div></div>
                )}
                {first === 'tab2' && (
                    <div></div>
                )}
                {first === 'tab4' && (
                    <div></div>
                )}
                {first === 'tab5' && (
                    <div></div>
                )}
                {first === 'tab6' && (
                    <div></div>
                )}
                {first === 'tab7' && (
                    <div></div>
                )}
                {first === 'tab8' && (
                    <div></div>
                )}
                {first === 'tab9' && (
                    <div></div>
                )}
                {first === 'tab10' && (
                    <div></div>
                )}

                {/* Add other tab content blocks similarly */}

            </div>
        </div >
    );
};

export default Hero;