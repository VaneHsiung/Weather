import FristWordUpperCase from '../toolkit/FirstWordUpperCase';
import '../index.css';


const Weather = props => {
    if (!props.city) {
        return (
            <div className="weather">
                <i className="fa fa-refresh fa-spin fa-5x fa-fw"></i>
                <span className="sr-only">Loading...</span>
            </div>);
    } else {
        let { weather: [weather], main: temp } = props.city;
        return (
            <div className="weather grid-weather">
                <WeatherIcon icon={weather.icon} />
                <Temp temp={temp.temp} />
                <MinTemp temp={temp.temp_min} />
                <MaxTemp temp={temp.temp_max} />
                <Description desc={weather.description} />
            </div>
        );
    }
}


const WeatherIcon = props => {
    let url = "/assets/" + props.icon + ".png";
    return (
        <div className='icon'>
            <img src={url} alt={props.icon} className="icon" />
        </div>
    );
}

const Temp = props => {
    return (
        <div className="temp">
            <h2>{props.temp}&#8451;</h2>
        </div>
    );
}

const MinTemp = props => {
    return (
        <div className="temp-min">{props.temp}&#8451;</div>
    );
}

const MaxTemp = props => {
    return (
        <div className="temp-max">{props.temp}&#8451;</div>
    );
}

const Description = props => {
    return (
        <div className="desc">
            <h2>{FristWordUpperCase(props.desc)}</h2>
        </div>
    );
}

export default Weather;