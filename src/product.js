 
export default function Product({products}) {

  return (
    <div>
      <div className="container">

        <div className="row g-5" style={{ paddingLeft: "80px", paddingTop: "20px" }}>
          
          {products.map((product, index) => (
            <div className="col-md-3 bg-info p-3 me-4" key={index}>
              <img src={product.thumbnail} alt={product.title} style={{ width: "100%" }} />
              <h4>{product.title}</h4>
              <p style={{color:"red"}}><b>Price: Rs-{product.price}</b></p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
