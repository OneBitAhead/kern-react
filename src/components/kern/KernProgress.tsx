
function KernProgress ({ id = "1", text, value = 0, max = 1 }: {id:string, text?:string, value:number, max:number}) {

    id = "progress_"+id;

    return(
      <>
    <div className="kern-progress">
      <label className="kern-label" htmlFor={id}>{text}</label> 
      <progress id={id} value={value} max={max}></progress>
    </div>

      </>
    );

}

export default KernProgress;