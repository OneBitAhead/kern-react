// React-Funktionalität
import { useEffect, useRef, type FormEvent } from 'react';

// UI-Komponenten
import KernForm from "../../../components/kern/KernForm";
import type { KernFormMethods } from "../../../components/kern/KernForm";
import KernInput from "../../../components/kern/KernInput";
import KernColumn from '../../../components/kern/KernColumn';
import KernContainer from '../../../components/kern/KernContainer';
import KernRow from '../../../components/kern/KernRow';

// Anwendungs-Funktionalität
import useTrashCanWizardStore from './TrashCanWizardStore';


const tcPage2 = () => {

    const formRef = useRef(null);


    useEffect(()=>{
      useTrashCanWizardStore.setState({leavingPageFunction: ( page: string|number )=>{

        // Only validate form when next page is targeted
        if(page !== 'next') return true;
        
        if(!formRef || !formRef.current) return true;

        // reportValidity will cause inputs to show errors by themselves
        const isValid = (formRef.current as KernFormMethods).reportValidity();
        return isValid

      }})
      // delete leaving function
      return ()=>{
         useTrashCanWizardStore.setState({leavingPageFunction:null});
      } 
    },[]);


    // State defaults
    const vorname = useTrashCanWizardStore((state:any) => state.vorname);
    const nachname = useTrashCanWizardStore((state:any) => state.nachname);
    const strasse = useTrashCanWizardStore((state:any) => state.strasse);
    const hausnummer = useTrashCanWizardStore((state:any) => state.hausnummer);
    const postleitzahl = useTrashCanWizardStore((state:any) => state.postleitzahl);
    const stadt = useTrashCanWizardStore((state:any) => state.stadt);


    return(
      <>

      <div  className="mt-4" style={{opacity: .6}}>
      <h5 className="kern-heading-small">Angaben zum Haushalt</h5>
      </div>

      <div  className="mb-4 mt-4">
        <h3 className="kern-heading-large">Persönliche Angaben</h3>
      </div>

      <section className="mb-4">

        <KernForm ref={formRef}>

          <KernContainer>

            <KernRow>
              <KernColumn><KernInput id="vorname" label="Vorname" onChange={(e:FormEvent)=>{ useTrashCanWizardStore.setState({vorname: (e.nativeEvent.target as HTMLInputElement).value}); }} defaultValue={vorname} autoFocus /></KernColumn>
              <KernColumn><KernInput id="nachname" label="Nachname" onChange={(e:FormEvent)=>{ useTrashCanWizardStore.setState({nachname: (e.nativeEvent.target as HTMLInputElement).value}); }} required={true} defaultValue={nachname}/></KernColumn>

            </KernRow>

            <div className='mt-4'>
              <KernRow>
                <KernColumn sizes={{lg: 8}}><KernInput id="strasse" label="Straße" onChange={(e:FormEvent)=>{ useTrashCanWizardStore.setState({strasse: (e.nativeEvent.target as HTMLInputElement).value}); }} required={true} defaultValue={strasse}/></KernColumn>
                <KernColumn sizes={{lg: 4}}><KernInput id="hausnummer" label="Hausnummer" onChange={(e:FormEvent)=>{ useTrashCanWizardStore.setState({hausnummer: (e.nativeEvent.target as HTMLInputElement).value}); }} required={true} defaultValue={hausnummer}/></KernColumn>

              </KernRow>
            </div>

            <div className='mt-4'>
              <KernRow>
                <KernColumn sizes={{lg: 6, xl: 4}}><KernInput id="postleitzahl" label="Postleitzahl"  onChange={(e:FormEvent)=>{ useTrashCanWizardStore.setState({postleitzahl: (e.nativeEvent.target as HTMLInputElement).value}); }} required={true} defaultValue={postleitzahl} /></KernColumn>
                <KernColumn sizes={{lg: 6, xl: 8}}><KernInput id="stadt" label="Stadt"  onChange={(e:FormEvent)=>{ useTrashCanWizardStore.setState({stadt: (e.nativeEvent.target as HTMLInputElement).value}); }} required={true} defaultValue={stadt} /></KernColumn>

              </KernRow>
            </div>

          </KernContainer>
      

        </KernForm>

      </section>
     
      </>
    );

}


export default tcPage2; 