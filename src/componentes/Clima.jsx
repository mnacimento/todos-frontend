import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Clima = () => {

    const [pronostico, setPronostico] = useState([])

    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=-34&lon=-56&appid=764a496e4b4fb2978c4ba1ba2021a336&units=metric")
            .then(r => r.json())
            .then(datos => {
                // console.log(datos);
                setPronostico(datos.list);
            })
    }, [])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Pronostico',
            },
        },
    };

    const data = {
        labels: pronostico.map((e, i) => i), //[1,2,3,4,5,6]
        datasets: [
            {
                label: 'Temperatura',
                data: pronostico.map(t => t.main.temp),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <div className='col-6'>
            <h2>Clima en Uruguay</h2>
            {/* <p>Texto de prueba</p> */}
            {/* <Link to="/">Ir a Inicio</Link> */}
            <Bar options={options} data={data} />
            <Bar options={{
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Pronostico',
                    },
                },
            }} 
            data={{
                labels: pronostico.map((e, i) => i), //[1,2,3,4,5,6]
                datasets: [
                    {
                        label: 'Temperatura',
                        data: pronostico.map(t => t.main.temp),
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                ],
            }} />
        </div>
    )
}

export default Clima