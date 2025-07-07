import { useEffect, useState, type FormEvent } from "react";
import { InputType } from "../../types/InputType";

function KernInput ({
    id,
    label,
    value,
    defaultValue,
    type = 'text',
    disabled = false,
    readonly = false,
    required = false,
    hint,
    error,
    onChange,
    autoFocus
 }:{
    id: string,
    label: string,
    value?: any,
    defaultValue?: any,
    type?: string,
    disabled?: boolean,
    readonly?: boolean,
    required?:boolean,
    hint?: string,
    error?: string,
    onChange?: any,
    autoFocus?:boolean
}){

    const validInputTypes = Object.values( InputType );
    const validInputType = validInputTypes.includes(type) ? type : 'text';
    const autocomplete = ['email'].includes(type) ? type : null;


    // Handle validity
    const [errorState, seterrorState] = useState(error);
    useEffect(() => {
        seterrorState(error);
    }, [error]);

    const handleInvalid = (e:FormEvent) => {
        seterrorState( (e.nativeEvent.target as HTMLInputElement).validationMessage );
    }

    return (
        <div className={ `kern-form-input ${errorState ? 'kern-form-input--error' : ''}`} >
            <label className="kern-label" htmlFor={id}>
                {label}
                {required === false ? <span className="kern-label__optional">- Optional</span> : '' }
            </label>
            {hint ? <div className="kern-hint" id="input-file-hint">{hint}</div> : '' }
            <input 
                className= { `kern-form-input__input ${errorState ? 'kern-form-input__input--error' : ''}`} 
                id={id} 
                value={value}
                defaultValue={defaultValue}
                onChange={ onChange }
                name={id} 
                type={validInputType} 
                disabled={disabled}
                readOnly={readonly}
                autoFocus={autoFocus}
                required={required}
                {...(autocomplete !== null ? { autoComplete: autocomplete } : {})}
                {...(hint ? { "aria-describedby": "input-file-hint" } : {})}
                onInvalid={ handleInvalid } 
                 />

            {errorState ? <p className="kern-error" id="file-input-error" role="alert">
                <span className="kern-icon kern-icon--danger kern-icon--md" aria-hidden="true"></span>
                <span className="kern-body">{errorState}</span>
            </p>: ''}
        </div>
    )

}

export default KernInput;