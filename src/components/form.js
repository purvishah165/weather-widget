import React from "react";

class Form extends React.Component{

    render(){
        return(
                <form onSubmit = {this.props.loadWeather} className="weather-form">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            className="titleInput"
                            placeholder="Title of widget"
                            onChange={this.props.loadWeather}/>
                    </div>
                    <div className="form-group">
                        <label>Temperature</label>
                        <div className="radio-group">
                            <div className="radio-input">
                                <input
                                    type="radio"
                                    name="unit"
                                    value="metric"
                                    id="Celc"
                                    defaultChecked
                                    onChange={this.props.loadWeather}/><label htmlFor="Celc">&#176;C</label>
                            </div>
                            <div className="radio-input">
                                <input
                                    type="radio"
                                    name="unit"
                                    value="imperial"
                                    id="Fahr"
                                    onChange={this.props.loadWeather}/><label htmlFor="Fahr">&#176;F</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Wind</label>
                        <div className="radio-group">
                            <div className="radio-input">
                                <input
                                    type="radio"
                                    name="wind"
                                    value="true"
                                    defaultChecked
                                    onChange={this.props.loadWeather}/>
                                <label htmlFor="on">On</label>
                            </div>
                            <div className="radio-input">
                                <input
                                    type="radio"
                                    name="wind"
                                    value="false"
                                    onChange={this.props.loadWeather}/>
                                <label htmlFor="off">Off</label>
                            </div>
                        </div>
                    </div>
                </form>
        )
    }
}

export default Form;
