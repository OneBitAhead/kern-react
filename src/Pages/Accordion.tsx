
import { KernAccordion, KernIcon, KernHeading, KernText } from './../components/kern';

function Accordion () {


    var accordion:any = [{
      title: "Welche Voraussetzungen muss ich erfüllen?",
      body: "Zur Nutzung dieses Dienstes benötigen Sie ein einfaches Servicekonto."
    },
    {
      title: "Wie hoch sind die Kosten",
      body: <>Die Online-Anmeldung kostet 31 Euro (ab 2024). <KernIcon icon='mail'/> Damit sparen Sie gegenüber der klassischen Anmeldung im Bezirksamt erheblich.</>
    }
  ]



    return(
      <>

        <KernHeading>Accordion</KernHeading>   
        <KernText>...</KernText>   
      

        <KernAccordion details={accordion}></KernAccordion>

      
      </>
    );

}

export default Accordion;