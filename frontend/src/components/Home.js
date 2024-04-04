import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../actions/auth';



function Home() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const handleChange = e => setFormData({ ...formData, [e.target.email]: e.target.password });

    return(
        <>
            <form className="Home-form">
            <div className="container">
                <div>
                    <button className="home-button">button1</button>
                </div>
                <div>
                    <button className="home-button">button2</button>
                </div>
                <div>
                    <button className="home-button">button3</button>
                </div>
            </div>
            </form>
        </>
    )

}

export default Home;