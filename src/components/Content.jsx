export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-2 bg-white p-4 rounded-lg w-72 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
      <img
        src={content.img}
        alt={content.title}
        className="w-full rounded-lg mb-2"
      />
      <span className="text-xs text-white bg-blue-500 px-2 py-0.5 rounded-full">
        모집중
      </span>
      <div className="text-lg font-semibold text-gray-900">{content.title}</div>
      <p className="text-sm text-gray-600">{content.subtitle}</p>
    </div>
  );
}