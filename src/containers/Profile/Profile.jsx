
import React , {useState} from 'react';

import './Profile.css';
import Tap from '../../components/Tap/Tap';

import '../../utils/validate';
import { validate } from '../../utils/validate';

const Profile = () => {

    const [user, setUser] = useState({nombre: '', email: ''});
    const [message, setMessage] = useState("");
    const [error, setError] = useState({});

    const userHandler = (e) => {
        setUser({...user, [e.target.name] : e.target.value});
    };

    const enviaDatos = async () => {

        setMessage("");

        let errorMessage = validate(user);

        setMessage(errorMessage);

        if(errorMessage){
            return console.log(errorMessage);
        }
  

    }

    return (
        <div className="centradoColumna">
            <div className="disposicionProfile">
                <div className="card mt5 mr5">
                    <input name="nombre" type="text" onChange={userHandler}/>
                    <input name="email" type="text" onChange={userHandler}/>
                </div>
                <div className="card mt5 ml5"></div>
                
            </div>
            <div className="mt3" onClick={()=>enviaDatos()}>
                <Tap />
            </div>
            
        </div>
    )

}

export default Profile;