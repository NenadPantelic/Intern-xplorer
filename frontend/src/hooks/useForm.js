import { useState } from "react";

const useForm = () => {
  const [form, setForm] = useState({});

  const handleInput = (e) => {
    const data = { ...form };
    data[e.target.name] = e.target.value;
    setForm(data);
  };

  return { form, setForm, handleInput };
};

export default useForm;
