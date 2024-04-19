import React, { useState } from 'react'
import Img1 from "../Images/Frame 29.png"
import Img2 from "../Images/Ellipse 727.png"
import Img3 from "../Images/Frame 2608514.png"
import Soc1 from "../Images/Social/Frame 1000006076.png"
import Soc2 from "../Images/Social/Frame 1000006077.png"
import Soc3 from "../Images/Social/Frame 1000006078.png"
import Soc4 from "../Images/Social/Frame 1000006079.png"
import Sp1 from "../Images/Specialize/Frame 1000006272.png"
import Sp2 from "../Images/Specialize/Frame 1000006273.png"
import Sp3 from "../Images/Specialize/Frame 1000006274.png"
import Sp4 from "../Images/Specialize/Frame 1000006275.png"
import Sp5 from "../Images/Specialize/Frame 1000006314.png"
 


const Body = () => {
    const [followBtn, setfollowBtn] = useState("Follow +")
  return (
    <div>
    <div className='w-[1224px] h-72 my-10 mx-auto'> 
     <div className='w-[1220px] mx-auto my-10 relative'>
    <div className='absolute top-0 left-0'>
        <img src={Img1}  alt=''/>
    </div>
    <div className='absolute w-[1224px] top-40 left-0 bg-[#FFFBF2] flex justify-around items-center'>
        <div className='flex gap-3 items-center relative'>
            <div className='relative'>
                <img className='h-[159px] w-[159px] relative -top-10  ' src={Img2} alt='' />
            </div>
            <div>
                <span className='font-bold text-md'>Dr. Bruce Willis</span>
                <p>Gynecologist</p>
                <div>
                    <span>4.2 ⭐⭐⭐⭐</span>
                </div>
            </div>
        </div>
        <div className='flex justify-around gap-8'>
            <div>
                <p>Followers</p>
                <span className='font-bold text-md'>800</span>
            </div>
            <div>
                <p>Following</p>
                <span className='font-bold text-md'>18K</span>
            </div>
            <div>
                <p>Posts</p>
                <span className='font-bold text-md'>250</span>
            </div>
        </div>
        <div>
            <button className='bg-[#3A643B] border border-solid border-gray-400 px-2 py-2 rounded-md'>Book An Appointment</button>
        </div>
    </div>
</div>
</div>

    <div className='w-[1220px]   mx-auto flex gap-5'>
       <div className='left   w-[625px] flex flex-col gap-10 '>
          <div className='border border-solid border-gray-400 overflow-hidden  rounded-lg'>
            <div className='flex justify-between p-5  bg-gradient-to-r from-[#F4F7EC] to-[#F8F8F7]'>
               <span className='  text-lg '> A Little About Me </span>
               <button className='border border-solid border-gray-400 px-2 py-1 rounded-md bg-gradient-to-b from-gray-50 to-gray-20' onClick={()=>{
                followBtn==="Follow +"? setfollowBtn("Followed"):setfollowBtn("Follow +")
               }} >{followBtn}</button>
                
            </div>
             <p className=' text-sm mt-6 px-5'>Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from </p>
             <div className='flex px-5 gap-2'>
             <hr className=' w-5/6 mt-5'></hr> Read More
             </div>

            <div className='flex gap-8 mt-10 mb-3 px-5 '>
                <span>Language Spoken</span>
                <span>Hindi</span>
                <span>English</span>
                <span>Telegu</span>
            </div>
            <div className='flex gap-3 mt-10 mb-3 px-5'>
                <img src={Soc1} alt=''/>
                <img src={Soc2} alt=''/>
                <img src={Soc3} alt=''/>
                <img src={Soc4} alt=''/>
            </div>
          </div>
          <div className='border border-solid border-gray-400 overflow-hidden  rounded-lg' >
          <div className='flex justify-between bg-gradient-to-r from-[#F4F7EC] to-[#F8F8F7] '>
               <span className=' p-5 text-lg'>I Specialize In </span>    
            </div>
            <div className='flex gap-4 my-8 p-5'>
            <img src={Sp1} alt=''/>
            <img src={Sp2} alt=''/>
            <img src={Sp3} alt=''/>
            <img src={Sp4} alt=''/>

            </div>

          </div>

          <div className='border border-solid border-gray-400 overflow-hidden   rounded-lg'>
            <div className='flex justify-between bg-gradient-to-r from-[#F4F7EC] to-[#F8F8F7]'>
               <span className=' p-5 text-lg'> The Concerns I Treat </span>
                
            </div>
              

            <div className='flex gap-10 mt-10 mb-3 p-5 flex-wrap text-[#3A643B]'>
                <span className=' rounded-lg bg-gray-300 px-2 py-1'>Skin Treatment </span>
                <span className=' rounded-lg bg-gray-300 px-2 py-1'>Pregnancy</span>
                <span className=' rounded-lg bg-gray-300 px-2 py-1'>Pelvic Pain</span>
                <span className=' rounded-lg bg-gray-300 px-2 py-1'>Endometriosis</span>
                <span className=' rounded-lg bg-gray-300 px-2 py-1'>Ovarian Cysts</span>
                <span className=' rounded-lg bg-gray-300 px-2 py-1'>+ 5 More</span>
            </div>
            
          </div>



          <div className='border border-solid border-gray-400 overflow-hidden  rounded-lg' >
          <div className='flex justify-between mb-5  bg-gradient-to-r from-[#F4F7EC] to-[#F8F8F7]'>
               <span className=' p-5 text-lg'>Work Experience </span>    
            </div>
            <div className='p-5'>
            <span className='' >I have been in practice for : 7+ Years</span>
            <hr className='mt-2 w-4/6 '></hr>
            </div>
             
             
              <div className='p-5'> 
              <div className='flex gap-5 my-5  '>
                        <div>
                            <img src={Sp5} alt='' />
                        </div>
                        <div className=' '>
                            <div className='flex justify-between gap-64 '>
                                <span>Midtown Medical Clinic</span>
                                <span className=' text-xs'>2015-present</span>
                            </div>
                            <div className='flex '>
                                <span className='text-xs'>Senior Doctor</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5  '>
                        <div>
                            <img src={Sp5}  alt=''/>
                        </div>
                        <div className=' '>
                            <div className='flex justify-between gap-64 '>
                                <span>Midtown Medical Clinic</span>
                                <span className=' text-xs'>2010-2015</span>
                            </div>
                            <div className='flex '>
                                <span className=' text-xs'>Senior Doctor</span>
                            </div>
                        </div>
                    </div>
                     </div>
                 

          </div>
          <div className='border border-solid border-gray-400 overflow-hidden  rounded-lg' >
          <div className='flex justify-between bg-gradient-to-r from-[#F4F7EC] to-[#F8F8F7] '>
               <span className=' p-5 text-lg'> Featured Reviews (102) </span>    
            </div>
             
            <hr></hr>
            <div className='p-5'>
              <div>
              <div className='my-8 shadow-md p-5'>
                    <div className='flex gap-5'>
                        <div>
                            <img src={Img3}  alt=''/>
                        </div>
                        <div className=' '>
                            <div className='flex justify-between gap-60 '>
                                <span>Alicent Hightower</span>
                                <span className=' text-end'>20 Jan 2023</span>
                            </div>
                            <div className='flex '>
                                <span className=' text-start'>Consulted for skin care</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-start'>⭐⭐⭐⭐⭐</span>
                        <span className='text-start'>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</span>
                    </div>
                 </div>
                 

                 <div className='my-5 shadow-md p-5 '>
                    <div className='flex gap-5   '>
                        <div>
                            <img src={Img3}  alt=''/>
                        </div>
                        <div className=' '>
                            <div className='flex justify-between gap-60 '>
                                <span>Alicent Hightower</span>
                                <span className=' text-end'>20 Jan 2023</span>
                            </div>
                            <div className='flex '>
                                <span className=' text-start'>Consulted for skin care</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-start'>⭐⭐⭐⭐⭐</span>
                        <span className='text-start'>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</span>
                    </div>
                 </div>
                
              </div>
             

            </div>

          </div>

       </div>
       <div className='right w-[584px] h-2/3 rounded-lg p-8 border border-solid border-gray-500  '>
          <div className='flex justify-between px-5 py-2 border border-solid border-gray-800 rounded-2xl'>
            <span>Appointment Fee</span>
            <span>₹699.00</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-start my-4 text-lg'>Select your Mode of Session</span>
            <div className='flex gap-5 justify-around'>
                <div className='border border-solid border-gray-500 px-8 py-2 rounded-lg'>
                    <span className='text-md'>In Clinic</span><br></br>
                    <span className=' text-xs text-gray-400'>45 Mins</span>
                </div>
                <div className='border border-solid bg-[#F2FBF2] border-gray-500 px-8 py-2 rounded-lg'>
                    <span>Video</span><br></br>
                    <span className=' text-xs text-gray-400'>45 Mins</span>
                </div>
                <div className='border border-solid border-gray-500 px-8 py-2 rounded-lg'>
                    <span>Chat</span><br></br>
                    <span className=' text-xs text-gray-400'>45 Mins</span>
                </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <span className='text-start my-4 text-lg'>Pick A Time Slot</span>
            <div className='flex gap-5 justify-around'>
                <div className='border border-solid bg-[#F2FBF2] border-gray-500 p-2 rounded-lg '>
                    <span>Mon, 10 Oct</span><br></br>
                    <span className=' text-xs text-gray-400'>10 slots</span>
                </div>
                <div className='border border-solid border-gray-500 p-2 rounded-lg'>
                    <span>Tue, 11 Oct</span>
                    <br></br>
                    <span className=' text-xs text-gray-400'>02 slots</span>
                </div>
                <div className='border border-solid border-gray-500 p-2 rounded-lg'>
                    <span>Wed, 12 Oct</span>
                    <br></br>
                    <span className=' text-xs text-gray-400'>05 slots</span>
                </div>
            </div>
          </div>
          <div className='flex flex-col '>
            <span className='text-start my-4 text-lg'>Morning</span>
            <div className='flex justify-start gap-8 flex-wrap'>
                <span className='border border-solid border-gray-500 p-2 rounded-lg'>09:00 AM </span>
                <span className='border border-solid border-gray-500 p-2 rounded-lg'>09:30 AM</span>
                <span className='border border-solid border-gray-500 p-2 bg-[#3A643B] rounded-lg'>10:00 AM</span>
                <span className='border border-solid border-gray-500 p-2 rounded-lg'>10:15 AM</span>
                <span className='border border-solid border-gray-500 p-2 rounded-lg'>10:45 AM</span>
                <span className='border border-solid border-gray-500 p-2 rounded-lg'>11:00 AM</span>
            </div>
          </div>
          <div className='flex flex-col  '>
          
            <span className='text-start my-4 text-lg'>Evening</span>
            <div className='flex justify-start gap-8 flex-wrap'>
                <span className='border border-solid border-gray-500 p-2 rounded-lg'>09:00 AM </span>
                <span className='border border-solid border-gray-500 p-2 rounded-lg'>09:30 AM</span>
                <span className='border  border-solid border-gray-500 p-2 rounded-lg'>10:00 AM</span>
                <span className='border border-solid border-gray-500 p-2 rounded-lg'>10:15 AM</span>
                <span className='border border-solid border-gray-500 p-2 rounded-lg'>10:45 AM</span>
                <span className='border border-solid border-gray-500 p-2 rounded-lg'>11:00 AM</span>
            </div>
          </div>
          <div className='my-8'>
            <button className='bg-[#3A643B] border border-solid border-gray-400 px-8 py-2 rounded-md'>Make An Appointment</button>
           </div>


       </div>

    </div>
      
    </div>
  )
}

export default Body
