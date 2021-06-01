import React, { useState } from 'react'

const ContactForm = () => {
    const [form, setForm] = useState(
        {
            name: "",
            email: "",
            subject: "",
            message: ""
        }
    )

    const validateInput = () => {

    }

    const handleInput = (e) => {
        var obj = { ...form }
        obj[e.target.id] = e.target.value
        setForm(obj)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="inputGroup mb-5">
                    <label htmlFor="name">Name* :</label>
                    <input type="text" id="name" value={form.name} onChange={handleInput} required />
                </div>

                <div className="inputGroup mb-5">
                    <label htmlFor="email">Email Address* :</label>
                    <input type="email" id="email" value={form.email} onChange={handleInput} required />
                </div>

                <div className="inputGroup mb-5">
                    <label htmlFor="email">Organization/Company:</label>
                    <input type="text" id="company" value={form.company} onChange={handleInput} />
                </div>

                <div className="inputGroup mb-5">
                    <label htmlFor="email">Subject* :</label>
                    <input type="text" id="subject" value={form.subject} onChange={handleInput} required />
                </div>

                <div className="inputGroup mb-5">
                    <label htmlFor="email">Message* :</label>
                    <textarea type="email" id="message" max="10" value={form.message} onChange={handleInput} required />
                </div>

                <div className="inputGroup mb-5">
                    <button>SEND</button>
                </div>
            </form>
        </>
    )
}

export default ContactForm