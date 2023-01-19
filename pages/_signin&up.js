import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Urbanfit_logo from '../public/U-logo1 1 1.png'


export default function Signing() {
    // configuring router
    const router = useRouter()

    //handling user input details with state hook and onchange event
    const initialFormObj = {
        username: '',
        email: '',
        phone: '',
        password: '',
    }
    const [credentials, setCredentials] = useState(initialFormObj)
    const onchange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
        console.log(credentials)
    }

    //handling onsubmit event and applying frontend validation
    const onsubmit = (e) => {
        e.preventDefault()
        if(credentials){
            // yet to do according to the backend API
        }
    }

    return (
        <>
            <Head>
                <title>Urban Fits - {router.pathname==='/login'?'Login':'Sign Up'}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <main className={`bg-white lg:flex lg:items-center lg:justify-center lg:w-screen lg:h-screen lg:overflow-hidden`}>
                <div className=" w-[95%] md:w-[407px] mt-16 lg:mt-0 mx-auto ">
                    <Image src={Urbanfit_logo} className={`mx-auto mb-3`} />
                    <div className='w-full mx-auto mb-7' >
                        <h2 className="font_futuraLT font-medium text-4xl leading-[47px] text-center">Join Our Urban Program <br /> and get free Shipping <br /> & free returns on <br /> every order</h2>
                    </div>
                    <div className='w-[304px] mx-auto leading-8' >
                        <h3 className=" font-light text-2xl text-center">Urban Members get Exclusive <br /> access to products, events, <br /> and offers. Just provide a <br /> few details. It’s free to join and <br /> open to all.</h3>
                    </div>
                </div>

                <div className=" w-[95%] md:w-[400px] mx-auto py-7 bg-white">
                    <h1 className="w-full text-center text-lg font_futuraLT">Continue With</h1>
                    <div className="w-full mt-3 mb-5 flex justify-center space-x-6">
                        <button className=" py-2 px-6 border rounded-full"><a href="#" title="Continue with Google" className='text-lg font-semibold flex items-center space-x-3'><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" className='inline' width="20" alt="google" /><p>Google</p></a></button>
                        <button className=" py-2 px-6 border border-black bg-black text-white rounded-full"><a href="#" title="Continue with Google" className='text-lg font-semibold flex items-center space-x-3'><img src="https://www.freepnglogos.com/uploads/mac-cosmetic-png-logo/apple-mac-cosmetic-png-logo-8.png" className='inline' width="28" alt="google" /><p>Apple</p></a></button>
                    </div>
                    <h1 className="w-full text-center text-lg font_futuraLT">Or</h1>
                    <form className="bg-white p-2 border-t font_futuraLT" onSubmit={onsubmit} >
                        <div className={`data_field ${router.pathname==='/login'?'hidden':''} flex items-center border-b  focus:border-yellow-700 hover:border-yellow-600 transition py-2 px-3 mb-4`}>
                            <input className="pl-2 outline-none border-none" type="text" name="username" id="" onChange={onchange} placeholder="Username" />
                        </div>
                        <div className="data_field lex items-center border-b  focus:border-yellow-700 hover:border-yellow-600 transition py-2 px-3 mb-4">
                            <input className="pl-2 outline-none border-none" type="email" name="email" id="" onChange={onchange} placeholder="Email" />
                        </div>
                        <div className={`data_field ${router.pathname==='/login'?'hidden':''} flex items-center border-b  focus:border-yellow-700 hover:border-yellow-600 transition py-2 px-3 mb-4`}>
                            <input className="pl-2 outline-none border-none" type='number' name="phone" id="" onChange={onchange} placeholder="Phone No." />
                        </div>
                        <div className="data_field lex items-center border-b  focus:border-yellow-700 hover:border-yellow-600 transition py-2 px-3">
                            <input className="pl-2 outline-none border-none" type='password' name="password" id="" onChange={onchange} placeholder="Password" />
                        </div>
                        <div className="my-3">
                            <small className='text-gray-400 text-xs '>Password must be at least 8 characters and can’t be easy to guess - commonly used or risky passwords are not premitted.</small>
                        </div>
                        <div className="w-full h-14 mb-3 flex items-center border-b">
                            <div className='mx-2' >
                                <input className='' type="checkbox" id="todo" name="todo" value="todo" />
                            </div>
                            <div className=' text-left h-full flex items-center' >
                                <label htmlFor="todo"><small className="ml-1 text-xs text-gray-400">{router.pathname==='/login'?'Rmember me':'Buy creating an account, I agree to the Terms & Conditions.I have read the Legal Notice and Privacy Policy'}</small></label>
                            </div>
                        </div>
                        <button type="submit" className="block w-full h-12 bg_btn_gold my-6 py-2 rounded-full text-white transition hover:shadow-xl">{router.pathname==='/login'?'Login':'Sign Up'}</button>
                        <Link href={router.pathname==='/login'?'/signup':'/login'} className='underline underline-offset-1'><h1 className='w-full text-center' >{router.pathname==='/login'?'Create a New Account':'Log in with an Existing Account'}</h1></Link>
                    </form>
                </div>
            </main>
        </>
    )
}
