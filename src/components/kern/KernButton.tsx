import KernIcon from './KernIcon'
import { Variant } from '../../types/Variant'; 
import { ButtonType } from '../../types/ButtonType';


function KernButton ({ 
  text, 
  variant = "secondary", 
  type = "button",
  iconPosition, 
  icon, 
  alt,
  ...rest }: 
  { 
    text:string, 
    variant?:string, 
    type?: string,
    iconPosition?:string, 
    icon?:string, 
    alt?:string
  }) {

    const validClassNames = Object.values(Variant);
    const validClassName = validClassNames.includes(variant) ? `kern-btn--`+variant : 'kern-btn--secondary';

    const validButtonTypes = Object.values( ButtonType );
    const validButtonType = validButtonTypes.includes(type) ? type : 'button';


    // Not text no icon?
    if((!text || text === "") && (!icon || icon=== "")) {
      console.error("KERN: Button braucht ein 'text' oder ein 'icon'");
    }
    // Kern rule: if NO text, alt is needed
    if((!text || text === "") && (!alt || alt=== "")) {
      console.error("KERN: iconOnly Button braucht ein 'alt' Text");
    }

    return(
      //@ts-ignore
      <button aria-label={alt} type={validButtonType} className={`kern-btn ${validClassName || ''}`} {...rest}>
        {(icon && iconPosition !== "right") ? <KernIcon icon={icon}/>:''}
        <span className="kern-label">{ text }</span>
        {(icon && iconPosition === "right") ? <KernIcon icon={icon}/>:''}
       </button>
    );

}

export default KernButton;