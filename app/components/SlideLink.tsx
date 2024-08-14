interface Props {
  title: string;
  description?: string;
  url: string;
}

export function SlideLink({ title, description, url }: Props) {
  return (
    <div className="max-w-fit p-8  bg-black dark:bg-gray-700  rounded-xl transition-shadow duration-100 text-gray-400">
      <div className="flex">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h3 className="text-2xl font-semibold hover:underline">
            {title} <span> &#129125;</span>
          </h3>
        </a>
      </div>
      {description && (
        <p className="text-lg text-gray-500 mb-2 italic mt-4">{description}</p>
      )}
    </div>
  );
}
