"use client";
import React,{ useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

// Import Swiper CSS
import "swiper/css";
import "swiper/css/free-mode";
import FloodAlertCard from "./FloodAlertCard";
import { FloodAlertData } from "@/data/FloodAlertData";
import { Height } from "@mui/icons-material";

export default function RightBar({ rightBarStatus }) {
  const [floodAlertData, setFloodAlertData] = useState([]);
  const fetchFloodAlertData = async () => {
    try {
      //const response = await fetch("your-api-endpoint");
      const data =  [
        {
            title : "Agra",
            subTitle : "Yamuna",
            dataPoints : [
                {
                    data : "Today 6:00",
                    symbol : "green-circle"
                },
                {
                    data : "Today 12:00",
                    symbol : "green-circle"
                },
                {
                    data : "Today 18:00",
                    symbol : "green-circle"
                },
                {
                    data : "Today 00:00",
                    symbol : "green-circle"
                },
                {
                    data : "Tom 6:00",
                    symbol : "green-circle"
                },
                {
                    data : "Tom 12:00",
                    symbol : "green-circle"
                }
            ]
        },
        {
          title : "Auraiya",
          subTitle : "Yamuna",
          dataPoints : [
              {
                  data : "Today 6:00",
                  symbol : "green-circle"
              },
              {
                  data : "Today 12:00",
                  symbol : "green-circle"
              },
              {
                  data : "Today 18:00",
                  symbol : "green-circle"
              },
              {
                  data : "Today 00:00",
                  symbol : "green-circle"
              },
              {
                  data : "Tom 6:00",
                  symbol : "green-circle"
              },
              {
                  data : "Tom 12:00",
                  symbol : "green-circle"
              }
          ]
      },
      {
        title : "Chillaghat",
        subTitle : "Yamuna",
        dataPoints : [
            {
                data : "Today 6:00",
                symbol : "green-circle"
            },
            {
                data : "Today 12:00",
                symbol : "green-circle"
            },
            {
                data : "Today 18:00",
                symbol : "green-circle"
            },
            {
                data : "Today 00:00",
                symbol : "green-circle"
            },
            {
                data : "Tom 6:00",
                symbol : "green-circle"
            },
            {
                data : "Tom 12:00",
                symbol : "green-circle"
            }
        ]
    },
    {
      title : "D.R.B",
      subTitle : "Yamuna",
      dataPoints : [
          {
              data : "Today 6:00",
              symbol : "green-circle"
          },
          {
              data : "Today 12:00",
              symbol : "green-circle"
          },
          {
              data : "Today 18:00",
              symbol : "green-circle"
          },
          {
              data : "Today 00:00",
              symbol : "green-circle"
          },
          {
              data : "Tom 6:00",
              symbol : "green-circle"
          },
          {
              data : "Tom 12:00",
              symbol : "green-circle"
          }
      ]
  },
  {
    title : "Etawah",
    subTitle : "Yamuna",
    dataPoints : [
        {
            data : "Today 6:00",
            symbol : "green-circle"
        },
        {
            data : "Today 12:00",
            symbol : "green-circle"
        },
        {
            data : "Today 18:00",
            symbol : "green-circle"
        },
        {
            data : "Today 00:00",
            symbol : "green-circle"
        },
        {
            data : "Tom 6:00",
            symbol : "green-circle"
        },
        {
            data : "Tom 12:00",
            symbol : "green-circle"
        }
    ]
},
{
  title : "Hamirpur",
  subTitle : "Yamuna",
  dataPoints : [
      {
          data : "Today 6:00",
          symbol : "green-circle"
      },
      {
          data : "Today 12:00",
          symbol : "green-circle"
      },
      {
          data : "Today 18:00",
          symbol : "green-circle"
      },
      {
          data : "Today 00:00",
          symbol : "green-circle"
      },
      {
          data : "Tom 6:00",
          symbol : "green-circle"
      },
      {
          data : "Tom 12:00",
          symbol : "green-circle"
      }
  ]
},
{
  title : "Kalpi",
  subTitle : "Yamuna",
  dataPoints : [
      {
          data : "Today 6:00",
          symbol : "green-circle"
      },
      {
          data : "Today 12:00",
          symbol : "green-circle"
      },
      {
          data : "Today 18:00",
          symbol : "green-circle"
      },
      {
          data : "Today 00:00",
          symbol : "green-circle"
      },
      {
          data : "Tom 6:00",
          symbol : "green-circle"
      },
      {
          data : "Tom 12:00",
          symbol : "green-circle"
      }
  ]
},
{
  title : "Karnal",
  subTitle : "Yamuna",
  dataPoints : [
      {
          data : "Today 6:00",
          symbol : "green-circle"
      },
      {
          data : "Today 12:00",
          symbol : "green-circle"
      },
      {
          data : "Today 18:00",
          symbol : "green-circle"
      },
      {
          data : "Today 00:00",
          symbol : "green-circle"
      },
      {
          data : "Tom 6:00",
          symbol : "green-circle"
      },
      {
          data : "Tom 12:00",
          symbol : "green-circle"
      }
  ]
},
{
  title : "Mathura",
  subTitle : "Yamuna",
  dataPoints : [
      {
          data : "Today 6:00",
          symbol : "green-circle"
      },
      {
          data : "Today 12:00",
          symbol : "green-circle"
      },
      {
          data : "Today 18:00",
          symbol : "green-circle"
      },
      {
          data : "Today 00:00",
          symbol : "green-circle"
      },
      {
          data : "Tom 6:00",
          symbol : "green-circle"
      },
      {
          data : "Tom 12:00",
          symbol : "green-circle"
      }
  ]
},
{
  title : "Mawi",
  subTitle : "Yamuna",
  dataPoints : [
      {
          data : "Today 6:00",
          symbol : "green-circle"
      },
      {
          data : "Today 12:00",
          symbol : "green-circle"
      },
      {
          data : "Today 18:00",
          symbol : "green-circle"
      },
      {
          data : "Today 00:00",
          symbol : "green-circle"
      },
      {
          data : "Tom 6:00",
          symbol : "green-circle"
      },
      {
          data : "Tom 12:00",
          symbol : "green-circle"
      }
  ]
},
{
  title : "Naini",
  subTitle : "Yamuna",
  dataPoints : [
      {
          data : "Today 6:00",
          symbol : "green-circle"
      },
      {
          data : "Today 12:00",
          symbol : "green-circle"
      },
      {
          data : "Today 18:00",
          symbol : "green-circle"
      },
      {
          data : "Today 00:00",
          symbol : "green-circle"
      },
      {
          data : "Tom 6:00",
          symbol : "green-circle"
      },
      {
          data : "Tom 12:00",
          symbol : "green-circle"
      }
  ]
},
{
  title : "Paonta Sahib",
  subTitle : "Yamuna",
  dataPoints : [
      {
          data : "Today 6:00",
          symbol : "green-circle"
      },
      {
          data : "Today 12:00",
          symbol : "green-circle"
      },
      {
          data : "Today 18:00",
          symbol : "green-circle"
      },
      {
          data : "Today 00:00",
          symbol : "green-circle"
      },
      {
          data : "Tom 6:00",
          symbol : "green-circle"
      },
      {
          data : "Tom 12:00",
          symbol : "green-circle"
      }
  ]
}
      ]
      //await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching flood alert data:", error);
      return [];
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFloodAlertData();
      setFloodAlertData(data);
    };
 
    fetchData();
  }, []);
  return (
    <div className={`${rightBarStatus ? "w-[350px]" : "hidden w-0"} transition-all duration-200 bg-white-100/50 h-[calc(120vh-134px)] z-10 shadow-[-5px_10px_5px] shadow-[#12121210]`}>
      <h1 className="font-semibold px-4 pt-4">Flood Alert </h1>
      <div className="text-white-100 mt-[10px]">
        <Swiper
          direction={"vertical"}
          slidesPerView={5}
          loop={true}
          spaceBetween={30}
          freeMode={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: true }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper h-[calc(120vh-200px)]"
        >
          {floodAlertData.map((floodData, i) => (
            <SwiperSlide key={i}>
              <FloodAlertCard details={floodData} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
