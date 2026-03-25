import { LineChart } from 'lucide-react'
import React from 'react'
import { Line, XAxis, YAxis } from 'recharts'

const resultData=[
     {
    "id": 1,
    "name": "Rahim",
    "physics": 85,
    "chemistry": 78,
    "math": 90
  },
  {
    "id": 2,
    "name": "Karim",
    "physics": 75,
    "chemistry": 80,
    "math": 70
  },
  {
    "id": 3,
    "name": "Ayesha",
    "physics": 92,
    "chemistry": 88,
    "math": 95
  },
  {
    "id": 4,
    "name": "Fatima",
    "physics": 88,
    "chemistry": 85,
    "math": 89
  },
  {
    "id": 5,
    "name": "Hasan",
    "physics": 70,
    "chemistry": 72,
    "math": 68
  },
  {
    "id": 6,
    "name": "Nusrat",
    "physics": 81,
    "chemistry": 79,
    "math": 84
  },
  {
    "id": 7,
    "name": "Sakib",
    "physics": 65,
    "chemistry": 60,
    "math": 72
  },
  {
    "id": 8,
    "name": "Mim",
    "physics": 95,
    "chemistry": 93,
    "math": 97
  },
  {
    "id": 9,
    "name": "Tanvir",
    "physics": 77,
    "chemistry": 74,
    "math": 79
  },
  {
    "id": 10,
    "name": "Riya",
    "physics": 83,
    "chemistry": 86,
    "math": 82
  }
]
const ResultCharts = () => {
  return (
    <div>
      <LineChart width={500} height={500} data={resultData}/>
      <XAxis dataKey="name"></XAxis>
      <YAxis></YAxis>
      <Line dataKey="math"></Line>
      <Line dataKey={'chemistry'} stroke='red'></Line>
    </div>
  )
}

export default ResultCharts
