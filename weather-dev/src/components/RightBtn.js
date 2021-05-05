import '../index.css';

// const RightBtn = props => {
//     return (
//         <button className="right-btn" onClick={() => props.onClick()}>
//             <i className="fa fa-chevron-right fa-4x"></i>
//             <span className="sr-only">RightBtn</span>
//         </button>
//     );
// }

const RightBtn = ({currentCity, cities, onRightBtnClick}) => {
    return (
        <button className="right-btn" onClick={() => onRightBtnClick(currentCity, cities)}>
            <i className="fa fa-chevron-right fa-4x"></i>
            <span className="sr-only">RightBtn</span>
        </button>
    );
}

export default RightBtn;