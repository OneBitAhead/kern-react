function KernTextarea ({
    id,
    label,
    value,
    disabled = false,
    readonly = false,
    required = false,
    hint,
    error
} : {
    id: string,
    label: string,
    value?: any,
    disabled?: boolean,
    readonly?: boolean,
    required?:boolean,
    hint?: string,
    error?: string
}) {

    return (
        <div className={ `kern-form-input ${error ? 'kern-form-input--error' : ''}`} >
            <label className="kern-label" htmlFor={id}>
                {label}
                {required === false ? <span className="kern-label__optional">- Optional</span> : '' }
            </label>
            {hint ? <div className="kern-hint" id="kern-hint">{hint}</div> : '' }
            <textarea 
                className= { `kern-form-input__input ${error ? 'kern-form-input__input--error' : ''}`} 
                id={id} 
                name={id}
                disabled={disabled}
                readOnly={readonly}
            >{value}</textarea>
             {error ? <p className="kern-error" id="textarea-error" role="alert">
                <span className="kern-icon kern-icon--danger kern-icon--md" aria-hidden="true"></span>
                <span className="kern-body">{error}</span>
            </p>: ''}
        </div>
    )


}

export default KernTextarea;
