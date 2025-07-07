import { Status } from "../../types/Status";

export type KernTaskListItem = {
    number?: number
    label: string,
    path?: string,
    badge?: {
        label: string
        status?: string 
    }
}

export type KernTaskListEntry = {

    heading: string,
    items: KernTaskListItem[]

};


function KernTaskList(
{ 
    items = []
} : { 
    items: KernTaskListEntry[]
}){

    const validStatusNames = Object.values( Status )

    return (
        <div className="kern-task-list">
            {items.map((entry:KernTaskListEntry, entryIndex:number) => {
                return (
                    
                <div key={entryIndex}>
                    {entry.heading ? <div key={entryIndex} className="kern-task-list__header">
                        <h2 className="kern-heading-medium">{entry.heading}</h2>
                    </div> : ''}

                    <ul className="kern-task-list__list">
                    {entry.items.map((item:KernTaskListItem, itemIndex:number) => {
                        return (<li key={ [entryIndex, '--', itemIndex].join()}className="kern-task-list__item">
                            {item.number ? <span className="kern-number">{item.number}</span> : ''}
                            <div className="kern-task-list__title" id="task1-title">
                            {item.path ? 
                                <a href="#" className="kern-link kern-link--stretched" aria-describedby="task1-status">{item.label}</a> :
                                <p className="kern-body">{item.label}</p>
                            }
                            {item.badge && validStatusNames.includes(item.badge.status || '') ? 
                              <div className="kern-task-list__status" id="task1-status">
                                <span className={`kern-badge kern-badge--${item.badge.status}`}>
                                  <span className={`kern-icon kern-icon--sm kern-icon--${item.badge.status}`} aria-hidden="true"></span>
                                  <span className="kern-label kern-label--small">{item.badge.label}</span>
                                </span>
                              </div>
                              : ''}
                            </div>
                          </li>)
                    })}
                    </ul>
                </div>

                )
            })}

        </div>

    )

}

export default KernTaskList;