import { useEffect, useState, type FormEvent } from "react";

function KernSelect({
    id,
    label,
    disabled = false,
    required = false,
    hint,
    error,
    children
} : {
    id: string,
    label: string,
    disabled?: boolean,
    readonly?: boolean,
    required?: boolean,
    error?: string,
    hint?: string,
    children: any

}){

    // Handle validity
    const [errorState, seterrorState] = useState(error);
    useEffect(() => {
        seterrorState(error);
    }, [error]);

    const handleInvalid = (e:FormEvent) => {
        seterrorState( (e.nativeEvent.target as HTMLInputElement).validationMessage );
    }

    return (
        <div className={ `kern-form-input ${errorState ? 'kern-form-input--error' : ''}`}>
            <label className="kern-label" htmlFor={id}>
                {label}
                {required === false ? <span className="kern-label__optional">- Optional</span> : '' }
            </label>
            {hint ? <div className="kern-hint" id="select-hint">{hint}</div> : '' }
            <div className="kern-form-input__select-wrapper">
                <select 
                    className={ `kern-form-input__select ${errorState ? 'kern-form-input__select--error' : ''}`}
                    id={id}
                    name={id}
                    disabled={disabled}
                    {...(hint ? { "aria-describedby": "select-hint" } : {})}
                    onInvalid={ handleInvalid } 
                    >
                    {children}
                </select>
            </div>
            {errorState ? <p className="kern-error" id="kern-input-error" role="alert">
                <span className="kern-icon kern-icon--danger kern-icon--md" aria-hidden="true"></span>
                <span className="kern-body">{errorState}</span>
            </p>: ''}
        </div>
    )

}

export default KernSelect;