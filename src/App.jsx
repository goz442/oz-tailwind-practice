import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* 헤더 */}
      <Header />

      {/* 메인 콘텐츠 섹션 */}
      <section className="flex flex-wrap justify-center gap-6 p-6 md:p-10">
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </section>
    </main>
  );
}

export default App;