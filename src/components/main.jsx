const Main = ({aName, aBody, img, img2, description, description2}) => {
    return (
      <>
      <main>
        <h1>{aName}</h1>
        <p>{aBody}</p>
        <div className="cards">
            <div className="card">
            <img src={img} alt={description} />
                {description}
            </div>
            <div className="card">
            <img src={img} alt={description} />
                {description}
            </div>
            <div className="card">
            <img src={img} alt={description} />
                {description}
            </div>
        </div>
        <div className="cards">
            <div className="card">
            <img src={img2} alt={description2} />
                 {description2}
            </div>
            <div className="card">
            <img src={img2} alt={description2} />
                {description2}
            </div>
            <div className="card">
            <img src={img2} alt={description2} />
                {description2}
            </div>
        </div>
      </main>
      </>
    )
  }
  
  export default Main