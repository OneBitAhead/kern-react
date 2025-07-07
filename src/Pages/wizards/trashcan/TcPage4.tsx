import useTrashCanWizardStore from "./TrashCanWizardStore";

import KernSummary from "../../../components/kern/KernSummary";

export default function tcPage4 () {


    // State defaults
    const vorname = useTrashCanWizardStore((state:any) => state.vorname);
    const nachname = useTrashCanWizardStore((state:any) => state.nachname);
    const strasse = useTrashCanWizardStore((state:any) => state.strasse);
    const hausnummer = useTrashCanWizardStore((state:any) => state.hausnummer);
    const postleitzahl = useTrashCanWizardStore((state:any) => state.postleitzahl);
    const stadt = useTrashCanWizardStore((state:any) => state.stadt);

    const person = [
      {"key": "Vorname", "value": vorname},
      {"key": "Nachname", "value": nachname},
      {"key": "Adresse", "value": `${strasse} ${hausnummer}, ${postleitzahl} ${stadt}`}
    ];


    // State defaults
    const grau = useTrashCanWizardStore((state:any) => state.grau);
    const blau = useTrashCanWizardStore((state:any) => state.blau);
    const gelb = useTrashCanWizardStore((state:any) => state.gelb);
    const gruen = useTrashCanWizardStore((state:any) => state.gruen);

    const tonnen = [
      {"key": "Grau", "value": (grau as string) == '0' ? 'keine' : `${grau} Liter`},
      {"key": "Gelb", "value": (gelb as string) == '0' ? 'keine' : `${gelb} Liter`},
      {"key": "Gruen", "value": (gruen as string) == '0' ? 'keine' : `${gruen} Liter`},
      {"key": "Blau", "value": (blau as string) == '0' ? 'keine' : `${blau} Liter`}
    ]


    return(
      <>

      <div  className="mt-4" style={{opacity: .6}}>
        <h5 className="kern-heading-small">Zusammenfassung</h5>
      </div>

      <div  className="mb-4 mt-4">
        <h3 className="kern-heading-large">Ihre Angaben auf einen Blick</h3>
      </div>

      <p>Ihre Registrierung ist fast abgeschlossen. Bitte kontrollieren Sie noch einmal Ihre Angaben, ehe Sie alles absenden.</p>

      <div className="mb-4">
        <KernSummary number={1} label="Angaben zum Haushalt" items={person}></KernSummary>
      </div>
     
      <div className="mb-4">
        <KernSummary number={2} label="Angaben zu Müllgefäßen" items={tonnen}></KernSummary>
      </div>

      </>
    );

}
