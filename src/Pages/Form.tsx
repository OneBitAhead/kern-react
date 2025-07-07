import { useRef } from 'react';
import { KernHeading, KernText, KernButton, KernContainer, KernColumn, KernForm, KernRow, KernSelect, KernCheckbox, KernInput, KernInputDate, KernTextarea, KernFieldset } from "../components/kern";
import type { KernFormMethods } from "../components/kern/KernForm";
import KernRadioGroup from '../components/kern/KernRadioGroup';

function FormExample() {

    const formRef = useRef(null);

    const handleClick = (e: InputEvent) => {

        if (!formRef || !formRef.current) return;

        const isValid = (formRef.current as KernFormMethods).checkValidity();
        // const validity = (formRef.current as KernFormMethods).reportValidity();
        const formValues = (formRef.current as KernFormMethods).getValues();

    }

    return (
        <>

            <KernHeading>Form</KernHeading>
            <KernText>...</KernText>

            <KernContainer>

                <KernRow>

                    <KernColumn>


                        <KernForm ref={formRef}>

                            <div className="mb-4"><KernInput id="vorname" label="Vorname" /></div>
                            <div className="mb-4"><KernInput id="nachname" label="Nachname" /></div>
                            <div className="mb-4"><KernInput id="email" type="email" label="Email-Adresse" /></div>

                            <hr />

                            <KernSelect id="titel" name="titel" label="Titel">
                                <option value="">Bitte auswählen</option>
                                <option>Dr.</option>
                                <option>Prof.</option>
                                <option>Dipl.-Ing.</option>
                                <option>M.Sc.</option>
                            </KernSelect>


                            <KernInputDate id="geburtstag" label="Geburtstag"></KernInputDate>

                            <div className='mt-4'>
                                <KernCheckbox label="Ich akzeptiere die Allgemeinen Geschäftsbedingungen" id="agb" />
                            </div>

                            <div className='mt-4'>
                                <KernTextarea label="Beschreibung" id="beschreibung" />
                            </div>


                            <div className='mt-4'>

                            <KernFieldset label="Gruppe" orientation="horizontal">

                                <KernRadioGroup
                                    name="Gruppe"
                                    items={[
                                    { "id": "gruppe-0", "label": "Gruppe 0", "value": "0" },
                                    { "id": "gruppe-1", "label": "Gruppe 1", "value": "1" },
                                    { "id": "gruppe-2", "label": "Gruppe 2", "value": "2" }
                                    ]} 
                                    selected={'1'}
                                />


                            </KernFieldset>

                            </div>

                            <div className='mt-4'>

                                <KernButton onClick={handleClick} text="Submit"></KernButton>

                            </div>



                        </KernForm>

                    </KernColumn>
                </KernRow>

            </KernContainer>
        </>



    );

}

export default FormExample;