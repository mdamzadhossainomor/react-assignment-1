import { div } from 'framer-motion/client'
import React from 'react'

function Partners() {
    const partnersData = [
        {
            img:"BackHublogo.svg"
        },
        {
            img:"CableLabslogo.svg"
        },
        {
            img:"DBSlogo.svg"
        },
        {
            img:"EasyEurologo.svg"
        },
        {
            img:"AMDlogo.svg"
        }

    ]

  return (
      <>
          <section className='w-[100%] bg-[#07292F]'>
            
                  <h3 className='
                  text-center text-[#0FF1F6] text-sm pt-[32px]'>OUR trusted partners</h3>
            


              <div className='flex flex-wrap mx-auto  justify-center gap-[20px] sm:gap-[28px] md:gap-[32px] lg:gap-[32px] mt-[24px] pb-[40px] '>
                  {partnersData.map((item,i) => (
                      <div key={i} className='flex flex-wrap'>
                          <img src={item.img} alt="" />
                      </div>
                  ))}
              </div>
          </section>
      </>
  )
}

export default Partners