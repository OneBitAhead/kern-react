
import { KernBadge, KernHeading, KernText} from '../components/kern';


function Elements () {


   



    return(
      <>
      
        <KernHeading>Badge</KernHeading>   
        <KernText>...</KernText>   

        <KernBadge variant="info" text="Info Text ..."/>&nbsp;
        <KernBadge variant="success" text="Success"/>&nbsp;
        <KernBadge variant="warning" text="Warning"/>&nbsp;
        <KernBadge variant="danger" text="Danger"/>
        
      
      </>
    );

}

export default Elements;