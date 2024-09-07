import { images } from "../../constants";
import { gallery } from "../../constants";

export const CheckApp = () => {
  return (
    <div className="checkAppContainer">
      <div className="everyoneBox">
        <div className="everyoneTitle secTitle">
          <span>Kikapu</span> for Everyone
        </div>

        <div className="imageGallery">
          {gallery.map((image, index) => (
            <img key={index} src={image} alt={`type-${index + 1}`} className="image-item" />
          ))}
        </div>
      </div>

      <div className="checkHead">
        <div className="checkAppTitle secTitle">
          <span>Seamless</span> User Interaction
        </div>
        <p className="UI-desc">
          Every touchpoint is intuitive and effortless. From smooth navigation to responsive design, we've crafted an experience where users can easily interact with the app without any friction.
        </p>
      </div>

      <section className="appFeature">
        <div className="featureShot">
          <img src={images.dashboard} alt="dashboard" />
        </div>

        <div className="f_description">
          <div className="f_desc_title">
            <span>
              <img src={images.dashSVG} alt="dashSVG" />
            </span>
            <span>Welcome !</span>
          </div>
          <div className="f_desc_par">
            Dive into a world of culinary delights by exploring an extensive selection of restaurants, cuisines, and menu items.
          </div>
        </div>
      </section>

      <section className="appFeature">
        <div className="featureShot">
          <img src={images.cart} alt="dashboard" />
        </div>
        <div className="f_description">
          <div className="f_desc_title">
            <span>
              <img src={images.cartSVG} alt="cartSVG" />
            </span>
            <span>Add to Kikapu</span>
          </div>
          <div className="f_desc_par">
            Dive into a world of culinary delights by exploring an extensive selection of restaurants, cuisines, and menu items.
          </div>
        </div>
      </section>

      <section className="appFeature">
        <div className="featureShot">
          <img src={images.orderDraft} alt="dashboard" />
        </div>

        <div className="f_description">
          <div className="f_desc_title">
            <span>
              <img src={images.draftSVG} alt="draftSVG" />
            </span>
            <span>Confirm your order</span>
          </div>
          <div className="f_desc_par">
            Dive into a world of culinary delights by exploring an extensive selection of restaurants, cuisines, and menu items.
          </div>
        </div>
      </section>

      <section className="appFeature">
        <div className="featureShot">
          <img src={images.history} alt="history" />
        </div>
        <div className="f_description">
          <div className="f_desc_title">
            <span>
              <img src={images.historySVG} alt="cartSVG" />
            </span>
            <span>View order history</span>
          </div>
          <div className="f_desc_par">
            Dive into a world of culinary delights by exploring an extensive selection of restaurants, cuisines, and menu items.
          </div>
        </div>
      </section>
    </div>
  );
};
