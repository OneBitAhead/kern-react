import { KernAlert, KernHeading, KernText } from '../components/kern';



function Elements () {

    return(
      <>   

        <KernHeading>Alerts</KernHeading>   
        <KernText>...</KernText>   

        <KernAlert variant="info" text="Info"/><br/>        
        <KernAlert variant="success" text="Success"/><br/>
        <KernAlert variant="warning" text="Warning"/><br/>
        <KernAlert variant="danger" text="Danger"/><br/>

        <KernAlert variant="info" text="Info" body="Lorem ipsum"/><br/>
        <KernAlert variant="success" text="Success"  body="Lorem ipsum"/><br/>
        <KernAlert variant="warning" text="Warning"  body="Lorem ipsum"/><br/>
        <KernAlert variant="danger" text="Danger"  body="Lorem ipsum" linkIcon='mail' linkHref="http://www.spiegel.de" linkText="A new link"/>
  
      
      </>
    );

}

export default Elements;