"use client";
import { ChevronLeft, ChevronRight, ChevronRightCircle } from "lucide-react";
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Map from "@/components/map/map";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import L from "leaflet"
import "leaflet/dist/leaflet.css"
//import forecastingLocations from '@/data/forecastingLocations.json'

//import { ShapeFile } from 'ShapeFile';
export default function ContentBar({
  setLeftBarOpen,
  setRightBarOpen,
  leftBarStatus,
  rightBarStatus,
}) {
  const handleExportToExcel = () => {
    const ws = xlsx.utils.json_to_sheet(tableData);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "Sheet 1");
    xlsx.writeFile(wb, "grid-data.xlsx");
  };
  
    const [filter, setFilter] = useState('');
    const [fullScreen, setFullScreen] = useState(false);
    const [mapFullScreen, setMapFullScreen] = useState(false); 
  
    const data = Array(10).fill(0).map((ele, i) => ({
      state: 'State',
      district: 'District',
      tehsil: 'Tehsil',
      village: 'Village',
      depth: 'Depth',
      arrivalTime: 'Arrival Time',
      duration: 'Duration',
    }));
  
    const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value
        .toLowerCase()
        .split(' ')
        .some((word) => word.startsWith(filter.toLowerCase()))
    )
  );
  const columnWidths = {
    state: '100px',
    district: '120px',
    tehsil: '120px',
    village: '120px',
    depth: '80px',
    arrivalTime: '120px',
    duration: '80px',
  };

  const tableStyle = {
    width: fullScreen ? '100vw' : '100%',
    height: fullScreen ? '100vh' : 'auto',
  };
  const toggleFullScreen = () => {
    setFullScreen(!fullScreen);
    setMapFullScreen(false); // Ensure map full-screen is turned off when data grid is made full-screen
  };

  const toggleMapFullScreen = () => {
    setMapFullScreen(!mapFullScreen);
    setFullScreen(false); // Ensure data grid full-screen is turned off when map is made full-screen
  };
  return (
    <div
      className={`relative ${!leftBarStatus && "w-[calc(100vw-650px+300px)]"} ${!rightBarStatus && "w-[calc(100vw-650px+350px)]"
        } ${!leftBarStatus && !rightBarStatus && "w-screen"
        } w-[calc(100vw-650px)] h-[calc(100vh-134px)] overflow-y-auto overflow-hidden`}
    >
      <Map />
      <div className="minimize-panel"
        title={leftBarStatus ? "Collapse" : "Expand"}
        onClick={() => setLeftBarOpen(!leftBarStatus)}

      >
        <ChevronLeft className={`rotate-${leftBarStatus ? 0 : 180}`} size={20} strokeWidth={3} />
      </div>
      <div className={`minimize-panel right-panel`} title={rightBarStatus ? "Collapse" : "Expand"} onClick={() => setRightBarOpen(!rightBarStatus)}>
        <ChevronRight className={`rotate-${rightBarStatus ? 0 : 180}`} size={20} strokeWidth={3} />
      </div>

      <h1 className="font-semibold px-4 pt-4 text-lg">{`Flood Impact Area(>40% inundation): `}</h1>

      <div className="table-container m-2 mx-4 border rounded-lg">
      <div>
          <input
            type="text"
            placeholder="Filter data..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <button onClick={toggleFullScreen}>
            {fullScreen ? 'Minimize' : 'Full Screen'}
          </button>
        </div>
        <table className="border rounded-lg" style={tableStyle}>
          <thead className="rounded-lg">
            <tr>
              <th style={{ width: columnWidths.state }}>State</th>
              <th style={{ width: columnWidths.district }}>District</th>
              <th style={{ width: columnWidths.tehsil }}>Tehsil</th>
              <th style={{ width: columnWidths.village }}>Village</th>
              <th style={{ width: columnWidths.depth }}>Depth</th>
              <th style={{ width: columnWidths.arrivalTime }}>Arrival Time</th>
              <th style={{ width: columnWidths.duration }}>Duration</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{item.state}</td>
                  <td>{item.district}</td>
                  <td>{item.tehsil}</td>
                  <td>{item.village}</td>
                  <td>{item.depth}</td>
                  <td>{item.arrivalTime}</td>
                  <td>{item.duration}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No matching data</td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    
    </div>

  );
}

