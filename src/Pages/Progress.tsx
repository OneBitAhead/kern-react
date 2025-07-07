import { KernProgress, KernHeading, KernText } from "../components/kern";


export default function KernLoaderExample () {

    return(
      <>
        
        <KernHeading>Progress</KernHeading>   
        <KernText>...</KernText>   

        <KernProgress id="12443" text="Schritt 3 von 33" value={3} max={33}></KernProgress>
        <KernProgress id="124435"  value={3} max={333}></KernProgress>
        
        


      </>
    );

}
