import { KernButton, KernCard, KernHeading, KernText, KernContainer, KernColumn, KernRow } from '../components/kern';

function Elements() {



  return (
    <>

      <KernHeading>Card</KernHeading>
      <KernText>...</KernText>

      <KernContainer>
        <KernRow>
        <KernColumn>
          <KernCard title="Hello World" footer={<><KernButton text="Do something"></KernButton></>} body="Hier werden soviele Informationen zur Verfügung gestellt, wie benötigt und nicht mehr. Ein Maximum von 150 characters empfohlen."></KernCard>
        </KernColumn>
        <KernColumn>
          <KernCard title="Hello World" footer={<><KernButton text="Do something"></KernButton></>} body="Hier werden soviele Informationen zur Verfügung gestellt, wie benötigt und nicht mehr. Ein Maximum von 150 characters empfohlen."></KernCard>
          
        </KernColumn>
        <KernColumn>
          <KernCard title="Hello World" footer={<><KernButton text="Do something"></KernButton></>} body="Hier werden soviele Informationen zur Verfügung gestellt, wie benötigt und nicht mehr. Ein Maximum von 150 characters empfohlen."></KernCard>  
        </KernColumn>
        </KernRow>


      </KernContainer>





    </>
  );

}

export default Elements;