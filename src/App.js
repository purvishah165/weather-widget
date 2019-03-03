import React from "react";
import Weather from "./components/weather";
import Form from "./components/form";
const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";

class App extends React.Component {
    state = {
        title: "Title of widget",
        lat: undefined,
        lon: undefined,
        weather: undefined,
        unit: "metric",
        show_wind: "true",
        img_id: undefined
    };

    //getWeather is a method we'll use to make the api call
    getWeather = async (e) => {
        if(e.target.name === 'unit'){
            await this.setState({unit: e.target.value});
            await this.fetchWeather();
        } else if (e.target.name === 'wind'){
            await this.setState({show_wind: e.target.value})
        } else if (e.target.name === 'title'){
            await this.setState({title: e.target.value})
        }
    };
    render() {
        return (
            <div className="wrapper">
                <div className="main">
                    {
                        this.state.lat && <Form loadWeather={this.getWeather}/>
                    }
                    <div>
                        {
                            this.state.weather && <Weather
                                title={this.state.title}
                                weather={this.state.weather}
                                unit={this.state.unit}
                                show_wind={this.state.show_wind}
                                error={this.state.error}
                            />
                        }
                    </div>
                </div>
            </div>
        )
    }
    fetchWeather = async () => {
        const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather' +
            '?lat=' + this.state.lat +
            '&lon=' + this.state.lon +
            '&units=' + this.state.unit+
            '&appid=' + Api_Key);
        const response = await api_call.json();
        if(response.cod !== 400) {
            this.setState({
                weather: response,
                error: ""
            });
        } else {
            this.setState({
                error: "Please input search values..."
            })
        }
    };
    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position)=> {
            this.setState({
                lat: position.coords.latitude,
                lon: position.coords.longitude
            });
            this.fetchWeather();
        },(error)=> {
            console.log(error)
        });
    }
}
export default App;
