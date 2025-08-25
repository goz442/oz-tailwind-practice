import { useCart } from "../context/cartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">장바구니</h2>
      {cart.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between bg-white p-2 rounded shadow">
              <span>{item.name}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-2 py-0.5 bg-red-500 text-white rounded hover:bg-red-600"
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}