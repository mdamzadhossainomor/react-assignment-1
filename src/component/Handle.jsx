import React from 'react'

function Handle() {
    const stratData = [
        {
            num: '32%',
            dis:'Improvement in Open Rates'
        },
        {
            num: '75%',
            dis: 'Improvement in Ramp Time'
        },
        
        {
            num: '35%',
            dis: 'Improvement in Meetings Booked'
        }
  ]

  return (
      <>
          <div className='bg-[#002228] flex justify-center text-white pt-6 pb-6'>
              <div className='bg-[url(/ls1.svg)] w-full pl-5 pr-5 mx-5 sm:w-[1344px] md:w-[1344px] lg:w-[1344px] bg-cover  h-auto md:h-[564px] rounded-l-3xl bg-right-bottom pb-6'>
                  <div className='  sm:pl-[72px] md:pl-[72px] lg:[72px] mt-[69px]'>
                      <h2 className='md:w-[591px lg:w-[591px] text-[32px]'>
                          Allocate effort where your reps make an inpact.
                      </h2>
                      <h2 className='text-[#0FF1F6] text-[32px] italic'>Let us handle the rest.</h2>

                      <p className='
                      mt-[17px]'>
                          Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.hj
                      </p>

                      <div className='flex flex-col md:flex-row lg:flex-row gap-[32px] mt-[94px]'>
                          {stratData.map((item, i) => (
                              <div key={i} className='w-[174px] '>
                                  <h3 className='text-[40px] font-bold text-[#0FF1F6]'>
                                      {item.num}
                                  </h3>

                                  <p className='w-[174px] sm:w-full'>{item.dis}</p>
                              </div>
                          ))}
                      </div>
                 </div>
              </div>

         </div>
      </>
  )
}

export default Handle