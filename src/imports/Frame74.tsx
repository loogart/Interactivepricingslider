import clsx from "clsx";
import imgImage43 from "figma:asset/8446b6c6dfc1f6f70e9b4e5c5baba2750c662003.png";
import imgImage45 from "figma:asset/37d0b75c5b9370e8b3a1da3fbd986f6616044aa7.png";
import imgImage44 from "figma:asset/a3d3ceaf2175ec569ecb20634ee964c9980743c0.png";
type Frame74ImageProps = {
  additionalClassNames?: string;
};

function Frame74Image({ children, additionalClassNames = "" }: React.PropsWithChildren<Frame74ImageProps>) {
  return (
    <div className={clsx("absolute h-[602px] top-[208px] w-[561px]", additionalClassNames)}>
      <div className="absolute inset-0 mix-blend-multiply overflow-hidden pointer-events-none">{children}</div>
    </div>
  );
}
type Frame74HelperProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Frame74Helper({ text, text1, additionalClassNames = "" }: Frame74HelperProps) {
  return (
    <div className={clsx("absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic text-[32px] text-black top-[1622px]", additionalClassNames)}>
      <p className="mb-0">{text}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal">{text1}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start leading-[normal] left-[378px] not-italic text-black top-[1093px] w-[404.437px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[125.848px] w-full">$1000</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[49.352px] w-full">[250 increments]</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#fcfaf5] relative size-full">
      <Frame74Image additionalClassNames="left-[35px]">
        <img alt="" className="absolute h-[139.61%] left-0 max-w-none top-0 w-full" src={imgImage43} />
      </Frame74Image>
      <Frame74Image additionalClassNames="left-[616px]">
        <img alt="" className="absolute h-[139.61%] left-0 max-w-none top-0 w-full" src={imgImage45} />
      </Frame74Image>
      <Frame74Image additionalClassNames="left-[1216px]">
        <img alt="" className="absolute h-[139.61%] left-0 max-w-none top-0 w-full" src={imgImage44} />
      </Frame74Image>
      <div className="absolute bg-black h-[20px] left-[189px] top-[980px] w-[1512px]" />
      <div className="absolute left-[133px] size-[56px] top-[962px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
          <circle cx="28" cy="28" fill="var(--fill-0, #FCFAF5)" id="Ellipse 12" r="22" stroke="var(--stroke-0, black)" strokeWidth="12" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[699px] not-italic text-[32px] text-black top-[1394px] w-[404px]">Under this threshold, we live in your environment, and solve problems you send us all all day everyday.</p>
      <Frame74Helper text="Headcount" text1="typically 1-5 people" additionalClassNames="left-[699px] w-[404px]" />
      <Frame74Helper text="Headcount" text1="5+ people in your company" additionalClassNames="left-[1261px] text-nowrap whitespace-pre" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1261px] not-italic text-[32px] text-black top-[1394px] w-[404px]">Above this, we will create systems, continue working ERPs, Ai implementations, Machine learning, ...</p>
      <div className="absolute flex h-[218px] items-center justify-center left-[1146px] top-[1394px] w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[218px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 218 4">
                <line id="Line 28" stroke="var(--stroke-0, black)" strokeWidth="4" x2="218" y1="2" y2="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame1 />
      <div className="absolute h-[23px] left-[calc(50%+224px)] top-[980px] translate-x-[-50%] w-[1076px]" />
      <div className="absolute left-[513px] size-[134px] top-[923px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134 134">
          <circle cx="67" cy="67" fill="var(--fill-0, #FCFAF5)" id="Ellipse 11" r="61" stroke="var(--stroke-0, #BABABA)" strokeWidth="12" />
        </svg>
      </div>
      <div className="absolute left-[1643px] size-[58px] top-[961px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 58">
          <circle cx="29" cy="29" fill="var(--fill-0, #FCFAF5)" id="Ellipse 13" r="23" stroke="var(--stroke-0, #815CE7)" strokeWidth="12" />
        </svg>
      </div>
    </div>
  );
}