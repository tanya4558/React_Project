"use client";
import { ChevronLeft, ChevronRight, ChevronRightCircle } from "lucide-react";
import React from "react";
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

  // const forecastingStationStyle = (feature) => {
  //   let mapStyle = {
  //       fillColor: getColor(feature.properties[dataScope.key]),
  //         weight: 1,
  //         opacity: 1,
  //         color: '#888',
  //         dashArray: '3',
  //         fillOpacity: 0.7
  //   };
  
  //   // if (hoveredCountry && feature.properties.iso_a3 === hoveredCountry.iso_a3) {
  //   //           mapStyle.color = '#444';
  //   //           mapStyle.weight = 2;
  //   // }
  
  //   return mapStyle;
  // };

  // const onEachForecastingStation = (feature, layer) => {
  //   layer.on({
  //         click: () => setSelectedStation(feature.properties)
  //   });
  // };

  // const setSelectedStation = (prop) => {



  // };


 
  return (
    <div
      className={`relative ${!leftBarStatus && "w-[calc(100vw-650px+300px)]"} ${
        !rightBarStatus && "w-[calc(100vw-650px+350px)]"
      } ${
        !leftBarStatus && !rightBarStatus && "w-screen"
      } w-[calc(100vw-650px)] h-[calc(100vh-134px)] overflow-y-auto overflow-hidden`}
    >
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627771.3933752966!2d80.36868693152962!3d27.383662455453962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399f21d52693d311%3A0x4d7299c262866519!2sGanges!5e0!3m2!1sen!2sin!4v1695900164721!5m2!1sen!2sin"
        className={`${!leftBarStatus && "w-[calc(100vw-650px+300px)]"} ${
          !rightBarStatus && "w-[calc(100vw-650px+350px)]"
        } ${
          !leftBarStatus && !rightBarStatus && "w-screen"
        } w-[calc(100vw-650px)]`}
        height="650"
        loading="lazy"
      ></iframe> */}

      {/* <div className="map-container" style={{ position: 'relative', zIndex: 0 }}>
      { <Map/> }

      </div> */}
      <Map/>
      {/* Minimize Left Panel */}
      <div className="minimize-panel"
        title={leftBarStatus ? "Collapse" : "Expand"}
        onClick={() => setLeftBarOpen(!leftBarStatus)}
        
      >
        <ChevronLeft className={`rotate-${leftBarStatus ? 0 : 180}`} size={20} strokeWidth={3} />
      </div>

      {/* Minimize Right Panel */}
      <div className={`minimize-panel right-panel`} title={rightBarStatus ? "Collapse" : "Expand"} onClick={() => setRightBarOpen(!rightBarStatus)}>
    <ChevronRight className={`rotate-${rightBarStatus ? 0 : 180}`} size={20} strokeWidth={3} />
  </div>

      <h1 className="font-semibold px-4 pt-4 text-lg">{`Flood Impact Area(>40% inundation): `}</h1>

      <div className="table-container m-2 mx-4 border rounded-lg">
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
      <style jsx>{`
  .map-container {
    flex: 1;
    width: 100%;
    height: 300px;
    /* Add any additional styling for the map container */
  }
 
  .minimize-panel {
    /* Add styles for the minimize panel buttons */
  }
 
  .right-panel {
    right: ${rightBarStatus ? "350px" : "0"};
  }
 
  .table-container {
    /* Add styles for the table container */
  }
  .export-button-container {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  }
 
  .export-button {
    background-color: #3498db;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
 
  .export-button:hover {
    background-color: #2980b9;
  }
`}</style>
    </div>
    
  );
}

{
  /* 
<MapContainer center={[28.619181, 77.314201]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[28.619181, 77.314201]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer> 
*/
}
