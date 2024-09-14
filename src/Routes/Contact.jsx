import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Form from '../Components/Form';

const Contact = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={state.theme}>
      <h2 className="text-form">Want to know more?</h2>
      <p className="text-form">Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
