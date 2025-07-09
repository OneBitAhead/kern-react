

function KernCard ({ 
  preline = '', 
  title = 'Title',
  img = "/kern-img-media.png",
  subline = '', 
  altText,
  body, 
  footer
  }:{ 
    preline?: string, 
    title: string, 
    img: string,
    subline?: string, 
    altText?: string,
    body:any, 
    footer?: any  
  }) {

    return(
      <>
      <article className="kern-card"> 
          <div className="kern-card__media">
            <img src={img} alt={altText || title}/>
          </div>
          <div className="kern-card__container">
            <header className="kern-card__header">
              <p className="kern-preline">{preline}</p>
              <h2 className="kern-title">{title}</h2>
              <h3 className="kern-subline">{subline}</h3>
            </header>
            <section className="kern-card__body">
              <p className="kern-body">{body}</p>
            </section>
            <footer className="kern-card__footer">
              {footer}              
            </footer>
          </div>
        </article> 
      </>
    );

}

export default KernCard;