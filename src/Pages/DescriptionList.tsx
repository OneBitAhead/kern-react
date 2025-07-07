
import { KernDescriptionList, KernHeading, KernText } from '../components/kern';

function Elements() {


  var descriptionList = {
    "Name": "Musterperson",
    "Vorname": "Vorname",
    "E-Mail": "kim@musterperson.de",
    "Adresse": "Musterstraße 2, 23456 Musterdorf"
  };



  return (
    <>

      <KernHeading>Description List</KernHeading>
      <KernText>...</KernText>

      <div style={{padding:"15px"}}>
        <KernDescriptionList details={descriptionList}></KernDescriptionList>
      </div>
      <br/>
      <div style={{padding:"15px"}}>
        <KernDescriptionList details={descriptionList} columns={true}></KernDescriptionList>
      </div>



    </>
  );

}

export default Elements;