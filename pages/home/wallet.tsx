import React, { useState,useEffect } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import iconb from "../../public/images/svgexport-14.svg"
import Headers from '@/components/header.tsx/headers';
import people from "../../public/images/profile-pic.a9136072d073801df253.png"
import axios from 'axios';
import { useRouter } from 'next/router';
import SideBar from '@/components/home/sidebar';
import ThirdBar from '@/components/home/thirdbar';
const Wallet = () => {
  return (
    <>
      <Head>
       <title>Wallets - Vividpay</title>
       <meta name="description" content="Generated by create next app" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link rel="icon" href="/favicon.ico" /> 
    </Head>
    <main>
        <section>
        <Headers/>
        <div className='lg:flex md:block block'>
        <div className='lg:hidden md:flex flex md:items-center items-center md:mt-5 mt-5 md:ml-[5%] ml-[5%]'>
        <div className='mr-3'>
           <Image src={people} alt="" width={40} className='rounded-full'/>
         </div>
         <div className=''>
           <p className='text-[#535355] font-medium font-sans text-[14px]'>Hi, olu</p>
         </div>
        </div>
        {/*sidebar menu code*/}
        <SideBar/>
        {/* middle account info code */}
        <div  id='two' className='lg:mt-[2%] lg:w-[53%] lg:h-[600px] lg:ml-[2.3%] md:mt-[2%] md:w-[90%] md:h-[700px]  md:ml-[5%] mt-[2%] w-[90%] ml-[5%] h-[500px] rounded-xl flex justify-center flex-col items-center'>
        <div>wallet</div>
        </div>
        </div>
        </section>
    </main>
    </>
  )
}

export default Wallet