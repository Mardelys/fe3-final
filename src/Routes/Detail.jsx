import  { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setDentist(data));
  }, [id]);

  return (
    <div className={state.theme}>
      {dentist ? (
        <>
          <h1>Detail Dentist {dentist.id}</h1>
          <p>Name: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
