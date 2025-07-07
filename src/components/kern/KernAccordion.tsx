type Section = {
  title: string;
  body: string;
};


function KernAccordion ({ details = []}:{details: Section[]}) {


    return(
      <>
      <div className="kern-accordion-group">
      {details.map((section) => (
        <details key={section.title} className="kern-accordion">
          <summary className="kern-accordion__header">
            <span className="kern-title">{section.title}</span>
          </summary>
          <section className="kern-accordion__body">
            <p className="kern-body">{section.body}</p>
          </section>
        </details>
      ))}
      </div>
      </>
    );

}

export default KernAccordion;