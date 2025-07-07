function KernRadio( {
    id,
    label,
    name,
    value,
    checked = false,
    error,
    onChange,
    autoFocus = false
} : {
    id: string,
    label?: string,
    name?: string,
    value?: string,
    checked?: boolean,
    error?: boolean,
    onChange?: any,
    autoFocus?: boolean
}){

    return (
        <div className={ `kern-form-check  ${error ? 'kern-form-check__radio--error' : ''}`}>
            <input 
                className="kern-form-check__radio" 
                id={id} 
                value={value || id} 
                checked={checked} 
                name={name || id} 
                type="radio" 
                onChange={onChange}
                autoFocus={autoFocus}
            />

            <label className="kern-label" htmlFor={id}>
                {label}
            </label>
        </div>
    )

}

export default KernRadio;