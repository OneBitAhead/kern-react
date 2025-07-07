// React-Funktionalität
import { useEffect, useRef } from 'react';


// UI-Komponenten
import KernForm, { type KernFormMethods } from "../../../components/kern/KernForm";
import KernContainer from '../../../components/kern/KernContainer';
import KernFieldset from '../../../components/kern/KernFieldset';
import KernColumn from '../../../components/kern/KernColumn';
import KernRow from '../../../components/kern/KernRow';
import KernRadioGroup from '../../../components/kern/KernRadioGroup';


// Anwendungs-Funktionalität
import useTrashCanWizardStore from "./TrashCanWizardStore";

import styles from './TcPage3.module.css';

export default function tcPage3 () {

  const formRef = useRef(null);

  useEffect(()=>{
    useTrashCanWizardStore.setState({leavingPageFunction: ()=>{
      if(!formRef || !formRef.current) return true;

      const formData = (formRef.current as KernFormMethods).getValues();
       Array.from(formData.entries()).forEach( (entry:any) => {
        let object:{[key:string]: string} = {}
        object[entry[0]] = entry[1];
        useTrashCanWizardStore.setState(object);
      });

      return true;

    }})
    // delete leaving function
    return ()=>{
       useTrashCanWizardStore.setState({leavingPageFunction:null});
    } 
  },[]);


  // State defaults
  const grau = useTrashCanWizardStore((state:any) => state.grau);
  const blau = useTrashCanWizardStore((state:any) => state.blau);
  const gelb = useTrashCanWizardStore((state:any) => state.gelb);
  const gruen = useTrashCanWizardStore((state:any) => state.gruen);
  

    return(
      <>
      <div  className="mt-4" style={{opacity: .6}}>
        <h5 className="kern-heading-small">Auswahl von Müllgefäßen</h5>
      </div>

      <div  className="mb-4 mt-4">
        <h3 className="kern-heading-large">Angaben zur Größe verfügbarer Müllgefäße</h3>
      </div>

      <section className="mb-4">
 


      <KernForm ref={formRef}>

      <div className="mb-4">
        <KernContainer>
          <KernRow align='center'>
            <KernColumn sizes={{xxl: 2, sm: 2}}>
              <svg viewBox="0 0 200 300" className={`icon ${styles.gray }`} style={{transform: "scale(.5)"}}><use href="#trash" /></svg>
            </KernColumn>
            <KernColumn sizes={{xxl: 10, sm: 10}}>
              <KernFieldset label="Graue Tonne" orientation="horizontal">

              <KernRadioGroup
                  name="grau"
                  autoFocus={true}
                  items={[
                    { "id": "grau-0", "label": "keine", "value": "0" },
                    { "id": "grau-80", "label": "80 Liter", "value": "80" },
                    { "id": "grau-120", "label": "120 Liter", "value": "120" }
                  ]} 
                  selected={grau}
                />


              </KernFieldset>
            </KernColumn>
          </KernRow>
        </KernContainer>
      </div>


      <div className="mb-4">
        <KernContainer>
          <KernRow align='center'>
            <KernColumn sizes={{xxl: 2, sm: 2}}>
              <svg viewBox="0 0 200 300" className={`icon ${styles.yellow }`} style={{transform: "scale(.5)"}}><use href="#trash" /></svg>
            </KernColumn>
            <KernColumn sizes={{xxl: 10, sm: 10}}>
              <KernFieldset label="Gelbe Tonne" orientation="horizontal">

                <KernRadioGroup
                  name="gelb"
                  items={[
                    { "id": "gelb-0", "label": "keine", "value": "0" },
                    { "id": "gelb-80", "label": "80 Liter", "value": "80" },
                    { "id": "gelb-120", "label": "120 Liter", "value": "120" }
                  ]} 
                  selected={gelb}
                />
              </KernFieldset>
            </KernColumn>
          </KernRow>
        </KernContainer>
      </div>


      <div className="mb-4">
        <KernContainer>
          <KernRow align='center'>
            <KernColumn sizes={{xxl: 2, sm: 2}}>
              <svg viewBox="0 0 200 300" className={`icon ${styles.green }`} style={{transform: "scale(.5)"}}><use href="#trash" /></svg>
            </KernColumn>
            <KernColumn sizes={{xxl: 10, sm: 10}}>
              <KernFieldset label="Grüne Tonne" orientation="horizontal">

              <KernRadioGroup
                  name="gruen"
                  items={[
                    { "id": "gruen-0", "label": "keine", "value": "0" },
                    { "id": "gruen-80", "label": "80 Liter", "value": "80" },
                    { "id": "gruen-120", "label": "120 Liter", "value": "120" }
                  ]} 
                  selected={gruen}
                />

              </KernFieldset>
            </KernColumn>
          </KernRow>
        </KernContainer>
      </div>

      <div className="mb-4">
        <KernContainer>
          <KernRow align='center'>
            <KernColumn sizes={{xxl: 2, sm: 2}}>
              <svg viewBox="0 0 200 300" className={`icon ${styles.blue }`} style={{transform: "scale(.5)"}}><use href="#trash" /></svg>
            </KernColumn>
            <KernColumn sizes={{xxl: 10, sm: 10}}>
              <KernFieldset label="Blaue Tonne" orientation="horizontal">

              <KernRadioGroup
                  name="blau"
                  items={[
                    { "id": "blau-0", "label": "keine", "value": "0" },
                    { "id": "blau-80", "label": "80 Liter", "value": "80" },
                    { "id": "blau-120", "label": "120 Liter", "value": "120" }
                  ]} 
                  selected={blau}
                />

              </KernFieldset>
            </KernColumn>
          </KernRow>
        </KernContainer>
      </div>

      </KernForm>
      </section>
     
      </>
    );

}
