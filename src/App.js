import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styles from './App.module.css'
import { fetchData } from './api'
import image from './corona.png'
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import India from './components/India/India'

class App extends React.Component {

    state = {
        data: {},
        country: 'Global'
    }

    async componentDidMount() {

        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country })

    }

    render() {
        const { data, country } = this.state
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <div className={styles.container}>
                        <Route exact path='/' component={() => <Homepage data={data} country={country} handleCountryChange={this.handleCountryChange} />} />
                        <Route exact path='/india' component={() => <India />} />
                        <img className={styles.demo} src={image} alt="background" />
                    </div>

                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;