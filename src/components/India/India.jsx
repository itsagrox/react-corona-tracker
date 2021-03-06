import React, { useState, useEffect } from 'react';
import { Line } from "react-chartjs-2";
import styles from './India.module.css'
import logoBlack from '../../images/logoBlack.svg'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

const India = () => {

    const urlIndia = 'https://api.covid19india.org/data.json'
    const [totalData, seTotalData] = useState([]);
    const [total, setTotal] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [deaths, setDeaths] = useState(0)



    const fetchAPI = async () => {
        try {
            const res = await fetch(`${urlIndia}`);
            const data = await res.json();
            setTotal(data.statewise[0].confirmed)
            setRecovered(data.statewise[0].recovered)
            setDeaths(data.statewise[0].deaths)
            seTotalData(data.cases_time_series)
        }
        catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
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




    return (<>
        <img className={styles.image} src={logoBlack} alt="Covid-19 Tracker" />
        <div className={styles.container} >

            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={total}
                                duration={2}
                                seperator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">10th May</Typography>
                        <Typography variant="body2">Total number of active cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={recovered}
                                duration={2}
                                seperator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">10th May</Typography>
                        <Typography variant="body2">Total number of recoveries from Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths}
                                duration={2}
                                seperator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">10th May</Typography>
                        <Typography variant="body2">Total number of deaths caused by Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <div className={styles.chart}>
                {lineChart}
            </div>


        </div >
    </>
    )
}

export default India
