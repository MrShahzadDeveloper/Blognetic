import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[88vh] flex flex-col items-center justify-center gap-6 p-4 text-center">
      <div className="text-[#7C4EE4] text-9xl font-bold">404</div>
      
      <h1 className="text-4xl font-bold text-secondary">Oops! Page Not Found</h1>
      
      <p className="text-[#666666] max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      
      <Link 
        to="/" 
        className="bg-[#7C4EE4] text-white px-6 py-3 rounded-lg font-medium
                   hover:bg-[#6b3dd4] transition-colors duration-300"
      >
        Return to Home
      </Link>
      
      <div className="mt-8 text-[#999999] text-sm">
        <p>Or try these pages:</p>
        <div className="flex gap-4 justify-center mt-2">
          <Link to="/blogs" className="hover:text-[#7C4EE4] transition-colors">Blogs</Link>
          <Link to="/about" className="hover:text-[#7C4EE4] transition-colors">About</Link>
          <Link to="/contact" className="hover:text-[#7C4EE4] transition-colors">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;