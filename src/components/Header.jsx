export default function Header() {
  return (
    <header className="sticky top-0 flex justify-between items-center p-4 md:p-6 bg-white shadow-md z-10">
      <h2 className="text-2xl font-bold text-gray-900">OZ코딩스쿨</h2>
      <ul className="flex gap-6">
        <li className="text-gray-700 font-medium cursor-pointer hover:text-blue-500 transition-colors">
          로그인
        </li>
        <li className="text-gray-700 font-medium cursor-pointer hover:text-blue-500 transition-colors">
          회원가입
        </li>
        <li className="text-gray-700 font-medium cursor-pointer hover:text-blue-500 transition-colors">
          내클래스
        </li>
      </ul>
    </header>
  );
}