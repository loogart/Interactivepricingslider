import { useState } from "react";
import imgAngry from "figma:asset/8446b6c6dfc1f6f70e9b4e5c5baba2750c662003.png";
import imgNeutral from "figma:asset/37d0b75c5b9370e8b3a1da3fbd986f6616044aa7.png";
import imgHappy from "figma:asset/a3d3ceaf2175ec569ecb20634ee964c9980743c0.png";

const MIN_VALUE = 0;
const MAX_VALUE = 10000;
const STEP = 250;
const THRESHOLD = 1000;
const THRESHOLD_POSITION = 30; // 30% of slider width

export default function PricingSlider() {
  const [value, setValue] = useState(THRESHOLD);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  // Calculate percentage for visual slider position
  // $0-$1000 maps to 0%-30%, $1000-$10000 maps to 30%-100%
  const percentage = value < THRESHOLD 
    ? (value / THRESHOLD) * THRESHOLD_POSITION
    : THRESHOLD_POSITION + ((value - THRESHOLD) / (MAX_VALUE - THRESHOLD)) * (100 - THRESHOLD_POSITION);

  // Determine character emotion
  const getCharacterImage = () => {
    if (value < THRESHOLD) return imgAngry;
    if (value <= 2000) return imgAngry;
    if (value <= 6000) return imgNeutral;
    return imgHappy;
  };

  // Determine character label
  const getCharacterLabel = () => {
    if (value < THRESHOLD) return "Below threshold";
    if (value <= 2000) return "Not quite there...";
    if (value <= 6000) return "Getting better!";
    return "Perfect!";
  };

  const isAtThreshold = value < THRESHOLD;

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Character Display */}
      <div className="flex justify-center mb-12">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <img
            src={getCharacterImage()}
            alt="Character emotion"
            className="w-full h-full object-contain mix-blend-multiply"
          />
          <p className="text-center mt-4 text-gray-600">{getCharacterLabel()}</p>
        </div>
      </div>

      {/* Price Display */}
      <div className="text-center mb-8">
        <p className="text-6xl md:text-8xl mb-2">
          ${value.toLocaleString()}
        </p>
        <p className="text-xl md:text-2xl text-gray-600">[$250 increments]</p>
      </div>

      {/* Slider */}
      <div className="mb-12 px-4">
        <div className="relative">
          <input
            type="range"
            min={MIN_VALUE}
            max={MAX_VALUE}
            step={STEP}
            value={value}
            onChange={handleChange}
            className="pricing-slider w-full h-5 appearance-none bg-transparent cursor-pointer"
            style={{
              background: value < THRESHOLD
                ? `linear-gradient(to right, 
                    #000 0%, 
                    #000 ${percentage}%, 
                    #ccc ${percentage}%, 
                    #ccc ${THRESHOLD_POSITION}%,
                    transparent ${THRESHOLD_POSITION}%, 
                    transparent 100%),
                    linear-gradient(to right, 
                    transparent 0%,
                    transparent ${THRESHOLD_POSITION}%,
                    #FFA500 ${THRESHOLD_POSITION}%, 
                    #FFD700, #90EE90, #20B2AA, #4169E1, #9370DB, #BA55D3)`
                : `linear-gradient(to right, 
                    #000 0%, 
                    #000 ${THRESHOLD_POSITION}%, 
                    transparent ${THRESHOLD_POSITION}%, 
                    transparent 100%),
                    linear-gradient(to right, 
                    transparent 0%,
                    transparent ${THRESHOLD_POSITION}%,
                    #FFA500 ${THRESHOLD_POSITION}%, 
                    #FFA500 ${percentage}%, 
                    transparent ${percentage}%, 
                    transparent 100%),
                    linear-gradient(to right, 
                    transparent 0%,
                    transparent ${THRESHOLD_POSITION}%,
                    #FFA500 ${THRESHOLD_POSITION}%, 
                    #FFD700, #90EE90, #20B2AA, #4169E1, #9370DB, #BA55D3)`
            }}
          />
          
          {/* Start marker */}
          <div className="absolute -top-1 left-0 w-7 h-7 rounded-full border-[6px] border-black bg-[#fcfaf5] pointer-events-none" />
          
          {/* Threshold marker at 30% */}
          <div className="absolute -top-1 w-7 h-7 rounded-full border-[6px] border-[#FFA500] bg-[#fcfaf5] pointer-events-none" style={{ left: `calc(${THRESHOLD_POSITION}% - 14px)` }} />
          
          {/* End marker */}
          <div className="absolute -top-1 right-0 w-7 h-7 rounded-full border-[6px] border-[#815CE7] bg-[#fcfaf5] pointer-events-none" />
        </div>

        {/* Labels */}
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>$0</span>
          <span style={{ position: 'absolute', left: `${THRESHOLD_POSITION}%`, transform: 'translateX(-50%)' }}>$1,000</span>
          <span>$10,000</span>
        </div>
      </div>

      {/* Explainer Text */}
      <div className="grid md:grid-cols-2 gap-8 px-4">
        <div className={`p-6 rounded-lg transition-all ${isAtThreshold ? 'bg-black/5 ring-2 ring-black/20' : 'opacity-50'}`}>
          <p className="text-lg md:text-xl mb-4">
            Below $1,000: Basic support tier. Limited capacity and availability.
          </p>
          <div>
            <p className="mb-1">Headcount</p>
            <p className="text-gray-600">typically 1-3 people</p>
          </div>
        </div>

        <div className={`p-6 rounded-lg transition-all ${!isAtThreshold ? 'bg-purple-50 ring-2 ring-purple-200' : 'opacity-50'}`}>
          <p className="text-lg md:text-xl mb-4">
            $1,000+: Full service tier. We live in your environment, solve problems all day, create systems, ERPs, AI implementations, Machine learning...
          </p>
          <div>
            <p className="mb-1">Headcount</p>
            <p className="text-gray-600">5+ people in your company</p>
          </div>
        </div>
      </div>
    </div>
  );
}
