import { HeadingTextSize } from "../../types/HeadingTextSize";

function KernHeading( {
    children,
    size = 'large',
} : {  
    children: any, 
    size?: string    
}){

    const validTextSizes = Object.values(HeadingTextSize);
    const validClass = validTextSizes.includes(size) ? `kern-heading-`+size : 'kern-heading-large';

    return (
        <h1 className={validClass}>{children}</h1>       
    )

}

export default KernHeading;