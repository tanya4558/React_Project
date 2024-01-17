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
                <h1 className=" text-blue-600 text-center font-semibold px-4 py-8 text-4xl">Forecast Tables - Water Level</h1>
                <div className="m-2 mx-4 border rounded-lg">
                    <Table className="border rounded-lg">
                        <TableHeader className="rounded-lg">
                            <TableRow>
                                <TableHead className="font-semibold text-base text-[#121212]">
                                    State
                                </TableHead>
                                <TableHead className="font-semibold text-base text-[#121212]">
                                    Districe
                                </TableHead>
                                <TableHead className="font-semibold text-base text-[#121212]">
                                    Tehsil
                                </TableHead>
                                <TableHead className="font-semibold text-base text-[#121212]">
                                    Village
                                </TableHead>
                                <TableHead className="font-semibold text-base text-[#121212]">
                                    Depth
                                </TableHead>
                                <TableHead className="font-semibold text-base text-[#121212]">
                                    Arrival Time
                                </TableHead>
                                <TableHead className="font-semibold text-base text-[#121212]">
                                    Duration
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Array(10)
                                .fill(0)
                                .map((ele, i) => {
                                    return (
                                        <TableRow key={i}>
                                            <TableCell className="py-2">State</TableCell>
                                            <TableCell className="py-2">Districe</TableCell>
                                            <TableCell className="py-2">Tehsil</TableCell>
                                            <TableCell className="py-2">Village</TableCell>
                                            <TableCell className="py-2">Depth</TableCell>
                                            <TableCell className="py-2">Arrival Time</TableCell>
                                            <TableCell className="py-2">Duration</TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div class="grid grid-cols-2 pt-20">
                <div class="flex flex-col">
                    <div class="m-1.5">
                        <div class="p-1.5 min-w-full inline-block align-middle">
                            <table class="min-w-full divide-y border-collapse border border-slate-400 divide-gray-200 dark:divide-gray-700">
                                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-800 border-slate-400">Normal Water Level</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 border-slate-400"></td>
                                    </tr>

                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 border-slate-400">Above Warning Level</td>
                                        <td class="bg-yellow-300 px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-800 border-slate-400"></td>

                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 border-slate-400">Above Danger Level</td>
                                        <td class="bg-pink-600 px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-800 border-slate-400"></td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="px-8 pt-4">
                    <p>Water level forcast based on IMD Rainfall Forcast as on 19 October, 2022</p></div>
                </div>
            
                <div className="pt-0">
                <p>Disclaimer: Forcast is subject to uncertainity due to Rainfall forcasts.</p>
                </div>                   

        </main>
    );
}
