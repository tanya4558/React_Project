"use client";
import ContentBar from "@/components/core/HomePageComponents";
import LeftBar from "@/components/core/HomePageComponents/LeftBar";
import RightBar from "@/components/core/HomePageComponents/RightBar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [leftBarOpen, setLeftBarOpen] = useState(true);
  const [rightBarOpen, setRightBarOpen] = useState(true);
  return (
    <main className="flex justify-between">
      <LeftBar leftBarStatus={leftBarOpen} />
      <ContentBar
        setLeftBarOpen={setLeftBarOpen}
        setRightBarOpen={setRightBarOpen}
        leftBarStatus={leftBarOpen}
        rightBarStatus={rightBarOpen}
      />
      <RightBar rightBarStatus={rightBarOpen} />
    </main>
  );
}
