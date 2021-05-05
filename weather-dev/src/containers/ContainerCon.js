import { connect } from 'react-redux';
import Container from '../components/Container';

const mapStateToProps = state => {
    let currentCityName = state.cities[state.currentCity];
    let currentCityData = state.cityData[state.currentCity];
    return {
        currentCityName,
        currentCityData,
    }
}

const ContainerCon = connect(
    mapStateToProps,
)(Container);

export default ContainerCon;