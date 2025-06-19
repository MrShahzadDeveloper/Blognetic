import { useParams, useLocation, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { slug } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="max-w-4xl mx-auto p-5 text-center">
        <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
        <p className="mb-4">No data available for: {slug || "this post"}</p>
        <button
          onClick={() => navigate("/blogs")}
          className="bg-[#7C4EE4] text-white px-6 py-2 rounded-lg hover:bg-[#6b3dd4] transition-colors"
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mt-12 mx-auto p-5">
      <div className="flex flex-col justify-center items-start mx-20 gap-5 mb-6">
        <div className="flex gap-5 mb-2">
          <span className="text-sm text-secondary font-[700]">
            {state.type}
          </span>
          <span className="text-sm text-[#999999]">{state.date}</span>
        </div>

        <h1 className="text-5xl leading-tight font-[700] text-secondary mb-6">
          {state.heading}
        </h1>
      </div>

      <img
        src={state.cardImg}
        className="w-full h-auto max-h-[500px] object-cover rounded-xl mb-8"
        alt={state.heading}
      />

      <div className="prose max-w-none mx-20">
        <p className="text-[#666666] text-lg leading-relaxed whitespace-pre-line">
          {state.paragh}
        </p>
      </div>
    </section>
  );
};

export default BlogDetails;