import KernIcon from './KernIcon'
import { Status } from '../../types/Status';

function KernBadge ({ text, variant}:{ text:string, variant:string}) {

    const validClassNames = Object.values( Status );
    const validClassName = validClassNames.includes(variant) ? `kern-badge--`+variant : 'kern-badge--info';
    const icon = validClassNames.includes(variant) ? variant : 'info';    

    return(
      <>
      <span className={`kern-badge ${validClassName || ''}`}>
      {(icon) ? <KernIcon icon={icon}/>:''}      
      <span className="kern-label kern-label--small">{text}</span>
      </span>
      </>
    );

}

export default KernBadge;