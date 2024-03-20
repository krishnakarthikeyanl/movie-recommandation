
const Releases = ({ title, imagesrc}) => {
    return (
      <>
      <div className="movie_image">
          <img src={imagesrc} alt={title} />
          <h4>{title}</h4>
      </div>
  
      </>
    );
  };

  export default Releases;  