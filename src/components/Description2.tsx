import React, { FunctionComponent } from "react";
import Image from "next/image";
// import BulletPoint from "./BulletPoint";
import Link from "next/link";

interface DescriptionProps {
  imgPath: string;
  title: string;
  descrip: string;
  bulletPoints2: [
    { icon: JSX.Element, title:string, text: string },
    { icon: JSX.Element, title:string, text: string },
  ];
  buttons: [
    { path: string; text: string }, 
    { path: string; text: string }
];
  reverseFlex?: boolean;
}

const Description: FunctionComponent<DescriptionProps> = ({
  imgPath,
  title,
  descrip,
  bulletPoints2,
  buttons,
  reverseFlex = false,
}) => {
  return (
    <div className={`flex gap-[110px] ${reverseFlex && "flex-row-reverse"} mx-[165px] items-center justify-center`}>
      <div className="h-[400px] w-[555px] relative">
        <Image objectFit="cover" layout="fill" alt="hero image" src={imgPath} />
      </div>
      <div className="flex flex-col gap-[23px]">
        <h3 className="font-bold text-[40px] leading-[48px] tracking-[-0.5px] text-primary">
          {title}
        </h3>
        <p className="font-normal text-[16px] leading-[24px] tracking-[0.1px] text-neutral-600 w-[445px]">
          {descrip}
        </p>
        {bulletPoints2.map((b, k) => (
          <BulletPoint key={k} icon={b.icon} text={b.text} />
        ))}
        <div className="flex gap-[12px]">
          {buttons.map((b, k) => (
            <Link key={k} href={b.path}>
              <button
                className={`font-medium text-[16px] leading-[24px] tracking-[0.1px] border h-[36px]
                  ${k === 0 && "text-green2 bg-white border-[#476761] w-[120px]"} 
                  ${k === 1 && "text-white bg-[#476761] w-[190px]"}`}
              >
                {b.text}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
