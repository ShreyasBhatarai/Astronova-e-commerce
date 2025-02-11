import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='w-full h-screen justify-center grid '>
        <Image src={'/Payment.png'} alt={''} width={500} height={500} className='place-self-center'/>

        <div className='w-full text-center'>
        <div className='font-bold text-2xl'>Payment Successful!</div>
        <p className='text-xl text-[#737373]'>Congratulations! Your payment has been successfully processed. Thank you for your purchase.</p>
    </div>
        </div>
  )
}

export default page
