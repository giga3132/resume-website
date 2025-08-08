import { useState } from 'react'; 

const Form = () => {
  const [form, setForm] = useState({name: '', email: '', message: ''})

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm(prev => ({...prev, [name]: value}))
  }
  return (
    <form>
      <input type="text" name="name" value={form.name} placeholder='Your Name' onChange={handleChange}></input>
      <input type="text" name="email" value={form.email} placeholder='Your Email Address' onChange={handleChange}></input>
      <input type="text" name="message" value={form.message} placeholder="Your Message" onChange={handleChange}></input>
      <input type="submit"></input>
      
    </form>
  )
}

export default Form
