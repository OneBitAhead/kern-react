import { Align } from "../../types/Align";
import { Size } from "../../types/Size";

function KernColumn (props: {children: any, align?: string, sizes?: {[key: string]: number}, offsets?: {[key: string]: number}}) {

  const validAlignNames = Object.values(Align);
  const validAlignClass = validAlignNames.includes(props.align || '') ? `kern-align-items-`+props.align : '';

  const validSizes = Object.values(Size);
  const validSizeClass = validSizes.reduce( (accumulator:string[], current) => { 
    if(props.sizes && props.sizes.hasOwnProperty(current) && 
      typeof props.sizes[current] === 'number' && 
      props.sizes[current] > 0 && 
      props.sizes[current] <= 12) {
        accumulator.push(`kern-col-${current}-${props.sizes[current]}`)
      }
    return accumulator;
   } , [])

   const validOffsetClass = validSizes.reduce( (accumulator:string[], current) => { 
    if(props.offsets && props.offsets.hasOwnProperty(current) && 
      typeof props.offsets[current] === 'number' && 
      props.offsets[current] > 0 && 
      props.offsets[current] <= 12) {
        accumulator.push(`kern-col-${current}-offset-${props.offsets[current]}`)
      }
    return accumulator;
   } , [])

  return (
    <div className={`${validAlignClass || ''} ${validSizeClass.length === 0 ? 'kern-col' : validSizeClass.join(" ")} ${validOffsetClass.join(" ")}`}>
      {props.children}
    </div>
  );
};

export default KernColumn;


