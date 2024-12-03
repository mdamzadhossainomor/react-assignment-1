import React from "react";

function Preferedemail() {
  const mailData = [
    {
      img: "Frame12.svg",
    },
    {
      img: "Frame12.svg",
    },
    {
      img: "Frame12.svg",
    },
    {
      img: "Frame12.svg",
    },
  ];

  return (
    <>
      <div className="bg-[#002228] flex justify-center text-white pt-6 pb-6 ">
        <div className="bg-[url(/BG.svg)] w-full pb-6 sm:w-[1344px] md:w-[1344px] lg:w-[1344px] h-auto md:h-[564px] bg-left-bottom bg-cover flex justify-center mx-5 rounded-2xl">
          <div className=" pl-[24px] sm:pl-[72px] md:pl-[250px] lg:[486px] mt-[69px] ">
            <h2 className="md:w-[591px lg:w-[591px] text-[32px]">
              Train your aiDR on your...
            </h2>
            <h2 className="text-[#0FF1F6] text-[32px] italic">
              prefered email st|
            </h2>

            <p
              className="
                      mt-[30px]"
            >
              You’re in control. Train your aiDR on elements of your Marketing
              strategy.
            </p>

            <div className="flex flex-wrap w-full  pb-5 lg:w-[550px] gap-8 mt-[64px]">
              {mailData.map((item, i) => (
                <div key={i}>
                  <img src={item.img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preferedemail;
