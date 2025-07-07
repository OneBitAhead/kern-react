import KernTaskList from '../../../components/kern/KernTaskList'
import type {KernTaskListEntry} from '../../../components/kern/KernTaskList'
import useTrashCanWizardStore from "./TrashCanWizardStore";


export default function TcPage1 () {


    const goToPage = useTrashCanWizardStore((state:any) => state.goToPage);
    const entries:KernTaskListEntry[] = [
      {
        heading: "", 
        items: [
          {
            number: 1,
            label: "Angaben zum Haushalt",
        
          },
          { 
            number: 2,
            label: "Auswahl von Müllgefäßen",
    
          }
        ]
    }
    ]
  
    return(
      <>
      
      <div  className="mb-4 mt-4">
        <h3 className="kern-heading-large">Anmeldung oder Ummeldung von Müllgefäßen</h3>
      </div>

      <div  className="mb-4">
        <KernTaskList onClick={()=>{goToPage(2)}} items={entries} ></KernTaskList>
      </div>
     
      </>
    );

}
