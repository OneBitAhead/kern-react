import { Link } from "react-router-dom";
import KernIcon from "./KernIcon";

type SummaryItem = {
    key: string, 
    value: string
}

function KernSummary({
    number,
    label,
    items,
    action
} : {
    number?: number,
    label: string,
    items: SummaryItem[]
    action?: {path: string, label: string}
}){

    return (<div className="kern-summary">

        <div className="kern-summary__header"> 
          {number ? <span className="kern-number">{number}</span> : '' }
          <h3 className="kern-title kern-title--small" id={`title${ number ? `-${number}` : ``}`}>{label}</h3>
        </div>
        
        <div className="kern-summary__body">
          <dl className="kern-description-list">
            {items.map((item:SummaryItem, itemIndex:number) => {
                return (
                <div key={itemIndex} className="kern-description-list-item">
                    <dt className="kern-description-list-item__key">{item.key}</dt>
                    <dd className="kern-description-list-item__value">{item.value}</dd>
                </div>
                )
            })}
          </dl>
          {action ? 
            <div className="kern-summary__actions">
                <Link className="kern-link" to={action.path}>
                    <KernIcon icon="edit"></KernIcon>
                    {action.label}
                </Link>
            </div>
          : ''}
        </div>
        </div>)

}

export default KernSummary;
