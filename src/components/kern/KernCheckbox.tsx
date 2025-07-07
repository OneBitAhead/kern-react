function KernCheckbox( {
    id,
    label,
    name,
    error
} : {
    id: string,
    label?: string,
    name?: string,
    error?: boolean
}){

    return (
        <div className={ `kern-form-check  ${error ? 'kern-form-check__checkbox--error' : ''}`}>
            <input className="kern-form-check__checkbox" id={id} name={name || id} type="checkbox" />
            <label className="kern-label" htmlFor={id}>
                {label}
            </label>
        </div>
    )

}

export default KernCheckbox;