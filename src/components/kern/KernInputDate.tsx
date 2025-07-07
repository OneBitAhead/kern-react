import { useEffect, useRef, useState, type FormEvent } from "react";

import styles from './KernInputDate.module.css';

function KernInputDate({
    id,
    name,
    label,
    value,
    disabled = false,
    readonly = false,
    required = false,
    hint,
    error
 }:{
    id: string,
    name?: string
    label?: string,
    value?: any,
    type?: string,
    disabled?: boolean,
    readonly?: boolean,
    required?:boolean,
    hint?: string,
    error?: string
}){

    const [combinedValue, setCombinedValue] = useState(value||'');
    
    useEffect(() => {
        setCombinedValue(value);
    }, [value]); 

    // Handle validity
    const [errorState, seterrorState] = useState(error);
    useEffect(() => {
        seterrorState(error);
    }, [error]);

    const handleInvalid = (e:FormEvent) => {
        seterrorState( (e.nativeEvent.target as HTMLInputElement).validationMessage );
    }

    const fieldSetRef = useRef(null);

    const handleChange = (e) => {
        e.preventDefault();

        

        if(!fieldSetRef || !fieldSetRef.current) return;

        // Gather values
        const inputs:HTMLInputElement[] = Array.from( (fieldSetRef.current as HTMLFieldSetElement).querySelectorAll("input[data-name"));
        
        // Check all values
        let valid: boolean = true;
        var values:{[key:string]: {value: string, validity: boolean}} = {}
        inputs.forEach( i => {

            // Consider checking the value for numbers and use min/max for the boundaries which then can be passed as prop
            const validity = RegExp(i.pattern).test(i.value);
            if(validity === false) { valid = false }

            values[i.id] = {value: i.value, validity: validity};
        })

        //@ts-ignore
        if( valid === false) { seterrorState('Bitte prüfen Sie Ihre Angaben.'); return; }
        else if( valid === true && errorState ){ seterrorState( undefined ) }

        // Update value that is passed to the form
        if(
            values.jahr.value !== '' && 
            values.monat.value !== '' && 
            values.tag.value
        ) setCombinedValue( `${values.jahr.value}-${values.monat.value.padStart(2, "0")}-${values.tag.value.padStart(2, "0")}` )

    }

    return(
        <>

        <fieldset ref={fieldSetRef} className={ `kern-fieldset ${errorState ? 'kern-fieldset--error' : ''}`} aria-describedby="hint-text">
            <legend className="kern-label">
                {label}
                {required === false ? <span className="kern-label__optional">- Optional</span> : '' }
            </legend>
            {hint ?  <div className="kern-hint" id="hint-text">{hint}</div> : '' }
            <div className="kern-fieldset__body kern-fieldset__body--horizontal">
                <div className="kern-form-input">
                    <label className="kern-label" htmlFor="tag">Tag</label>
                    <input 
                        className={`${styles.numericInput} kern-form-input__input kern-form-input__input--width-2 ${errorState ? 'kern-form-input__input--error' : ''}`}
                        id="tag" 
                        data-name="tag" 
                        type="text" 
                        pattern="^(0?[1-9]|[12][0-9]|3[01])?$"
                        inputMode="numeric"
                        disabled={disabled}
                        readOnly={readonly}
                        onBlur={handleChange} 
                    />
                </div>
                <div className="kern-form-input">
                    <label className="kern-label" htmlFor="monat">Monat</label>
                    <input 
                        className={`${styles.numericInput} kern-form-input__input kern-form-input__input--width-2 ${errorState ? 'kern-form-input__input--error' : ''}`}
                        id="monat" 
                        data-name="monat" 
                        type="text" 
                        pattern="^(1[0-2]|[1-9])?$"
                        inputMode="numeric"
                        disabled={disabled}
                        readOnly={readonly}
                        onBlur={handleChange} 
                    />
                </div>
                    <div className="kern-form-input">
                    <label className="kern-label" htmlFor="jahr">Jahr</label>
                    <input 
                        className={`${styles.numericInput} kern-form-input__input kern-form-input__input--width-4 ${errorState ? 'kern-form-input__input--error' : ''}`}
                        id="jahr" 
                        data-name="jahr" 
                        type="text"
                        pattern="^(19[0-9]{2}|20[0-9]{2}|2100)?$"                         
                        inputMode="numeric"
                        disabled={disabled}
                        readOnly={readonly}
                        onBlur={handleChange}
                    />
                </div>
            </div>
            {errorState ? <p className="kern-error" id="kern-error" role="alert">
                <span className="kern-icon kern-icon--danger kern-icon--md" aria-hidden="true"></span>
                <span className="kern-body">{errorState}</span>
            </p>: ''}
        </fieldset>
        <input type="hidden" id={id} name={name || id} value={combinedValue||''} onInvalid={handleInvalid}/>

        </>
    )

}

export default KernInputDate