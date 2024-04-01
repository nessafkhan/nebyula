const JobCard = ({
  title,
  description,
  location,
  deadline,
  contact,
  email,
}) => {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{location}</p>
        <p>{description}</p>
      </div>
      <div>
        <h5>{`Apply before: ${deadline}`}</h5>
        <p>{contact}</p>
        <p>{email}</p>
      </div>
      <div>
      <button onClick={() => {}}>Intrested</button>
      </div>
    </div>
  );
};

export default JobCard;