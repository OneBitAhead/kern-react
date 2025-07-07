function KernDescriptionList ({ details = {}, columns = false}:{details: Object, columns?:boolean}) {

    return(
      <>
      <dl className={`kern-description-list ${(columns === true) ? "kern-description-list--col": ''}`}>

        {Object.entries(details).map(([key, value]) => (
          <div key={key} className="kern-description-list-item">
            <dt className="kern-description-list-item__key">{key}</dt>
            <dd className="kern-description-list-item__value">{value}</dd>
          </div>
        ))}
      </dl>   
      </>
    );
}

export default KernDescriptionList;