import { Orientation } from "../../types/Orientation"

function KernFieldset ({
    label,
    orientation,
    error,
    hint,
    children
} : {
    label?: string,
    orientation?: string,
    error?: string,
    hint?: string,
    children: any,

}) {

    const validOrientationNames = Object.values(Orientation);
    const validOrientationClass = validOrientationNames.includes(orientation || '') ? `kern-fieldset__body--${orientation}` : '';

    return (

        <fieldset className={`kern-fieldset ${error ? 'kern-fieldset--error' : ''}`}>
            <legend className="kern-label">
                {label}
            </legend>
            {hint ? <div className="kern-hint" id="kern-hint">{hint}</div> : '' }
            <div className={`kern-fieldset__body ${validOrientationClass}`}>
                {children}
            </div>
            {error ? <p className="kern-error" id="textarea-error" role="alert">
                <span className="kern-icon kern-icon--danger kern-icon--md" aria-hidden="true"></span>
                <span className="kern-body">{error}</span>
            </p>: ''}
        </fieldset>

    )

}

export default KernFieldset