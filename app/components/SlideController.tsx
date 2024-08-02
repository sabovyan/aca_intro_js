interface Props {}

export function SlideController({}: Props) {
  return (
    <div className="absolute bottom-10 right-20 px-4 py-2 text-lg flex gap-4">
      <button className="border border-black rounded-full px-4 py-2">
        {"<"}
      </button>
      <button className="border border-black rounded-full px-4 py-2">
        {">"}
      </button>
    </div>
  );
}
