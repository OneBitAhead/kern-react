function KernTable({
    caption,
    columns = [],
    rows = [],
    striped = false,
    small = false,
    responsive = false
} : {
    caption?: string,
    columns: (string | {id?:string, label: string, type?: string})[],
    rows: any;
    striped?: boolean,
    small?: boolean,
    responsive?: boolean
}
){

    return (
        <table className={`kern-table ${striped === true ? 'kern-table--striped' : ''} ${small === true ? 'kern-table--small' : ''} ${responsive === true ? 'kern-table--responsive' : ''}`}>
            {caption ? <caption className="kern-title">{caption}</caption> : '' }

            <thead className="kern-table__head">
                <tr className="kern-table__row">
                    {columns.map((column, index: number) => (
                        <th scope="col" key={index} className={`kern-table__header ${ typeof column !== "string" ? `kern-table__header--${column.type}` :''}`}>{ typeof column !== "string" ? column.label : column}</th>
                    ))}
                </tr>
            </thead>

            <tbody className="kern-table__body">
                {rows.map((row: {[key:string]: string}, rowIndex: number) => (
                <tr key={rowIndex} className="kern-table__row">
                    {columns.map((column, index: number) => (
                        <td key={rowIndex + '/' + index} className={`kern-table__cell ${ typeof column !== "string" ? `kern-table__cell--${column.type}` : ``}`}>{row[ ( typeof column !== 'string' ) ? (column.id || column.label ) : column] || ''}</td>
                    ))}
                </tr>
                ))}
            </tbody>

        </table>
    )

} 

export default KernTable;
