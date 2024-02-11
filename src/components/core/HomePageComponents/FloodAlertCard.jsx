import { Circle, Triangle } from "lucide-react";
import React from "react";

const SymbolTable = {
  "red-circle": (
    <Circle size={18} className="fill-primaryRed" color="rgba(221,83,90)" />
  ),
  "red-triangle": (
    <Triangle size={18} className="fill-primaryRed" color="rgba(221,83,90)" />
  ),
  "green-circle": (
    <Circle size={18} className="fill-primaryGreen" color="rgba(100,179,72)" />
  ),
  "green-triangle": (
    <Triangle
      size={18}
      className="fill-primaryGreen"
      color="rgba(100,179,72)"
    />
  ),
};

function FloodAlertCard({ details }) {
  const { title, subTitle, dataPoints } = details;

  return (
    // <div className="border border-primaryBlue/5 rounded-md text-black p-2 px-4 text-sm bg-white-800 shadow-[0px_0px_5px] shadow-[#12121240] mx-4 my-1">
    //   <h2 className="font-medium" style={{ backgroundColor: '#87CEEB', color: '#000000' }}>
    //     {title}
    //   </h2>
    //   <h3
    //     className="font-medium pt-2 pb-1 border-b border-primaryBlue/10"
    //     style={{ backgroundColor: '	#FFA500', color: '#000000' }}
    //   >
    //     {subTitle}
    //   </h3>

    //   <div className="flex justify-between pt-1 font-medium" style={{ backgroundColor: '#FFE4B5', color: 'black' }}>
    //     {dataPoints.map((item, i) => (
    //       <div key={i} className="flex flex-col items-center gap-2">
    //         <p>{item.data}</p>
    //         <p>{item.time}</p>
    //         {SymbolTable[item.symbol]}
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="flood-alert-box">
    <div className="border border-primaryBlue/5 rounded-md text-black p-2 px-4 text-sm bg-white-800 shadow-[0px_0px_5px] shadow-[#12121240] mx-4 my-1">
      <h2 className="font-medium" style={{ backgroundColor: '#87CEEB', color: '#000000',border: '0.5px solid #000000' }}>
        {title}
      </h2>
      <h3
        className="font-medium pt-2 pb-1 border-b border-primaryBlue/10"
        style={{ backgroundColor: '#FFA500', color: '#000000',border: '0.5px solid #000000' }}
      >
        {subTitle}
      </h3>

      <div className="flex justify-between pt-1 font-medium" style={{ backgroundColor: '#FFE4B5', color: 'black', border: '0.5px solid #000000' }}>
        {dataPoints.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <p>{item.data}</p>
            <p>{item.time}</p>
            {SymbolTable[item.symbol]}
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default FloodAlertCard;

