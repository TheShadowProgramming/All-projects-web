import PropTypes from 'prop-types'; // necessary for using props.children

function Card (props) {
    return (
        <div className="travel-card">
            <div className="upper-travel-div">
                <p className='upper-travel-div-content'>
                    Card Background
                </p>
                <p className="upper-travel-div-content">
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div className="center-travel-div">
                {props.children}
            </div>
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
}; // defines a schema for the types of data that we can pass inside the value of the keys defined

export default Card;