import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Mapping of Product',
      font: {
        size: 20,
        weight: 'bold',
      },
      color: '#1b5e20',
    },
  },
};

const totalLabels = Array.from({ length: 24 }, (_, i) => `Kategori ${i + 1}`);
const totalData = totalLabels.map(() => faker.number.int({ min: 0, max: 1000 }));

const Chart = () => {
  const [start, setStart] = useState(0);
  const itemsPerPage = 6;

  const handleNext = () => {
    setStart((prevStart) => Math.min(prevStart + itemsPerPage, totalLabels.length - itemsPerPage));
  };

  const handlePrev = () => {
    setStart((prevStart) => Math.max(prevStart - itemsPerPage, 0));
  };

  const currentLabels = totalLabels.slice(start, start + itemsPerPage);
  const currentData = totalData.slice(start, start + itemsPerPage);

  const data = {
    labels: currentLabels,
    datasets: [
      {
        label: 'Jumlah Produk',
        data: currentData,
        borderColor: 'rgba(174, 228, 167, 1)',
        backgroundColor: 'rgba(177, 228, 167, 0.5)',
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button className='text-gkpgreen font-semibold mx-4 px-4 py-2 bg-gkpgreen rounded cursor-pointer disabled:bg-white disabled:cursor-not-allowed' onClick={handlePrev} disabled={start === 0}>
          Previous
        </button>
        <button className='text-gkpgreen font-semibold mx-4 px-4 py-2 bg-gkpgreen rounded cursor-pointer disabled:bg-white disabled:cursor-not-allowed' onClick={handleNext} disabled={start + itemsPerPage >= totalLabels.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Chart;
