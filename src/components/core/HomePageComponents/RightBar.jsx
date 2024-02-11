"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import FloodAlertCard from "./FloodAlertCard";

export default function RightBar({ rightBarStatus }) {
  const [floodAlertData, setFloodAlertData] = useState([]);
  const [error, setError] = useState(null);

  const fetchFloodAlertData = async () => {
    try {
      // Simulating API call with actual data
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ data: getSimulatedData() }), 1000)
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching flood alert data:", error);
      setError("Error fetching flood alert data");
      return [];
    }
  };

  // Function to simulate data
  const getSimulatedData = () => {
    return [
      {
        title: "Damodar",
        subTitle: "Konar Dam",
        dataPoints: [
          { data: "12/06", time: "08:00 AM", symbol: "red-circle" },
          { data: "14/06", time: "08:00 AM", symbol: "red-circle" },
          { data: "16/06", time: "08:00 AM", symbol: "red-circle" },
          { data: "12/02", time: "08:00 AM", symbol: "red-circle" },
          { data: "15/04", time: "08:00 AM", symbol: "red-circle" },
          { data: "17/06", time: "08:00 AM", symbol: "red-circle" },
        ],
      },
    ];
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFloodAlertData();
      setFloodAlertData(data);
    };

    fetchData();
  }, []);

  return (
    <div className={`${rightBarStatus ? "w-[350px]" : "hidden w-0"} transition-all duration-200 bg-white-100/50 h-[calc(100vh-134px)] z-10 shadow-[-5px_10px_5px] shadow-[#12121210]`}>
      <h1 className="font-semibold px-4 pt-4">Flood Alert</h1>
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="text-white-100 mt-[10px]">
          <Swiper
            direction={"vertical"}
            slidesPerView={5}
            loop={true}
            spaceBetween={30}
            freeMode={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper h-[calc(100vh-200px)]"
          >
            {floodAlertData.map((floodData, i) => (
              <SwiperSlide key={i}>
                <FloodAlertCard details={floodData}>
                <div className="flood-alert-container">
                  <h2>{floodData.title}</h2>
                  <h3>{floodData.subTitle}</h3>
                  <div className="data-points-container">
                    {floodData.dataPoints.map((point, j) => (
                      <div key={j} className="data-point-item">
                        <p>Data: {point.data}</p>
                        <p>Time: {point.time}</p>
                        <p>Symbol: {point.symbol}</p>
                      </div>
                    ))}
                  </div>
                </div>
                </FloodAlertCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
