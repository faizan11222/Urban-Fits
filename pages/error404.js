import React from 'react'
import Head from 'next/head'
import Button from './_button'
import Link from 'next/link'
export default function Error404() {
  return (
    <>
      <Head>
        <title>Urban Fits - Error 404</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="w-screen h-screen bg_404 bg-no-repeat bg-cover bg-right lg:bg-top">
        <div className="w-full h-full px-2 md:px-0 flex flex-col md:flex-row justify-center items-center bg-right lg:bg-top lg:space-x-20">
          <h1 className="text-white mb-6 text-8xl md:text-[12rem]">404</h1>
          <div className="md:w-[37vw] flex flex-col justify-center items-center lg:items-start lg:flex-start space-y-8">
            <h2 className='text-xl font-bold md:text-[32px] gradient_txt font_futuraLT' >WE CAN'T FIND THAT PAGE</h2>
            <p className="text-center font_futuraLT text-white lg:text-justify md:text-xl leading-7">We're Fairly Sure That Page Used To Be Here, But Seems To Have Gone Missing. We Do Apologies On It's Behalf.</p>
            <Link href="/" ><Button value="Back To Home" classes="w-48" /></Link>
          </div>
        </div>
      </main>
    </>
  )
}
