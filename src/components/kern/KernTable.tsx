type KernTableColumn = {
    id?: string,
    label: string,
    type?: string,
    scope?: string
};

function KernTable({
    caption,
    columns = [],
    rows = [],
    striped = false,
    small = false,
    responsive = false
} : {
    caption?: string,
    columns: (string | KernTableColumn)[],
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
                    {columns.map((column: string | KernTableColumn, index: number) => (
                        <th scope="col" key={index} className={`kern-table__header ${ typeof column !== "string" ? `kern-table__header--${column.type}` :''}`}>{ typeof column !== "string" ? column.label : column}</th>
                    ))}
                </tr>
            </thead>

            <tbody className="kern-table__body">
                {rows.map((row: {[key:string]: string}, rowIndex: number) => (
                <tr key={rowIndex} className="kern-table__row">
                    {columns.map((column : string | KernTableColumn, index: number) => {
                        
                        const Tag = ( typeof column !== "string" && typeof column.scope === 'string' ? 'th' : 'td');

                        // Assemble class names
                        var classNames:string[] = [`kern-table__cell`];
                        if( typeof column !== "string" && column.type ) classNames.push(`kern-table__cell--${column.type}`);
                        if( typeof column !== "string" && column.scope ) classNames.push(`kern-table__header`);
                        
                        return (
                            <Tag 
                                key={rowIndex + '/' + index} 
                                className={ classNames.join(" ") }
                                {...( ( typeof column !== "string" && ['row', 'col'].includes( column.scope || '' )) ? { "scope": column.scope } : {})}
                                >
                                    {row[ ( typeof column !== 'string' ) ? (column.id || column.label ) : column] || ''}
                            </Tag>
                        )
                    })}
                </tr>
                ))}
            </tbody>

        </table>
    )

} 

export default KernTable;
