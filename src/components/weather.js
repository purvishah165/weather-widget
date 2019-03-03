import React from "react";

class Weather extends React.Component{

    render(){

        return(

            <div className="weather-info">
                <div className="weather-title">
                    <h4>{this.props.title}</h4>
                </div>
                <div className="weather-data">
                    <div className="weather-img">
                        {
                            this.props.weather.weather[0].icon && <img alt="Weather icon" src={'http://openweathermap.org/img/w/'+this.props.weather.weather[0].icon+'.png'}></img>
                        }
                    </div>
                    <div className="weather-container">
                        {
                            this.props.weather.name &&
                            <span className="weather-value">{this.props.weather.name}</span>
                        }

                        {
                            this.props.weather.main.temp &&
                            <h3 className="temperature-value">{this.props.weather.main.temp}&#176;</h3>
                        }

                        {
                            this.props.error && <p className="weather-error">{this.props.error}</p>
                        }

                        {   this.props.show_wind === "true" &&
                            <p className="weather-wind">
                                <span className="weather-wind-label">Wind</span>
                                <span className="weather-wind-value">{this.degToCard(this.props.weather.wind.deg)} {this.appendSpeed(this.props.weather.wind.speed)}</span>
                            </p>
                        }
                    </div>
                </div>
            </div>
        )
    }

    appendSpeed (speed) {
        if (this.props.unit === 'metric'){
            return speed + 'm/s'
        } else if (this.props.unit === 'imperial') {
            return speed + 'MPH'
        }
    }
    degToCard(deg){
        if (deg>11.25 && deg<33.75){
            return "NNE";
        }else if (deg>33.75 && deg<56.25){
            return "ENE";
        }else if (deg>56.25 && deg<78.75){
            return "E";
        }else if (deg>78.75 && deg<101.25){
            return "ESE";
        }else if (deg>101.25 && deg<123.75){
            return "ESE";
        }else if (deg>123.75 && deg<146.25){
            return "SE";
        }else if (deg>146.25 && deg<168.75){
            return "SSE";
        }else if (deg>168.75 && deg<191.25){
            return "S";
        }else if (deg>191.25 && deg<213.75){
            return "SSW";
        }else if (deg>213.75 && deg<236.25){
            return "SW";
        }else if (deg>236.25 && deg<258.75){
            return "WSW";
        }else if (deg>258.75 && deg<281.25){
            return "W";
        }else if (deg>281.25 && deg<303.75){
            return "WNW";
        }else if (deg>303.75 && deg<326.25){
            return "NW";
        }else if (deg>326.25 && deg<348.75){
            return "NNW";
        }else{
            return "N";
        }
    }
}

export default Weather;
