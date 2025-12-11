import { useState } from "react";
import PricingSlider from "./components/PricingSlider";

export default function App() {
  return (
    <div className="bg-[#fcfaf5] min-h-screen flex items-center justify-center p-4">
      <PricingSlider />
    </div>
  );
}
