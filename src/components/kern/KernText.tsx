import { TextSize } from "../../types/TextSize";
import { TextType } from "../../types/TextType";

function KernText( {
    children,
    type = 'body',
    size = '',    
} : {
    children: any,
    type?: string
    size?: string    
}){
    const validTextTypes = Object.values(TextType);
    const textType = validTextTypes.includes(type) ? type: 'body';
    
    const validClass = `kern-${textType}`;

    const validTextSizes = Object.values(TextSize);
    const validSizeClass = validTextSizes.includes(size) ? `kern-${textType}-`+size : `kern-${textType}`;

 
    return (
        <h1 className={`${validClass} ${validSizeClass}`}>{children}</h1>       
    )

}

export default KernText;