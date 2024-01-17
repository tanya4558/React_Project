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
                <h1 className=" text-blue-600 text-center font-semibold px-4 py-8 text-4xl">{`Contact Us `}</h1>
                <div className="m-2 mx-4">
                    <p className="text-m">
                        
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
                              

        </main>
    );
}
