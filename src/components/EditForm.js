import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const favUrl = "http://localhost:3001/favjokes";

function EditForm({ editJoke, onEditFormSubmit }) {

  const initialForm = {
    setup: "",
    delivery: ""
  }

  const [form, setForm] = useState(initialForm);

  const history = useHistory();
  
  useEffect(() => {
    fetch(`${favUrl}/${editJoke.id}`)
    .then(res => res.json())
    .then(jokeObj => setForm({id: jokeObj.id, setup: jokeObj.setup, delivery: jokeObj.delivery}))
  }, [editJoke])

  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    const config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    }
    fetch(`${favUrl}/${form.id}`, config)
    .then(res => res.json())
    .then(jokeObj => {
      onEditFormSubmit(jokeObj)
      history.push(`/favslist`)
    })

    setForm(initialForm);
  }

  return (
    <div className="new-Joke-form">
      <h2>Edit my joke!</h2>
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
          <button type="submit">Update Joke</button>
      </form><br />
    </div>
  )
}

export default EditForm;