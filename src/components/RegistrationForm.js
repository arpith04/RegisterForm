import { useState } from 'react'
import './RegistrationForm.css'

export default function RegisterationForm(props) {
    const [focused, setFocused] = useState(false);

    const { label, id, onChange, errorMessage, ...inputProps } = props

    const handleFocus=()=>{
        setFocused(true);
    }

    return (
        <div className='formInput'>
            <label>{label}</label>
            <input
                onChange={props.onChange}
                {...inputProps}
                onBlur={handleFocus}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    )
}