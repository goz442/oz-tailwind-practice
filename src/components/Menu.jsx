import { useMenu } from "../context/menuContext";
import { useCart } from "../context/cartContext";

export default function Menu() {
  const { menu } = useMenu();
  const { addToCart } = useCart();

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">메뉴</h2>
      <div className="flex flex-wrap gap-4">
        {menu.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow w-48">
            <div className="text-lg font-semibold">{item.name}</div>
            <div className="text-gray-600">{item.price}원</div>
            <button
              onClick={() => addToCart(item)}
              className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              장바구니 추가
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}