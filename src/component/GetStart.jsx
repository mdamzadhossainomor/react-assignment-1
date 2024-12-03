import React from 'react'
import Button from './ComButton'
function GetStart() {
  return (
    <>
      <div className="bg-[#002228] text-white pt-[96px]  h-[525px] md:h-[433px] lg:h-[443px]">
        <h3 className="text-center  text-[#0FF1F6]">GET STARTED</h3>

        <h2 className="text-center text-[36px] md:w-[640px] mx-auto mt-[23px] font-bold">
          <span className="italic font-normal">Embrace</span> the new era of 
           <span className="italic font-normal ps-2">outbound.</span>
        </h2>
        <p className="text-center mt-[23px]">
          Wizia lets you train, activate, and optimize aiDRs. Take your outbound
          to new levels of performance and efficiency.
        </p>

        <div className="flex justify-center mt-[23px]">
          <Button />
        </div>
      </div>
    </>
  );
}

export default GetStart