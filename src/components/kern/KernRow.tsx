import { Align } from "../../types/Align";
import { Justify } from "../../types/Justify";

function KernRow (props: {children?: any, align?: string, justify?: string}) {

  const validAlignNames = Object.values( Align );
  const validAlignClass = validAlignNames.includes(props.align || '') ? `kern-align-items-`+props.align : '';

  const validJustifyNames = Object.values( Justify );
  const validJustifyClass = validJustifyNames.includes(props.justify || '') ? `kern-justify-content-`+props.justify : '';

  return (
    <div className={`kern-row ${validAlignClass || ''} ${validJustifyClass || ''}`}>
      {props.children}
    </div>
  );
};

export default KernRow;