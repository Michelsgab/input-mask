import React, { useState, useCallback } from "react";
import Input from "./components/input";
import "./App.css";

interface User {
  cep: string;
  cpf: string;
  price: number;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User>({} as User);
  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }, [user]);

  return (
    <div className="container">
      <h1>Masks</h1>
      <span>CEP</span>
      <Input
        name="cep"
        mask="cep"
        placeholder="99999-999"
        onChange={handleChange}
      />

      <span>CPF</span>
      <Input
        name="cpf"
        mask="cpf"
        placeholder="999.999.999-99"
        onChange={handleChange}
      />

      <span>Price</span>
      <Input
        name="price"
        mask="currency"
        prefix="R$"
        placeholder="0,01"
        onChange={handleChange}
      />

      <button className="button" onClick={() => console.log(user)}>
        Save
      </button>

      <h3>{`Cep: ${user.cep == undefined ? "" : user.cep}`}</h3>
      <h3>{`Cpf: ${user.cpf == undefined ? "" : user.cpf}`}</h3>
      <h3>{`Price:${user.price == undefined ? "" : user.price}`}</h3>
    </div>
  );
};

export default App;
