const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-green dib br3 ma2 pa3 grow be2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
