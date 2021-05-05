import { connect } from 'react-redux';
import { changeToLeftCity } from '../actions/index';
import LeftBtn from '../components/LeftBtn';

const mapStateToProps = state => {
    return {
        currentCity: state.currentCity,
        cities: state.cities.length,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLefBtnClick: (currentCity, cities) => {
            dispatch(changeToLeftCity(currentCity, cities));
        }
    }
}

const LeftBtnCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftBtn);

export default LeftBtnCon;