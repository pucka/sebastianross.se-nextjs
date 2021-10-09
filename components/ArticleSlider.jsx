import Slider from "react-slick";

const ArticleSlider = ({ children }) => (
  <Slider className="slick" lazyLoad draggable>
    {children}
  </Slider>
);

export default ArticleSlider;
