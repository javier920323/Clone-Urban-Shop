import { useContext } from "react";
import { ShopingCardContext } from "../../context";
import "./productDetalle.css";

function ProductDetalle() {
  const context = useContext(ShopingCardContext);

  return (
    <aside
      className={`${
        context.isProductOpen ? "flex" : "hidden"
      } productDetalle  flex-col fixed bg-white right-0 top-[65px] border border-black rounded`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl">Detalle</h2>
        <div
          onClick={() => context.closeProductDetalle()}
          className="text-xl cursor-pointer hover:text-red-500 transition-colors"
        >
          🗙
        </div>
      </div>
      <figure className="px-4">
        <img
          className="w-full h-52 rounded-lg"
          src={context.productShowDetalle.images}
          alt={context.productShowDetalle.title}
        />
      </figure>
      <p className="flex flex-col p-4">
        <span className="font-medium text-2xl mb-2">${context.productShowDetalle.price}</span>
        <span className="font-medium text-md">{context.productShowDetalle.title}</span>
        <span className="font-light text-sm word">{context.productShowDetalle.description}</span>
      </p>
    </aside>
  );
}

export default ProductDetalle;
