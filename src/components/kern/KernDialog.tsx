import { useEffect } from 'react';
import {useDialog} from '../addons/DialogContext';
import styles from './KernDialog.module.css';

function KernDialog () {


  //@ts-ignore
  const { open, handleOpen, handleClose, title, body, buttons } = useDialog();
 
  // buttons
  var b = buttons;
  // at least a close button!
  if(b.length === 0) { b = [{"id":"close","primary": true, "name":"Close"}]; }

  
   useEffect(() => {
    function handleEsc(event) {
      if (event.key === 'Escape') {
        handleClose();
      }
    }
    if (open) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [open, handleClose]);


  // stop here...if not open!
  if (!open) return null;


  async function clickOnButton(buttonConf:any){

    if(typeof buttonConf.callback === "function"){
      var result = await buttonConf.callback();
      if(result === false) return;
    }
    handleClose();   
    
  }

  return (  
    <div className={styles.overlayStyle}>       
        <dialog id="modal1" className={`kern-dialog ${styles.modalStyle}`} aria-labelledby="modal1_heading" open>
          <header className="kern-dialog__header">
            <h2 className="kern-title kern-title--large" id="modal1_heading">{title}</h2>
            <button onClick={handleClose} className="kern-btn kern-btn--tertiary">
              <span className="kern-icon kern-icon--close" aria-hidden="true"></span>
              <span className="kern-sr-only">Schließen</span>
            </button>
          </header>
          <section className="kern-dialog__body">        
              {body}            
          </section>
          <footer className="kern-dialog__footer">
            {b.map((button:any) => {

              var buttonClass = (button.primary) ? "kern-btn kern-btn--primary": "kern-btn kern-btn--secondary";
              
              return (
                <button key={button.id} onClick={()=>{clickOnButton(button)}} className={buttonClass}>
                  <span className="kern-label">{button.name}</span>
                </button>
              )

            })}          
          </footer>
</dialog>
    </div>
  );

}

export default KernDialog;