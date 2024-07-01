const BlogPreview = ({ Header, Content, BlogURL, Date }) => {
  return (
    <div className="w-[30vw] max-sm:w-[55vw] h-[fit] p-8 rounded-2xl m-8 flex justify-end text-blue-500 border-neutral-300 border-2 bg-slate-200 shadow-2xl hover:scale-105">
      <div className="w-[100%] text-center">
        <div className="text-left max-sm:text-center">
          <p className="text-sm">{Date}</p>
        </div>
        <h1 className="mb-4 text-2xl">{Header}</h1>
        {Content}
        <div className="flex justify-center items-end">
          <a
            className="block transition duration-200 ease-in-out w-fit h-fit p-3 px-8 border-b-4 shadow-lg border-b-blue-500 bg-blue-400 rounded-lg hover:bg-blue-300 font-bold text-white hover:translate-y-1 hover:translate-x-[-5px] hover:border-b-0"
            href={BlogURL}
          >
            Take me there!
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
