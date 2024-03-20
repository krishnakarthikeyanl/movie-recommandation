import Home from "./Home";
const Fetchedmovies=(props)=>{
    return(
        <>
          <div className="movie_image">
                <img src={props.imagesrc}></img>
                <h4 className="title">{props.title}</h4>
            </div>
        </>
    )
}
export default Fetchedmovies;