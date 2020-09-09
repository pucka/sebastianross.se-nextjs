import Slider from "react-slick";
import { settings } from "./SlickSliderHelper";

const ArticleSlider = ({ children }) => (
  <Slider className="slick" {...settings}>
    {children}
  </Slider>
);

export default ArticleSlider;
