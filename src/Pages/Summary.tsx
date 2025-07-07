import { KernSummary, KernHeading, KernText } from "../components/kern"

function SummaryExample() {

    const person = [
        { "key": "Name", "value": "Musterperson" },
        { "key": "Vorname", "value": "Kim" },
        { "key": "E-Mail", "value": "kim@musterperson.de" },
        { "key": "Adresse", "value": "Musterstraße 2, 23456 Musterstadt" }
    ];

    const dates = [
        { "key": "Datum", "value": "24.05.2025" },
        { "key": "Uhrzeit", "value": "18:00 Uhr" }
    ];

    const action = {
        "label": "Bearbeiten",
        "path": "/summary/dates"
    }

    return (
        <>


            <KernHeading>Summary</KernHeading>
            <KernText>...</KernText>

            <KernSummary number={1} label="Angaben zur Person" items={person}></KernSummary>
            <KernSummary number={2} label="Veranstaltungszeitraum" items={dates} action={action}></KernSummary>
        </>
    )

}

export default SummaryExample