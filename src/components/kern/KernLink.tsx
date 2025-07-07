import KernIcon from './KernIcon';




function KernLink ({ href, text, size, icon, ...rest}:{ href:string, text:string, size?:string, icon?:string}) {
  
    size = (size && size === "small") ? "kern-link--small": "";

    icon = (["arrow-forward","arrow-back","download","open-in-new","mail","sign-language","easy-language"].indexOf(icon) !== -1) ? icon: '';


    return(
      <>
      <div>
        <a href={href || '#'} className={`kern-link ${size}`} {...rest}>
           {(icon)? <KernIcon icon={icon}/>:''}
           {text} 
        </a>
      </div>
      </>
    );

}

export default KernLink;