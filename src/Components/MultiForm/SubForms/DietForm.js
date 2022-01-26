import React, {useState} from 'react';
import './SubForm.css'

const handleRadio = () => {

}

const preventFunc = e => e.preventFunc()


export default function DietForm(props) {
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

                <button oncCLick={() => props.modifyIndex(3)}>Valider</button>

            </form>
        </div>;
}
