import { useEffect, useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_DATA", payload: data }));
  }, [dispatch]);

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map((dentist) => (
          <Card key={dentist.id} {...dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
