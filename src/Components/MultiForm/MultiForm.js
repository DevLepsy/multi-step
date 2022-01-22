import React, {useState} from 'react';
import "./MultiForm.css"

export default function MultiForm() {

    const [formIndex, setFormIndex] = useState(1)
    const [allFormData, setAllFormData] = useState({
        dietForm: "",
        foodstyle: [],
        allergies: [],
        prefs: {}
    })
  return <div></div>;
}
