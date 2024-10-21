import './Profilecard.css';


const Profilecard = ({Name, Age, Location, ProfileImage, Position, Theme}) => {
    const themeClass = Theme === 'dark' ? 'profilecard dark' : 'profilecard light'

    return (
        <div className = {themeClass}>
            <img src={ProfileImage} alt={`${Name}'s profile`} id='ProfileImage' />
            <div className="ProfileInfo">
                <h2>{Name}</h2>
                <p>{Position}</p>
                <p>Age: {Age}</p>
                <p>Location: {Location}</p>
            </div>
        </div>
    );
};

export default Profilecard;