import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LoginPage(props) {
    var [users, setUser] = useState();
    var [username, setUsername] = useState("");
    var [password, setPassword] = useState("");

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
        .then(res => setUser(res.data.results));
    }, []);

    const handlesubmit = (e) => {
        e.preventDefault();
        setUser({
            username: username,
            password: password
        })
        if(users.find(user => user.name === username)){
            if(users.find(user => user.birth_year === password)){
                window.location = '/dashboard'
            }
            else{
                alert("Password Incorrect");
            }
        }
        else{
            alert("User not found!!");
        }
    }

    return (
        <div className = "container"> 
            <form onSubmit={handlesubmit}>
                <h3>Login</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input  style={{width : "30%", margin: "auto"}} value={username} type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input style={{width : "30%", margin: "auto"}} value={password} type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password" />
                </div>
                <button style={{width : "10%", margin: "auto"}} type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;