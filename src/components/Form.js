import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

function Form({setFav, fav})  {

  const initialForm = {
    setup: "",
    delivery: ""
  }

  const [form, setForm] = useState(initialForm)

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3001/favjokes", {
      method : "POST",
      headers : { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    .then((response) => response.json())
    .then((data) => {
      setFav([data, ...fav])
      history.push(`/favslist`)
    })

    setForm(initialForm);
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  
  return (
    <div>
      <h2>Give Me A Joke!</h2>
      <div>
        <form className='FormParent' onSubmit={handleSubmit}>
          <input
            className='FormChild'
            onChange={handleChange}
            type="text"
            name="setup"
            placeholder="Joke Setup"
            value={form.setup}
          />
          <input
            className='FormChild'
            onChange={handleChange}
            type="text"
            name="delivery"
            placeholder="Joke Delivery"
            value={form.delivery}
          />
          <button className='FormSubmitChild' type="submit">Add Joke</button>
        </form><br />
      </div>
    </div>
  );
}

export default Form;