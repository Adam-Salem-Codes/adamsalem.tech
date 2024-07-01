import BlogPreview from "../Components/BlogPreview";
import "./css/blog.css";
const Blog = () => {
  return (
    <div className="w-full h-screen dark:bg-[#282828]">
      <div className="text-center flex justify-center items-center">
        <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-24">
          <BlogPreview
            Content={
              <p className="mb-2">
                On November 5ᵗʰ I bought the domain name: &nbsp;
                <a href="https://adamsalem.tech" className="underline">
                  adamsalem.tech.&nbsp;
                </a>
                With the help of Hop I deployed this site.
              </p>
            }
            Header="How I made this website."
            Date="November 8ᵗʰ, 2022"
            BlogURL="/Blog/website"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
