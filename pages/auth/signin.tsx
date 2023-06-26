import Head from 'next/head';
import React,{useState,useEffect} from 'react'
import iconb from "../../public/images/svgexport-14.svg"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
const Signin = () => {
  const signInEndPoints: string = "http://localhost:5000/auth/signin"
  const router = useRouter();
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [emailerror, setemailerror] = useState<string>("");
  const [passworderror, setpassworderror] = useState<string>("");
  const [Message, setMessage] = useState<string>("");
  const signin = async()=>{
    let regexForEmail=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
    let regexForPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if(
        Email === "" ||
        Password === "" ||
        !regexForEmail.test(Email) ||
        !regexForPassword.test(Password)
    ){
      if (Email === "") {
        setemailerror("Please enter an email address.");
      } else if (!regexForEmail.test(Email)) {
        setemailerror("Please enter a valid email format.");
      } else {
        setemailerror("");
      }
      if(Password==""){
        setpassworderror("please this field is required !!")
      }else if(!regexForPassword.test(Password)){
        setpassworderror("password must contain uppercase,lowercase and numbers !!") 
      }else {
        setpassworderror("");
      }
    } else{
      setemailerror("");
      setpassworderror("");
      let logInUser ={Email,Password}
      console.log(logInUser)
      await axios.post(signInEndPoints,logInUser).then((result)=>{
        if(result.data.status === false){
          setMessage(result.data.message);
        }
        else{
          setMessage(result.data.message);
          localStorage.setItem("token",result.data.token);
          localStorage.setItem("userId",result.data.userId);
          localStorage.setItem("Email",result.data.Email);
          router.push("/auth/loading")
        }
      })
    }
  }
  return (
    <>
     <Head>
      <title>Signin to Vividpay</title>
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
            <h2 className='text-[32px] font-apple font-lighter lg:mt-[8px] lg:ml-[75px] md:mt-[8px] md:ml-[75px] text-center lg:text-start md:text-start text-[#220C60]'>Sign In</h2>
            <p className='lg:mt-[8px] lg:ml-[75px] md:mt-[8px] md:ml-[75px] text-center lg:text-start md:text-start text-[18px] text-[#757576] font-apple font-medium'>Welcome back😜</p>
            <div className='lg:ml-[75px] lg:mt-[38px] md:ml-[75px] md:mt-[38px] mt-[38px]'>
              <label htmlFor="Email" className='block text-[14px] text-[#67656E] font-apple font-medium ml-[7.5%] lg:ml-0 md:ml-0'>Email</label>
              <div className='flex justify-center lg:block md:block'>
              <input type="email" className='w-[85%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] hover:border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold' placeholder='Enter email address' onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div>{emailerror}</div>
              <label htmlFor="Password" className='block text-[14px] text-[#67656E] font-apple font-medium mt-5 ml-[7.5%] lg:ml-0 md:ml-0'>Password</label>
              <div className='flex justify-center lg:block md:block'>
              <input type="password" className='w-[85%] h-[50px] bg-[#F3F3F3] rounded-[4px] focus:outline-[#623ECA] hover:border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold' placeholder='password should contain at least 8 characters' onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              <div>{passworderror}</div>
              <div className='flex justify-center lg:block md:block'>
              <button className='block mt-[35px] w-[85%] h-[55px] bg-[#623ECA] rounded-[4px] text-[#FFFFFF] text-[18px] font-semibold font-sans' onClick={signin}>Sign In</button>
              </div>
            </div>
            <div className='flex items-center justify-center mt-10'>
              <span className='text-[18px] font-normal'>Do not have an account? <Link href='' className='font-semibold'>Signup</Link></span>
            </div>
              <p className='text-center mt-[27px] text-[14px]'>Avanin 1.0</p>
           </div>
        </section>
      </main>
    </>
  )
}

export default Signin