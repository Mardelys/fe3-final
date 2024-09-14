import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;
    if (formData.name.length < 5) {
      setErrors("El nombre debe tener al menos 5 caracteres.");
      setSuccessMessage(""); 
    } else if (!emailRegex.test(formData.email)) {
      setErrors("El email no es válido.");
      setSuccessMessage(""); 
    } else {
      setErrors("");
      setSuccessMessage(`Gracias ${formData.name}, te contactaremos vía email.`);
      setFormData({ name: "", email: "" }); // Limpia el formulario
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name} // Controla el valor del input
          placeholder="Nombre"
          className="input-pd"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email} // Controla el valor del input
          placeholder="Email"
          className="input-pd"
          onChange={handleChange}
        />
        <button className="input-pd" type="submit">Enviar</button>
        {errors && <p className="error">{errors}</p>}
        {successMessage && <div className="success"><p>{successMessage}</p></div>}
      </form>
    </div>
  );
};

export default Form;
