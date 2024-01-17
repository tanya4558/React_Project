"use client";
import ContentBar from "@/components/core/HomePageComponents";
import LeftBar from "@/components/core/HomePageComponents/LeftBar";
import RightBar from "@/components/core/HomePageComponents/RightBar";
import Image from "next/image";
import { useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function Home() {

    return (
        <main className="container mx-auto py-8">
            {/* <LeftBar leftBarStatus={leftBarOpen} /> */}
            {/* <ContentBar
        // setLeftBarOpen={setLeftBarOpen}
        // setRightBarOpen={setRightBarOpen}
        // leftBarStatus={leftBarOpen}
        // rightBarStatus={rightBarOpen}
      /> */}
            {/* <RightBar rightBarStatus={rightBarOpen} /> */}

            <div className="pt-8">
                <h1 className=" text-blue-600 text-center font-semibold px-4 py-8 text-4xl">{`Inundation `}</h1>
                <div className="m-2 mx-4">
                    <p className="text-m">
                        
                Inundation refers to the process of flooding or being overwhelmed by an excessive amount of water. 
                It typically involves the overflow of water onto land that is normally dry. Inundation can result from various causes such as heavy rainfall, overflowing rivers or streams, 
                storm surges, melting snow, or the breaching of levees or dams. This overflow of water can lead to widespread damage to properties, infrastructure, and natural habitats, as well as pose risks to human life and safety.
                    </p>
                </div>
            </div>
                              

        </main>
    );
}
