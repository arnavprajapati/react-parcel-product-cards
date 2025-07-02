import { createRoot } from "react-dom/client";
import "./style.css";

function Card({ id, title, thumbnail, brand, price }) {
  return (
    <div className="card" key={id}>
      <img src={thumbnail} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p><b>${price}</b></p>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const cards = data.products.map((elem) => (
      <Card
        key={elem.id}
        id={elem.id}
        title={elem.title}
        thumbnail={elem.thumbnail}
        brand={elem.brand}
        price={elem.price}
      />
    ));

    root.render(<div className="container">{cards}</div>);
  })
