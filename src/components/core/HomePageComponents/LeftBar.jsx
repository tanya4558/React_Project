"use client";
import { Search } from "lucide-react";
import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { LeftNavOptions } from "@/data/LeftNavBarData";
import { VerticalBarChart } from "../Chart Cmponent/VerticalBarChart";
import { StackedBarChart } from "../Chart Cmponent/StackedBarChart";
import { DonutChart } from "../Chart Cmponent/DonutChart";
import { PolarAreaChart } from "../Chart Cmponent/PolarAreaChart";
import { RadarChart } from "../Chart Cmponent/RadarChart";
import { ChatEvent } from "../Chart Cmponent/ChartEvents";

const componentMap = {
  StackedBarChart: { component: StackedBarChart, zIndex: 1 },
  VerticalBarChart: { component: VerticalBarChart, zIndex: 1 },
  DonutChart: { component: DonutChart, zIndex: 1 },
  PolarAreaChart: { component: PolarAreaChart, zIndex: 1 },
  RadarChart: { component: RadarChart, zIndex: 1 },
  ChatEvent: { component: ChatEvent, zIndex: 1 },
};
export default function LeftBar({ leftBarStatus }) {
  const [tabData, setTabData] = useState([]);
 
  useEffect(() => {
    const fetchTabDataFromApi = async () => {
      try {
        //const response = await fetch("your-api-endpoint");
        const data = [
          {
            "tabName": "Forecast",
            "options": [
              { "title": "Agra", "component": <></> },
              { "title": "Ahirwalia", "component": <></> },
              { "title": "Allahabad", "component": <></> },
              { "title": "Ankinghat", "component": <></> },
              { "title": "Araria", "component": <></> },
              { "title": "Auraiya", "component": <></> },
              { "title": "Ayodhya", "component": <></> },
              { "title": "Ballia", "component": <></> },
              { "title": "Balrampur", "component": <></> },
              { "title": "Baltara", "component": <></> },
              { "title": "Banda", "component": <></> },
              { "title": "Bansi", "component": <></> },
              { "title": "Bareilly", "component": <></> },
              { "title": "Basua", "component": <></> },
              { "title": "Benibad", "component": <></> },
              { "title": "Bhagaplur", "component": <></> },
              { "title": "Birdghat", "component": <></> },
              { "title": "Buxar", "component": <></> },
              { "title": "Chatia", "component": <></> },
              { "title": "Chhapra", "component": <></> },
              { "title": "Chillaghat", "component": <></> },
              { "title": "D.R.B", "component": <></> },
              { "title": "Dabri", "component": <></> },
              { "title": "Dalmau", "component": <></> },
              { "title": "Darauli", "component": <></> },
              { "title": "Dhansa", "component": <></> },
              { "title": "Dhengbridge", "component": <></> },
              { "title": "Dhengraghat", "component": <></> },
              { "title": "Dholpur", "component": <></> },
              { "title": "Dighaghat", "component": <></> },
              { "title": "Dumariaghat", "component": <></> },
              { "title": "Ekmighat", "component": <></> },
              { "title": "Elginbridge", "component": <></> },
              { "title": "Etawah", "component": <></> },
              { "title": "Farakka", "component": <></> },
              { "title": "Fatehgarh", "component": <></> },
              { "title": "Gandhighat", "component": <></> },
              { "title": "Ganganagar", "component": <></> },
              { "title": "Gangpur Siswan", "component": <></> },
              { "title": "Garhmukteshwar", "component": <></> },
              { "title": "Ghazipur", "component": <></> },
              { "title": "Gheropara", "component": <></> },
              { "title": "Hajipur", "component": <></> },
              { "title": "Hamirpur", "component": <></> },
              { "title": "Haridwar", "component": <></> },
              { "title": "Harinkhola", "component": <></> },
              { "title": "Hathidah", "component": <></> },
              { "title": "Hayaghat", "component": <></> },
              { "title": "Inderpuri", "component": <></> },
              { "title": "Jainagar", "component": <></> },
              { "title": "Jaunpur", "component": <></> },
              { "title": "Jhanjharpur", "component": <></> },
              { "title": "Jhawa", "component": <></> },
              { "title": "Kachla bridge", "component": <></> },
              { "title": "Kahalgaon", "component": <></> },
              { "title": "Kakardhari", "component": <></> },
              { "title": "Kalpi", "component": <></> },
              { "title": "Kamtaul", "component": <></> },
              { "title": "Kannauj", "component": <></> },
              { "title": "Kanpur", "component": <></> },
              { "title": "Karnal", "component": <></> },
              { "title": "Khadda", "component": <></> },
              { "title": "Khagaria", "component": <></> },
              { "title": "Koelwar", "component": <></> },
              { "title": "Kota city", "component": <></> },
              { "title": "Kursela", "component": <></> },
              { "title": "Lalbeghiaghat", "component": <></> },
              { "title": "Lucknow", "component": <></> },
              { "title": "Maner", "component": <></> },
              { "title": "Mathura", "component": <></> },
              { "title": "Mawi", "component": <></> },
              { "title": "Mirzapur", "component": <></> },
              { "title": "Mohana", "component": <></> },
              { "title": "Mohanpur", "component": <></> },
              { "title": "Moradabad", "component": <></> },
              { "title": "Munger", "component": <></> },
              { "title": "Naini", "component": <></> },
              { "title": "Narayanpur", "component": <></> },
              { "title": "Paonta Sahib", "component": <></> },
              { "title": "Phaphamau", "component": <></> },
              { "title": "Raebareli", "component": <></> },
              { "title": "Rewaghat", "component": <></> },
              { "title": "Rishikesh", "component": <></> },
              { "title": "Rosera", "component": <></> },
              { "title": "Runisaidpur", "component": <></> },
              { "title": "Sahibganj", "component": <></> },
              { "title": "Sahijina", "component": <></> },
              { "title": "Samastipur", "component": <></> },
              { "title": "Sikandarpur", "component": <></> },
              { "title": "Sonebarsha", "component": <></> },
              { "title": "Srinagar", "component": <></> },
              { "title": "Sripalpur", "component": <></> },
              { "title": "Taibpur", "component": <></> },
              { "title": "Turtipar", "component": <></> },
              { "title": "Varanasi", "component": <></> }

            ]
          },
          {
            "tabName": "Observed Sites",
            "options": [
              { "title": "Agra", "component": <></> },
              { "title": "Ahirwalia", "component": <></> },
              { "title": "Allahabad", "component": <></> },
              { "title": "Ankinghat", "component": <></> }
            ]
          }
        ]
        
        setTabData(data);
      } catch (error) {
        console.error("Error fetching tab data:", error);
      }
    };
 
    fetchTabDataFromApi();
  }, []);
 
  const openModal = (title, component) => {
    console.log(`Open modal for ${title}`);
    // Implement your modal logic using the selected component
  };

  return (
    <div
      className={`${
        leftBarStatus ? "w-[300px]" : "hidden w-0"
      } transition-all duration-200  bg-white-100/50 h-[calc(100vh-134px)] z-10 p-4 overflow-y-auto overflow-x-hidden relative shadow-[5px_10px_5px] shadow-[#12121210]`}
    >
      {/* Search Bar */}
      <div className="border border-primaryBlue/10 rounded h-8  flex p-3 py-4 text-sm items-center gap-2 text-[#12121270]">
        <Search size={15} />

        <div>
          <input
            className="placeholder:text-[#12121270] flex-1 w-[220px] outline-none bg-transparent"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Accordion */}
      <div className="pl-8 pt-3 text-sm">
      <Accordion type="multiple"  className="text-black/80 collapsible" >
          {tabData.map((tab, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-semibold" onClick={() => openModal(tab.title, componentMap[tab.component])}>{tab.tabName}</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc flex flex-col gap-y-2 text-sm">
                  {tab.options.map((option, optionIndex) => (
                    <li className="ml-5" key={optionIndex}>
                      {/* Modal Content Start */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="hover:underline transition-all duration-200 cursor-pointer">
                            {option.title}
                          </div>
                        </DialogTrigger>
                        <DialogContent className="">
                          <DialogHeader>
                            <DialogTitle>{tab.tabName} - {option.title}</DialogTitle>
                            <DialogDescription>{option.component}</DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                      {/* Modal Content End */}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
