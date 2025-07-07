import { useImperativeHandle, forwardRef, useRef, type ReactNode } from 'react';

export interface KernFormMethods {
  checkValidity: () => boolean,
  reportValidity: () => boolean,
  getElements: () => HTMLElement[],
  getValues: () => {[key:string] : any}
}


const KernForm = forwardRef((props: {
    children: ReactNode
}, ref) => {

    const formRef = useRef(null);

    useImperativeHandle(ref, () => ({
      checkValidity() {
        if(formRef && formRef.current)
        return (formRef.current as HTMLFormElement).checkValidity()
      },
      reportValidity() {
        if(formRef && formRef.current)
        return (formRef.current as HTMLFormElement).reportValidity()
      },
      getElements() {
        if(!formRef || !formRef.current) return null;
        return (formRef.current as HTMLFormElement).elements;
      },
      getValues():FormData | null{
        if(!formRef || !formRef.current) return null;
        return new FormData(formRef.current);
      }
    }));
  
    return <form ref={formRef}>{props.children}</form>;
  });

export default KernForm;



/* Usage in parent component 
const parentRef = React.useRef();

<KernForm ref={parentRef} />

const isValid = parentRef.current.checkValidity();
*/