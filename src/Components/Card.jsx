import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom";
import './theme.css'; 

const Card = ({ name, username, id, onRemoveFav }) => {
  const { state } = useContext(ContextGlobal);
  const [isFavorited, setIsFavorited] = useState(() => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    return favs.some(fav => fav.id === id);
  });

  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const newFavs = [...favs, { id, name, username }];
    localStorage.setItem("favs", JSON.stringify(newFavs));
    setIsFavorited(true);
  };

  const removeFav = () => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const newFavs = favs.filter(fav => fav.id !== id);
    localStorage.setItem("favs", JSON.stringify(newFavs));
    setIsFavorited(false);
    onRemoveFav(id); 
  };

  return (
    <div className={`card ${state.theme}`}>
      <img src="./images/doctor.jpg" alt='DH-logo' className="user-img" />
      <h3><Link to={`/dentist/${id}`}>{name}</Link></h3>
      <p>{username}</p>
      
      {isFavorited ? (
        <button onClick={removeFav} className="favButton remove">Remove fav</button>
      ) : (
        <button onClick={addFav} className="favButton add">Add fav</button>
      )}
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onRemoveFav: PropTypes.func.isRequired, 
};

export default Card;
