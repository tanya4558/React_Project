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
              { "title": "Agra", "component": <StackedBarChart></> },
              { "title": "Ahirwalia", "component": <StackedBarChart></> },
              { "title": "Allahabad", "component": <StackedBarChart></> },
              { "title": "Ankinghat", "component": <StackedBarChart></> },
              { "title": "Araria", "component": <StackedBarChart></> },
              { "title": "Auraiya", "component": <StackedBarChart></> },
              { "title": "Ayodhya", "component": <StackedBarChart></> },
              { "title": "Ballia", "component": <StackedBarChart></> },
              { "title": "Balrampur", "component": <StackedBarChart></> },
              { "title": "Baltara", "component": <StackedBarChart></> },
              { "title": "Banda", "component": <StackedBarChart></> },
              { "title": "Bansi", "component": <StackedBarChart></> },
              { "title": "Bareilly", "component": <StackedBarChart></> },
              { "title": "Basua", "component": <StackedBarChart></> },
              { "title": "Benibad", "component": <StackedBarChart></> },
              { "title": "Bhagaplur", "component": <StackedBarChart></> },
              { "title": "Birdghat", "component": <StackedBarChart></> },
              { "title": "Buxar", "component": <StackedBarChart></> },
              { "title": "Chatia", "component": <StackedBarChart></> },
              { "title": "Chhapra", "component": <StackedBarChart></> },
              { "title": "Chillaghat", "component": <StackedBarChart></> },
              { "title": "D.R.B", "component": <StackedBarChart></> },
              { "title": "Dabri", "component": <StackedBarChart></> },
              { "title": "Dalmau", "component": <StackedBarChart></> },
              { "title": "Darauli", "component": <StackedBarChart></> },
              { "title": "Dhansa", "component": <StackedBarChart></> },
              { "title": "Dhengbridge", "component": <StackedBarChart></> },
              { "title": "Dhengraghat", "component": <StackedBarChart></> },
              { "title": "Dholpur", "component": <StackedBarChart></> },
              { "title": "Dighaghat", "component": <StackedBarChart></> },
              { "title": "Dumariaghat", "component": <StackedBarChart></> },
              { "title": "Ekmighat", "component": <StackedBarChart></> },
              { "title": "Elginbridge", "component": <StackedBarChart></> },
              { "title": "Etawah", "component": <StackedBarChart></> },
              { "title": "Farakka", "component": <StackedBarChart></> },
              { "title": "Fatehgarh", "component": <StackedBarChart></> },
              { "title": "Gandhighat", "component": <StackedBarChart></> },
              { "title": "Ganganagar", "component": <StackedBarChart></> },
              { "title": "Gangpur Siswan", "component": <StackedBarChart></> },
              { "title": "Garhmukteshwar", "component": <StackedBarChart></> },
              { "title": "Ghazipur", "component": <StackedBarChart></> },
              { "title": "Gheropara", "component": <StackedBarChart></> },
              { "title": "Hajipur", "component": <StackedBarChart></> },
              { "title": "Hamirpur", "component": <StackedBarChart></> },
              { "title": "Haridwar", "component": <StackedBarChart></> },
              { "title": "Harinkhola", "component": <StackedBarChart></> },
              { "title": "Hathidah", "component": <StackedBarChart></> },
              { "title": "Hayaghat", "component": <StackedBarChart></> },
              { "title": "Inderpuri", "component": <StackedBarChart></> },
              { "title": "Jainagar", "component": <StackedBarChart></> },
              { "title": "Jaunpur", "component": <StackedBarChart></> },
              { "title": "Jhanjharpur", "component": <StackedBarChart></> },
              { "title": "Jhawa", "component": <StackedBarChart></> },
              { "title": "Kachla bridge", "component": <StackedBarChart></> },
              { "title": "Kahalgaon", "component": <StackedBarChart></> },
              { "title": "Kakardhari", "component": <StackedBarChart></> },
              { "title": "Kalpi", "component": <StackedBarChart></> },
              { "title": "Kamtaul", "component": <StackedBarChart></> },
              { "title": "Kannauj", "component": <StackedBarChart></> },
              { "title": "Kanpur", "component": <StackedBarChart></> },
              { "title": "Karnal", "component": <StackedBarChart></> },
              { "title": "Khadda", "component": <StackedBarChart></> },
              { "title": "Khagaria", "component": <StackedBarChart></> },
              { "title": "Koelwar", "component": <StackedBarChart></> },
              { "title": "Kota city", "component": <StackedBarChart></> },
              { "title": "Kursela", "component": <StackedBarChart></> },
              { "title": "Lalbeghiaghat", "component": <StackedBarChart></> },
              { "title": "Lucknow", "component": <StackedBarChart></> },
              { "title": "Maner", "component": <StackedBarChart></> },
              { "title": "Mathura", "component": <StackedBarChart></> },
              { "title": "Mawi", "component": <StackedBarChart></> },
              { "title": "Mirzapur", "component": <StackedBarChart></> },
              { "title": "Mohana", "component": <StackedBarChart></> },
              { "title": "Mohanpur", "component": <StackedBarChart></> },
              { "title": "Moradabad", "component": <StackedBarChart></> },
              { "title": "Munger", "component": <StackedBarChart></> },
              { "title": "Naini", "component": <StackedBarChart></> },
              { "title": "Narayanpur", "component": <StackedBarChart></> },
              { "title": "Paonta Sahib", "component": <StackedBarChart></> },
              { "title": "Phaphamau", "component": <StackedBarChart></> },
              { "title": "Raebareli", "component": <StackedBarChart></> },
              { "title": "Rewaghat", "component": <StackedBarChart></> },
              { "title": "Rishikesh", "component": <StackedBarChart></> },
              { "title": "Rosera", "component": <StackedBarChart></> },
              { "title": "Runisaidpur", "component": <StackedBarChart></> },
              { "title": "Sahibganj", "component": <StackedBarChart></> },
              { "title": "Sahijina", "component": <StackedBarChart></> },
              { "title": "Samastipur", "component": <StackedBarChart></> },
              { "title": "Sikandarpur", "component": <StackedBarChart></> },
              { "title": "Sonebarsha", "component": <StackedBarChart></> },
              { "title": "Srinagar", "component": <StackedBarChart></> },
              { "title": "Sripalpur", "component": <StackedBarChart></> },
              { "title": "Taibpur", "component": <StackedBarChart></> },
              { "title": "Turtipar", "component": <StackedBarChart></> },
              { "title": "Varanasi", "component": <StackedBarChart></> }
            ]
          },
          {
            "tabName": "Observed Sites",
            "options": [
              { "title": "Agra", "component": <StackedBarChart></> },
              { "title": "Ahirwalia", "component": <StackedBarChart></> },
              { "title": "Allahabad", "component": <StackedBarChart></> },
              { "title": "Ankinghat", "component": <StackedBarChart></> }
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
      className={`${leftBarStatus ? "w-[300px]" : "hidden w-0"
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
        <Accordion type="multiple" className="text-black/80 collapsible" >
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
