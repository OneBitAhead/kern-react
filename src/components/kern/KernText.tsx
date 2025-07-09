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
    const validSizeClass = ( validTextSizes.includes(size) && size !== '' ) ? `kern-${textType}-`+size : ``;

    
 
    return (
        <p className={`${validClass} ${validSizeClass}`}>{children}</p>
    )

}

export default KernText;