import React, { useRef, useState, useEffect } from 'react';
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
import { canvas } from 'leaflet';

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
  legend: {
    onClick: (e, legendItem) => {
      const index = legendItem.datasetIndex;
      const chart = chartRef.current.chartInstance;

      chart.data.datasets[index].hidden = !chart.data.datasets[index].hidden;
      chart.update();
    },
  },
  tooltips: {
    mode: 'index', // Set to 'index' to show tooltips for all datasets at the same index
    intersect: false,
  },
  onElementsClick: (event, elements) => handleElementsClick(elements),

};

const labels = ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01', '2022-06-01', '2022-07-01'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1,
      fill: false,
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 1,
      fill: false,
    },
    {
      label: 'Dataset 3',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      borderWidth: 1,
      fill: false,
    },
  ],
};


export function StackedBarChart() {
  const chartRef = useRef();
  const [hiddenDatasets, setHiddenDatasets] = useState([]);
  const [exportFormat, setExportFormat] = useState(null);
  // const [showDropdown, setShowDropdown] = useState(false);
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
    setExportFormat(null);
  };
  const exportPDF = (canvas) => {
    const pdf = new jsPDF();
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0);
    pdf.save('chart.pdf');
  }

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
  useEffect(() => {
    // Ensure that the chartRef has a current property and it has been initialized
    if (chartRef.current && chartRef.current.chartInstance) {
      const chartInstance = chartRef.current.chartInstance;
      const chartData = chartInstance.data;
    }
  }, [chartRef]);
  const handleElementsClick = (elements) => {
    if (elements.length > 0) {
      const datasetIndex = elements[0]._datasetIndex;

      setHiddenDatasets((prevHiddenDatasets) => {
        const updatedHiddenDatasets = [...prevHiddenDatasets];
        updatedHiddenDatasets[datasetIndex] = !updatedHiddenDatasets[datasetIndex];
        return updatedHiddenDatasets;
      });
    }
  };
  return (
    <div style={{ position: 'relative', height: '600px' }}>
      <div style={{ position: 'absolute', top: '200px', right: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {data.datasets.map((dataset, index) => (
            <div
              key={index}
              style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', cursor: 'pointer' }}
              onClick={() => setHiddenDatasets((prevHiddenDatasets) => {
                const updatedHiddenDatasets = [...prevHiddenDatasets];
                updatedHiddenDatasets[index] = !updatedHiddenDatasets[index];
                return updatedHiddenDatasets;
              })}
            >
              <div style={{ width: '10px', height: '10px', backgroundColor: dataset.borderColor, marginRight: '5px' }} />
              <span>{dataset.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ width: '100%', height: '200px', marginTop: '20px' }}>
        <Line data={{
          ...data,
          datasets: data.datasets.map((dataset, index) => ({
            ...dataset,
            hidden: hiddenDatasets[index],
          })),
        }} options={options} />
      </div>
    </div>
  );
}
