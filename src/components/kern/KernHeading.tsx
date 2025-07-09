import { HeadingTextSize } from "../../types/HeadingTextSize";

function KernHeading( {
    children,
    size = 'large',
} : {  
    children: any, 
    size?: string    
}){

    // Select text size from predefined options
    const currentTextSize = Object.values(HeadingTextSize).filter( ts => size === ts.className)

    const validClass = currentTextSize.length === 1 ? `kern-heading-`+size : 'kern-heading-large';
    const Tag = (currentTextSize.length === 1) ? currentTextSize[0].tagName : 'h1';

    return (
        <Tag className={validClass}>{children}</Tag>       
    )

}

export default KernHeading;