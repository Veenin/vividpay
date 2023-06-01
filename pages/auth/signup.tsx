import Head from 'next/head';
import React, { useState } from 'react'
import iconb from "../../public/images/svgexport-14.svg"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
const signup = () => {
  const router = useRouter();
  const [Firstname, setFirstname] = useState('')
  const [Lastname,setLastname] = useState('')
  const [Email,setEmail] = useState('')
  const [firstnameerror, setfirstnameerror] = useState("");
  const [lastnameerror, setlastnameerror] = useState("");
  const [emailerror, setemailerror] = useState("");
  const signUp1 = async ()=>{
    let regexForFirstName=/^[\w]{3,}$/
    let regexForLastName=/^[\w]{3,}$/
    let regexForEmail=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
    // let regexForPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if (
      Firstname === "" ||
      Lastname === "" ||
      Email === "" ||
      !regexForFirstName.test(Firstname) ||
      !regexForLastName.test(Lastname) ||
      !regexForEmail.test(Email)
    ) {
      if (Firstname === "") {
        setfirstnameerror("Please enter a value for the first name.");
      } else if (!regexForFirstName.test(Firstname)) {
        setfirstnameerror("First name must be at least 3 characters and spaces are not allowed.");
      } else {
        setfirstnameerror("");
      }
    
      if (Lastname === "") {
        setlastnameerror("Please enter a value for the last name.");
      } else if (!regexForLastName.test(Lastname)) {
        setlastnameerror("Last name must be at least 3 characters and spaces are not allowed.");
      } else {
        setlastnameerror("");
      }
    
      if (Email === "") {
        setemailerror("Please enter an email address.");
      } else if (!regexForEmail.test(Email)) {
        setemailerror("Please enter a valid email format.");
      } else {
        setemailerror("");
      }
    } else {
      setfirstnameerror("");
      setlastnameerror("");
      setemailerror("");
      const data1 = Firstname;
      const data2 = Lastname;
      const data3 = Email;
      const url = `/auth/compsignup?param1=${encodeURIComponent(data1)}&param2=${encodeURIComponent(data2)}&param3=${encodeURIComponent(data3)}`;
      router.push(url);
    }
    
    console.log(Firstname, Lastname, Email);
    
  }
  return (
    <>
      <Head>
      <title>Signup to Vividpay</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className='bg-sign flex justify-center items-center pt-20 pb-20'>
           <div className='lg:bg-[white] lg:h-[790px] lg:w-[43%] h-[95%] w-[100%] lg:shadow-lg lg:shadow-black lg:rounded-3xl'>
            <div className='mt-[14px] ml-[13px]'>
             <Image src={iconb} alt='logo' width={210}></Image>
            </div>
            <h2 className='text-[32px] font-apple font-lighter lg:mt-[8px] lg:ml-[75px] md:mt-[8px] md:ml-[75px] text-center lg:text-start md:text-start text-[#220C60]'>Get started</h2>
            <p className='lg:mt-[8px] lg:ml-[75px] md:mt-[8px] md:ml-[75px] text-center lg:text-start md:text-start text-[18px] text-[#757576] font-apple font-medium'>Hi there, We welcome you to vividpay</p>
            <div className='lg:ml-[75px] lg:mt-[38px] md:ml-[75px] md:mt-[38px] mt-[38px]'>
              <label htmlFor="Firstname" className='block text-[14px] text-[#67656E] font-apple font-medium ml-[7.5%] lg:ml-0 md:ml-0'>Firstname</label>
              <div className='flex justify-center lg:block md:block'>
              <input type="text" className='w-[85%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] hover:border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold' placeholder='Enter your firstname' onChange={(e)=>setFirstname(e.target.value)}/>
              </div>
              <div>{firstnameerror}</div>
              <label htmlFor="Lastname" className='block text-[14px] text-[#67656E] font-apple font-medium mt-5 ml-[7.5%] lg:ml-0 md:ml-0'>Lastname</label>
              <div className='flex justify-center lg:block md:block'>
              <input type="text" className='w-[85%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] hover:border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold' placeholder='Enter your lastname' onChange={(e)=>setLastname(e.target.value)}/>
              </div>
              <div>{lastnameerror}</div>
              <label htmlFor="Email" className='block text-[14px] text-[#67656E] font-apple font-medium mt-5 ml-[7.5%] lg:ml-0 md:ml-0'>Email</label>
              <div className='flex justify-center lg:block md:block'>
              <input type="email" className='w-[85%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] hover:border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold' placeholder='email must be valid' onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div>{emailerror}</div>
              <div className='flex justify-center lg:block md:block'>
              <button className='block mt-[35px] w-[85%] h-[55px] bg-[#623ECA] rounded-[4px] text-[#FFFFFF] text-[18px] font-semibold font-sans' onClick={signUp1}>Proceed</button>
              </div>
            </div>
            <div className='flex items-center justify-center mt-10'>
              <span className='text-[18px] font-normal'>Already have an account? <Link href='' className='font-semibold'>Login</Link></span>
            </div>
              <p className='text-center mt-[27px] text-[14px]'>Avanin 1.0</p>
           </div>
        </section>
      </main>
    </>
  )
}

export default signup;