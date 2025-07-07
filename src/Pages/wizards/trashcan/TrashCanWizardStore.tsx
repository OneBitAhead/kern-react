
import { create } from 'zustand';
import { persist } from 'zustand/middleware'

const useTrashCanWizardStore = create(
    
    // persiste in localStorage!
    persist(    
        
    (set, get) => ({
        pages: 4,
        page: 1,
        leavingPageFunction: null,
        nextPage: async() => {
            const max = get().pages;
            const current = get().page;
            const leavingFunction = get().leavingPageFunction;
            if(typeof leavingFunction === "function"){
                var result = await leavingFunction();
                if(result === false) return false;             
            }            
            if(current < max) set((state:any) => ({ page: state.page + 1 }));
        },
        goToPage: async(page) => {         
            const max = get().pages;
            const leavingFunction = get().leavingPageFunction;
            if(typeof leavingFunction === "function"){
                var result = await leavingFunction();
                if(result === false) return false;             
            }  
            if(page < max && page > 0)  set((state:any) => ({ page: page }));
        },
        hasNext: () => {
            const max = get().pages;
            const current = get().page;
            if(current < max) return true;
            else return false;
        },
        previousPage: async() => {
            const current = get().page;
            const leavingFunction = get().leavingPageFunction;
            if(typeof leavingFunction === "function"){
                var result = await leavingFunction();
                if(result === false) return false;             
            }  
            if(current > 1) set((state:any) => ({ page: state.page - 1 }));
        },
        hasPrevious: () => {
            const current = get().page;
            if(current > 1) return true;
            else return false;
        },
        
        
        // Daten des Mülltonnen-Beispiels        
        vorname: '',
        nachname: '',
        strasse: '',
        hausnummer: '',
        postleitzahl: '',
        stadt: '',

        grau: '80',
        gelb: '120',
        blau: "120",
        gruen: "120"

    }),{
        name: "trash-can-wizard"
    })

    
)

export default useTrashCanWizardStore;