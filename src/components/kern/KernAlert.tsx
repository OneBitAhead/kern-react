import KernIcon from './KernIcon'
import KernLink from './KernLink'
import { Status } from '../../types/Status';

function KernAlert ({ text, variant, body, linkText, linkHref, linkIcon}:{ text:string, variant:string, body?:string, linkText?:string, linkHref?:string, linkIcon?:string}) {

    const validVariants = Object.values( Status );
    const type = validVariants.includes(variant) ? variant : 'info';

    const validClassName = `kern-alert--${type}`;
    const icon = type;

    return(
      <>
      <div className={`kern-alert ${validClassName || ''}`} role="alert">
      <div className="kern-alert__header">
        <KernIcon icon={icon}/>
        <span className="kern-title">{text}</span>  
      </div>
      {(body)? <>
        <div className="kern-alert__body">
        <p className="kern-body">{body}</p>
          {(linkText) ? <KernLink href={linkHref} size="small" text={linkText} icon={linkIcon}/> : ''}
        </div>
        </>
        :''}

      </div>

      </>
    );

}

export default KernAlert;