import Footer from "../components/Footer";
import HeadingBanner from "../components/HeadingBanner";
import Navbar from "../components/Navbar";
import FloatingCard from '../components/FloatingCard'
import Button from "../components/Button";

const Home = () => {
  return (
    <>
      <Navbar /> 
        <div className="main bg-primary">
          <div className="content">
              <h1>Featured Post</h1>
              <h1>How AI will Change the Future</h1>
              <h1>The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction</h1>
              <Button />
          </div>
          <div className="image"></div>
        </div>
       <Footer />
    </>
  );
};

export default Home;
