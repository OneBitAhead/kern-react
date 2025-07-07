import { useRef } from 'react';
import { useDialog } from '../components/addons/DialogContext';
import { KernButton, KernForm, KernInput, KernHeading, KernText } from '../components/kern';
import type { KernFormMethods } from "../components/kern/KernForm";


export default function KernLoaderExample() {

  const { handleOpen, setTitle, setBody, setButtons, openModal} = useDialog();


  function showDialog1() {

    setTitle("Sicher?");
    setBody(<> <p className="kern-body">  Wollen Sie wirklich die <b>Mail</b> absenden? </p></>);
    setButtons([{ "id": "cancel", "name": "Abbrechen" }, {
      "id": "ok", "primary": true, "name": "Ok", "callback": () => {
        console.log("Stop...")
        return false;
      }
    }]);

    handleOpen();

  }

  function showDialog2() {

    setTitle("Speichern");
    setBody(<><p className="kern-body"> Wollen Sie wirklich den Datensatz mit ID <b>331</b> speichern? </p></>);
    setButtons([]);

    handleOpen();

  }

  const formRef = useRef(null);

  function showDialog3() {

    setTitle("Form");
    setBody(<>
      <KernForm ref={formRef}>
        <div className="mb-4"><KernInput id="vorname" label="Vorname" /></div>
      </KernForm>
    </>);
    setButtons([{ "id": "cancel", "name": "Abbrechen" }, {
      "id": "ok", "primary": true, "name": "Speichern", "callback": () => {

        const formValues = (formRef.current as KernFormMethods).getValues();
        console.log(formValues);

      }
    }]);

    handleOpen();

  }




  return (
    <>

      <KernHeading>Dialog</KernHeading>
      <KernText>...</KernText>


      <KernButton text="Mail senden" onClick={showDialog1}></KernButton>&nbsp;
      <KernButton text="Speichern" onClick={showDialog2}></KernButton>&nbsp;
      <KernButton text="Form" onClick={showDialog3}></KernButton>&nbsp;

      <br/><br />
      <KernButton text="Direct Open" onClick={()=> {
        openModal("Direct Open", <>Ich bin der Inhalt des Modals und wurde direkt hinzugefügt!<br/>WOW!<br/></>,[])
      }}></KernButton>
      







    </>
  );

}
