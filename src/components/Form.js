import React, {useState} from 'react';

function Form()  {

  const initialForm = { // we want to match the data shape from the API
    setup: "",
    delivery: ""
  }

  const [form, setform] = useState(initialForm)

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("", { // need to POST to db.json()
      method : "POST",
      headers : { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))

    // Want the form to render on the front-end
  }

  const handleChange = (e) => {
    setform({...form, [e.target.name]: e.target.value})
  }
  
  return (
    <div className="new-Joke-form">
      <h2>New Joke</h2>
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
      </form>
    </div>
  );
}



export default Form;