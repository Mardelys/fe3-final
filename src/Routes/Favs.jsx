import { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(storedFavs);
  }, []);

  const handleRemoveFav = (id) => {
    const updatedFavs = favs.filter(fav => fav.id !== id);
    setFavs(updatedFavs);
  };

  return (
    <div className={state.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.length > 0 ? (
          favs.map((fav) => (
            <Card
              key={fav.id}
              {...fav}
              onRemoveFav={handleRemoveFav} // Pasar la función de eliminación
            />
          ))
        ) : (
          <p>No hay favoritos guardados.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
