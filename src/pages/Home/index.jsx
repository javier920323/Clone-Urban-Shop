import { useEffect, useState } from "react";
import Card from "../../components/Card";
import ProductDetalle from "../../components/ProductDetalle";

function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=&limit=20")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((err) => {
        err.message;
      });
  }, []);

  return (
    <div className=" mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Nuestros Productos</h1>
      <div className="grid grid-cols-4  gap-6">
        {productos?.map((product) => {
          return <Card key={product.id} data={product} />;
        })}
      </div>
      <ProductDetalle />
    </div>
  );
}

export default Home;
