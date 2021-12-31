import React, { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    document: "",
    lastName: "",
    addres: "",
    phone: "",
  });
  const { name, document, lastName, addres, phone } = data;

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  return (
    <form className="form">
      <select className="form__input" id="category">
        <option value="Cédula de Ciudadanpia">Cédula de Ciudadanía</option>
        <option value="Cédula de Extranjeria">Cédula de Extranjeria </option>
      </select>

      <input
        className="form__input"
        type="number"
        name="document"
        onChange={handleChange}
        value={document}
        placeholder="No. de Cédula"
      />

      <input
        className="form__input"
        type="text"
        name="name"
        value={name}
        placeholder="Nombre"
        onChange={handleChange}
      />

      <input
        className="form__input"
        type="text"
        placeholder="2do Nombre (Opcional)"
      />
      <input
        className="form__input"
        type="text"
        name="lastName"
        placeholder="Apellido"
        value={lastName}
        onChange={handleChange}
      />
      <input
        className="form__input"
        type="text"
        placeholder="2do Apellido (Opcional)"
      />
      <input
        className="form__input"
        type="addres"
        name="addres"
        placeholder="Dirección"
        value={addres}
        onChange={handleChange}
      />
      <input
        className="form__input"
        type="number"
        name="phone"
        placeholder="Telefono"
        value={phone}
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
