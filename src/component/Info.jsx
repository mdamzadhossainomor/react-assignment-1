import { img } from "framer-motion/client";
import React from "react";

function Info() {
  const infoData = [
    {
      img: "info1.svg",
      title: "You’re in Control",
      description:
        "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
    },
    {
      img: "info2.svg",
      title: "Infinitely Scalable",
      description:
        "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
    },
    {
      img: "info3.svg",
      title: "Incredibly Flexible",
      description:
        "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
    },
  ];

  return (
    <>
      <section className=" bg-[#002228] text-white">
        <div className="flex flex-wrap flex-col md:flex-row lg:flex-row ml-[20px] sm:ml-[50px] md:ml-[120px] max-w-[1440px] gap-[24px] px-[24px] mx-auto">
          {infoData.map((item, i) => (
            <div
              key={i}
              className="sm:w-[384px] md:w-[384px] lg:w-[384px] pt-8"
            >
              <div>
                <figure>
                  <img
                    src={item.img}
                    alt=""
                    className="max-w-[54px] min-h-[54px]"
                  />
                </figure>
              </div>
              <div>
                <h3 className="text-[24px] font-bold mt-[16px]">
                  {item.title}
                </h3>
                <p className="w-full md:w-[260px] lg:w-[260px] text-[#FFFFFF] text-[18px] mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Info;
