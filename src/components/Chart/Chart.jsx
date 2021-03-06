import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from "react-chartjs-2";
import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: 'rgba(4, 181, 235,0.5)',
                            fill: true,
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255,0,0,0.5)',
                            fill: true,
                        }]
                    }}
                />
            ) : null
    );

    const barChart = (
        confirmed
            ? (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'rgba(4, 181, 235,0.5)',
                                'rgba(5, 206, 105, 0.8)',
                                'rgba(241, 63, 31, 0.8)',
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    oprions={{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${country}` }
                    }}
                />
            ) : null
    )

    return (

        <div className={styles.container}>
            {country!=='Global' ? barChart : lineChart}
        </div>

    )
}

export default Chart
