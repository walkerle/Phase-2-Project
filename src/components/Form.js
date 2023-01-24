import React, {useState} from 'react';

function Form({setFav, fav})  {

  const initialForm = {
    setup: "",
    delivery: ""
  }

  const [form, setForm] = useState(initialForm)

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3001/favjokes", {
      method : "POST",
      headers : { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    .then((response) => response.json())
    .then((data) => setFav([data, ...fav]))

    setForm(initialForm);
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  
  return (
    <div className="new-Joke-form">
      <h2>Give me a joke!</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="setup"
          placeholder="Joke setup"
          value={form.setup}
        />
        <input
          onChange={handleChange}
          type="text"
          name="delivery"
          placeholder="Punchline"
          value={form.delivery}
        />
        <button type="submit">Add Joke</button>
      </form><br />
    </div>
  );
}

export default Form;