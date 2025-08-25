export default function Header() {
  return (
    <header className="sticky top-0 flex justify-between items-center p-4 md:p-6 bg-white shadow-md z-10">
      <h1 className="text-2xl font-bold text-gray-900">OZ카페</h1>
      <nav>
        <ul className="flex gap-6">
          <li className="text-gray-700 cursor-pointer hover:text-blue-500">로그인</li>
          <li className="text-gray-700 cursor-pointer hover:text-blue-500">회원가입</li>
          <li className="text-gray-700 cursor-pointer hover:text-blue-500">장바구니</li>
        </ul>
      </nav>
    </header>
  );
}