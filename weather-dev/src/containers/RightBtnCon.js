import { connect } from 'react-redux';
import { changeToRightCity } from '../actions/index';
import RightBtn from '../components/RightBtn';

const mapStateToProps = state => {
    return {
        currentCity: state.currentCity,
        cities: state.cities.length,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRightBtnClick: (currentCity, cities) => {
            dispatch(changeToRightCity(currentCity, cities));
        }
    }
}

const RightBtnCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(RightBtn);

export default RightBtnCon;