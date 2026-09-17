export default function Product2({ title, price, image, category }) {
  return (
    <div className="card" style={{ width: "300px" }}>
      <img className="card-img-top" src={image} alt="product" />

      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{price}</p>
        <p className="card-text">{category}</p>
      </div>
    </div>
  );
}