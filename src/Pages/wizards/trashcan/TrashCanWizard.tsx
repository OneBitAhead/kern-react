import { useEffect } from 'react';

// Store and Dialog
import useTrashCanWizardStore from "./TrashCanWizardStore";
import { useDialog } from '../../../components/addons/DialogContext';


// Kern Components
import KernLink from "../../../components/kern/KernLink";
import KernProgress from "../../../components/kern/KernProgress";
// Pages
import TcPage1 from "./TcPage1";
import TcPage2 from "./TcPage2";
import TcPage3 from "./TcPage3";
import TcPage4 from "./TcPage4";
import KernButton from "../../../components/kern/KernButton";





function TrashCanWizard () {

  // Navigation in the wizard
  const pages = useTrashCanWizardStore((state:any) => state.pages);
  const page = useTrashCanWizardStore((state:any) => state.page);
  const nextPage = useTrashCanWizardStore((state:any) => state.nextPage);
  const goToPage = useTrashCanWizardStore((state:any) => state.goToPage);
  const hasNext = useTrashCanWizardStore((state:any) => state.hasNext);  
  const previousPage = useTrashCanWizardStore((state:any) => state.previousPage);  
  const hasPrevious = useTrashCanWizardStore((state:any) => state.hasPrevious);  

  const { openModal } = useDialog();


  /*
  useEffect(() => {
    const handler = (data) => {
      console.log('Received:', data);
    };
    eventEmitter.on('leavingPage', handler);
    return () => eventEmitter.off('leavingPage', handler); // Cleanup
  }, []);
  */


  function renderButtons(){

    if(page === 1){

      return (<><KernButton onClick={nextPage} text="Bearbeitung starten" iconPosition="right" icon="arrow-forward" variant="primary"></KernButton></>)

    } else if (page === pages){

     return (<>
          {(hasPrevious()) ?  <KernButton onClick={previousPage} text="Zurück" icon="arrow-back" variant="secondary"></KernButton>: <KernButton disabled text="Zurück" icon="arrow-back" variant="secondary"></KernButton>}
          &nbsp;&nbsp;
          <KernButton onClick={()=>{

             openModal("Mullgefäße verbindlich um/melden", <>Mit Bestätigung des Dialogs werden die Müllgefäße entsprechend angemeldet/umgemeldet.<br/></>,
              [{ "id": "cancel", "name": "Abbrechen" }, {
                    "id": "ok", "primary": true, "name": "Bestätigen", "callback": () => {             
                    
              
                    }
                  }]
             )
      
      
          }}  text="Absenden" icon="mail" variant="primary"></KernButton>
          </>
        )

    } else {

      

        return (<>
          {(hasPrevious()) ?  <KernButton onClick={previousPage} text="Zurück" icon="arrow-back" variant="secondary"></KernButton>: <KernButton disabled text="Zurück" icon="arrow-back" variant="secondary"></KernButton>}
          &nbsp;&nbsp;
          {(hasNext()) ? <KernButton onClick={nextPage} text="Weiter" iconPosition="right" icon="arrow-forward" variant="primary"></KernButton>: <KernButton disabled text="Weiter" iconPosition="right" icon="arrow-forward" variant="primary"></KernButton>}
          </>
        )


    }



    

  }



  return(
      <>

<section style={{margin:"auto", maxWidth:"800px"}}>

        {/*  Nur wenn nicht Seite 1  */}  
        {(page !== 1) ? <>
            <KernLink href="#" onClick={()=>{goToPage(1)}} text="Zur Übersicht"></KernLink>
            <KernProgress id="trashcan" text={`Schritt ${page-1} von ${pages-1}`} value={page-1} max={pages-1}></KernProgress>
         </>:''}

    
      {(page === 1) ? <TcPage1/>: ''}
      {(page === 2) ? <TcPage2/>: ''}
      {(page === 3) ? <TcPage3/>: ''}
      {(page === 4) ? <TcPage4/>: ''}



      {renderButtons()}        

</section>
                      
      </>
    );

}

export default TrashCanWizard;