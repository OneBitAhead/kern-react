import { KernTable, KernHeading, KernText } from "../components/kern";

function TableExample() {

    const columns = [
        { id: 'dienstleistung', label: 'Dienstleistung' },
        { id: 'gebuehr', label: 'Gebühr 2025' },
        { id: 'erhoehung', label: 'Erhöhung', type: 'numeric' }
    ];

    const rows: any[] = [
        { dienstleistung: 'Hausmüllentsorgung', gebuehr: '3,30 € pro Liter (wöchentliche Leerung)', erhoehung: '4,8%' },
        { dienstleistung: 'Reinigung öffentlicher Wege', gebuehr: '2,69 € pro m', erhoehung: '5,6%' },
        { dienstleistung: 'Schmutzwasserbeseitigung', gebuehr: '2,41 € pro Kubikmeter', erhoehung: '4,3%' },
        { dienstleistung: 'Niederschlagswasserbeseitigung', gebuehr: '0,83 € pro m² befestigter Fläche', erhoehung: '3,7%' }

    ]


    return (

        <>
        <KernHeading>Table</KernHeading>   
        <KernText>...</KernText>   

        <KernTable columns={columns} rows={rows} striped={true}></KernTable>
        </>
    )

}

export default TableExample;