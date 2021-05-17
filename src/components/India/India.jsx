import React, { useState, useEffect } from 'react';
import { Line } from "react-chartjs-2";
import axios from 'axios';
import styles from './India.module.css'
import logoBlack from '../../images/logoBlack.svg'




const India = ({ dataIndia }) => {

    const urlIndia = 'https://api.covid19india.org/data.json'
    const [totalData, seTotalData] = useState([]);
    const [stateWise, setStateWise] = useState([]);

    useEffect(() => {

        const fetchAPI = async () => {

            const { data } = await axios.get(`${urlIndia}`);
            seTotalData(data.cases_time_series);
            setStateWise(data.statewise);
        }
        fetchAPI();
    }, []);


    const lineChart = (

        <Line
            data={{
                labels: totalData.map(({ dateymd }) => dateymd),
                datasets: [{
                    data: totalData.map(({ totalconfirmed }) => totalconfirmed),
                    label: 'Infected',
                    borderColor: 'rgba(4, 181, 235,0.5)',
                    fill: true,
                }, {
                    data: totalData.map(({ totaldeceased }) => totaldeceased),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true,
                }, {
                    data: totalData.map(({ totalrecovered }) => totalrecovered),
                    label: 'Recovered',
                    borderColor: 'green',
                    backgroundColor: ' rgba(123, 240, 88, 0.3)',
                    fill: true,
                }]
            }}
        />

    );

    console.log("DailyData", totalData)
    console.log("Statewise", stateWise)


    return (<>
        <img className={styles.image} src={logoBlack} alt="Covid-19 Tracker" />
        <div className={styles.container} >

            {lineChart}

        </div >
    </>
    )
}

export default India
