import '../index.css';

const LeftBtn = props => {
    return (
        <button className="left-btn" onClick={() => props.onClick()}>
            <i className="fa fa-chevron-left fa-4x"></i>
            <span className="sr-only">LeftBtn</span>
        </button>
    );
}

export default LeftBtn;