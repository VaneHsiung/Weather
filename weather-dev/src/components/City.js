import '../index.css';

const City = props => {
    return (
        <div className="city">
            <h1>{props.name}</h1>
        </div>
    );
}

export default City;