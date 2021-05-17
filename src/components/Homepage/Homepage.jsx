import React from 'react'
import Cards from '../Cards/Cards'
import CountryPicker from '../CountryPicker/CountryPicker'
import Chart from '../Chart/Chart'
import logoBlack from '../../images/logoBlack.svg'
import styles from '../../App.module.css'

function Homepage({ data, country, handleCountryChange }) {
    return (
        <>

            <img className={styles.image} src={logoBlack} alt="Covid-19 Tracker" />
            <p className={styles.desc}>The covid-19 tracking application.</p>
            <h5 className={styles.h5}>Please select the country for data</h5>
            <CountryPicker handleCountryChange={handleCountryChange} />
            <Cards data={data} country={country}/>
            <Chart data={data} country={country} />
        </>
    )
}

export default Homepage
