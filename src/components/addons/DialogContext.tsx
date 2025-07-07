import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import KernDialog from "../kern/KernDialog";

// create the context and export it
const DialogContext = createContext(null);
export const useDialog = () => useContext(DialogContext);


export const DialogProvider = ({ children }: {children:any}) => {

  const [open, setOpen] = useState(false);  
  const [title, setTitle] = useState('Title');
  const [body, setBody] = useState(<>Some body elements <span>...</span></>);
  const [buttons, setButtons] = useState([{"id":"close","label":"Close"}]);
   
  
  // Function to open the dialog
  const handleOpen = useCallback(() => setOpen(true), []);
  // Function to close the dialog
  const handleClose = useCallback(() => setOpen(false), []);


  const openModal = function(title:string, body:any, buttons:any){

    setTitle(title || "Title");
    setBody(body);
    setButtons(buttons);
    handleOpen();

  }

  // Memoize the context value for performance
  const contextValue = useMemo(
    () => ({ open, handleOpen, handleClose, title, setTitle, body, setBody, buttons, setButtons, openModal }),
    [open, handleOpen, handleClose, title, setTitle, body, setBody, buttons, setButtons, openModal]
  );




  return (
    <DialogContext.Provider value={contextValue}>
      <KernDialog></KernDialog>
      {children}
    </DialogContext.Provider>
  );
};