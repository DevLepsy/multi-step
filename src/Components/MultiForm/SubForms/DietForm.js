import React, {useState} from 'react';
import './SubForm.css'




export default function DietForm(props) {

    const [formData, setFormData] = useState({
        dietForm: 'nodiet'
    })
    console.log(formData)
    const handleRadio = e => {
        setFormData({
            dietForm: e.target.value
        })
    }
    
    const preventFunc = e => e.preventFunc()
  return <div>
            <form onSubmit={preventFunc} 
            className="diet-form">

                <p>Quelle est ton régime alimentaire ?</p>


                <label htmlFor="nodiet">Pas de régime alimentaire</label>
                <input 
                onChange={handleRadio} 
                type="radio"
                name="diet"
                id="nodiet"
                value="nodiet" />

                <label htmlFor="omnivorous">Omnivore</label>
                <input 
                onChange={handleRadio} 
                type="radio"
                name="diet"
                id="omnivorous"
                value="omnivirous" />

                <label htmlFor="vegetarian">Végétarien</label>
                <input 
                onChange={handleRadio} 
                type="radio"
                name="diet"
                id="vegetarian"
                value="vegetarian" />

                <label htmlFor="nodiet">Vegan</label>
                <input 
                onChange={handleRadio} 
                type="radio"
                name="diet"
                id="vegan"
                value="vegan" />

                <button onClick={() => props.modifyIndex(3, formData)}>Valider</button>

            </form>
        </div>;
}
