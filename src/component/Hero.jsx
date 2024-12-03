import Button from './ComButton';
import React from 'react'

function Hero() {
    return (
      <>
        <div className="bg-[url(/hero.svg)] w-full h-[408px] sm:h-[408px] md:h-[572px] lg:h-[572px] bg-cover bg-no-repeat bg-right-bottom flex ">
          <div className="text-center sm:text-start md:text-start lg:text-start mt-[44px] sm:mt-[110px] sm:ml-[50px] md:ml-[120px] max-w-[1440px] px-3">
            <p className="text-[#0FF1F6]">AI SDRs (aiDRs)</p>

            <h3 className="text-5xl sm:text-[64px] md:text-[64px] lg:text-[64px] font-bold text-white sm:w-[380px] md:w-[391px] lg:w-[391px] mt-[4px]">
              More <span className="italic font-normal">leads,</span> less{" "}
              <span className="italic font-normal">people.</span>
            </h3>

            <p className="text-[#FFFFFF] sm:w-[343px] md:w-[450px] mt-[10px]">
              Train an aiDR on your ICP and messaging matrix. Activate it on a
              patch. It will send personalized sequences to every target
              contact.
            </p>

            <Button />
          </div>
        </div>
      </>
    );
}

export default Hero