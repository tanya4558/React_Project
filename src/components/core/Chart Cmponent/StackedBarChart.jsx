import React, { useRef, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import html2canvas from 'html2canvas';
import XLSX from 'xlsx';
import jsPDF from 'jspdf';
// import faker from 'faker';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      // text: 'Line Graph',
    },
    datalabels: {
      display: false,
    },
  },
  responsive: true,
  scales: {
    x: [
      {
        type: 'time',
        time: {
          unit: 'month',
          displayFormats: {
            month: 'MMM YYYY',
          },
        },
      },
    ],
    y: {
      title: {
        display: true,
        text: 'WATERLEVEL (M)',
      },
      ticks: {
        stepSize: 25,
        suggestedMin: 0,
        suggestedMax: 150,

      },
    },
  },
};

const labels = ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01', '2022-06-01', '2022-07-01'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 2,
      fill: false,
    },
    {
      label: 'Dataset 3',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      borderWidth: 2,
      fill: false,
    },
  ],
};


export function StackedBarChart() {
  const chartRef = useRef();
  const [exportFormat, setExportFormat] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const exportChart = async () => {
    if (!exportFormat) return;
    const chartContainer = chartRef.current;

    if (!chartContainer) {
      return;
    }

    try {
      const canvas = await html2canvas(chartContainer);

      switch (exportFormat) {
        case 'png':
          const pngDataUrl = canvas.toDataURL('image/png');
          downloadImage(pngDataUrl, 'chart.png');
          break;
        case 'jpeg':
          const jpegDataUrl = canvas.toDataURL('image/jpeg');
          downloadImage(jpegDataUrl, 'chart.jpeg');
          break;
        case 'pdf':
          const pdf = new jsPDF();
          pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0);
          pdf.save('chart.pdf');
          break;
        case 'csv':
          exportCSV();
          break;
        case 'xls':
          exportXLS();
          break;
        default:
          console.error('Invalid export format');
      }
    } catch (error) {
      console.error('Error exporting chart:', error);
    }
   // setExportFormat(null);
  };

  const downloadImage = (dataUrl, filename) => {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename;
    link.click();
  };

  const exportCSV = () => {
    const datasets = data.datasets;
    var csvContent = 'data:text/csv;charset=utf-8,';
    const headers = ['Label', ...labels].join(',');
    csvContent += `${headers}\n`;

    datasets.forEach((dataset) => {
      const rowData = [dataset.label, ...dataset.data].join(',');
      csvContent += `${rowData}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.href = encodedUri;
    link.download = 'chart.csv';
    link.click();
  };

  const exportXLS = () => {
    const xlsContent = {
      Sheets: {
        data: {
          '!ref': 'A1:' + String.fromCharCode(65 + labels.length - 1) + (datasets.length + 1),
        },
      },
      SheetNames: ['data'],
    };

    xlsContent.Sheets.data['A1'] = { t: 's', v: 'Label' };

    labels.forEach((label, index) => {
      xlsContent.Sheets.data[String.fromCharCode(65 + index) + '2'] = { t: 's', v: label };
    });

    datasets.forEach((dataset, datasetIndex) => {
      xlsContent.Sheets.data['A' + (datasetIndex + 2)] = { t: 's', v: dataset.label };
      dataset.data.forEach((value, valueIndex) => {
        xlsContent.Sheets.data[String.fromCharCode(65 + valueIndex) + (datasetIndex + 2)] = { t: 'n', v: value };
      });
    });

    const blob = new Blob([s2ab(XLSX.write(xlsContent, { bookType: 'xlsx', bookSST: true, type: 'binary' }))], {
      type: 'application/octet-stream',
    });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'chart.xlsx';
    link.click();
  };

  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
  }
  return (
    <div style={{ position: 'relative' }}>
      {/* Set width for the entire container */}
      <Line options={options} data={data} ref={chartRef} style={{ position: 'relative' }} />
      <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000 }}>
        <button onClick={() => setShowDropdown(!showDropdown)}>Export</button>
        <div className="dropdown" style={{ display: showDropdown ? 'block' : 'none' }}>
          <div onClick={() => setExportFormat('png')}>Download PNG</div>
          <div onClick={() => setExportFormat('jpeg')}>Download JPEG</div>
          <div onClick={() => setExportFormat('pdf')}>Download PDF</div>
          <div onClick={() => setExportFormat('svg')}>Download SVG</div>
          <div onClick={() => setExportFormat('csv')}>Download CSV</div>
          <div onClick={() => setExportFormat('xls')}>Download XLS</div>
        </div>
        <button onClick={exportChart}></button>
      </div>
    </div>
  );
}
