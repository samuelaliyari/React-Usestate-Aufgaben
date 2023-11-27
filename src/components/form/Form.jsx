import { useState } from "react";
import './Form.css'

const Form = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastname: "",
        email: ""
    })
    return (  
        <section className="formWrapper">
            <h1>Form</h1>
            <form>
                <input type="text"
                    placeholder="Fierstname"
                    onChange={(e) => setUserData({...userData , firstName: e.target.value})}
                />
                <input type="text"
                    placeholder="Lastname"
                    onChange={(e) => setUserData({...userData , lastname: e.target.value})}
                />
                <input type="email"
                    placeholder="email"
                    onChange={(e) => setUserData({...userData , email: e.target.value})}
                />
        </form>
        <div>
            <p>Firstname: {userData.firstName}</p>
            <p>lastname: {userData.lastname}</p>
            <p>E-Mail: {userData.email}</p>
        </div>

        </section>

    );
}

export default Form;