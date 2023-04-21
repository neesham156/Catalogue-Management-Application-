import React from 'react'
// Initialization for ES Users
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

  
  

export default function Analyse(category:any) {
    console.log("hi",category)
     const data = {
        labels:category.category,
        datasets: [
          {
            label: '',
            
            data: [6,4,4,6],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
           
            borderWidth: 1,
          },
        ],
      };
     
  return (
    <div className="w-[700px] h-[700px p-8] ">
        <h1 className='flex justify-center text-4xl py-2'>Category</h1>
    <Pie data={data} />
  </div>
  )
}
