import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styles from './App.module.css'
import { fetchData, fetchIndia } from './api'
import image from './corona.png'
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import India from './components/India/India'
import Footer from './components/Footer/Footer'


class App extends React.Component {

    state = {
        data: {},
        country: 'Global',
        dataIndia: {}
    }

    async componentDidMount() {


        const fetchIndianData = await fetchIndia();
        this.setState({ dataIndia: fetchIndianData })
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country })

    }

    render() {
        const { data, country, dataIndia } = this.state
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <div className={styles.container}>
                        <Route exact path='/' component={() => <Homepage data={data} country={country} handleCountryChange={this.handleCountryChange} />} />
                        <Route exact path='/india' component={() => <India dataIndia={dataIndia} />} />
                        <img className={styles.demo} src={image} alt="background" />
                    </div>

                </Switch>
                <Footer />
            </BrowserRouter>
        )
    }
}

export default App;