import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOA_d1zxawlwAUVqfBBItJODmjIsb443Dy0A&s"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Taj Mahal Palace</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from ₹25000</span>
        <div className="fpRating">
          
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Rawai luxury hotels </span>
        <span className="fpCity">Delhi</span>
        <span className="fpPrice">Starting from ₹20000</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.hyatt.com/development/explore-hotels/images/ourlocation/mobile/our-locations-hero.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Jaipur</span>
        <span className="fpPrice">Starting from ₹15000</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-07759524821cb5e736e4e3d679325238"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Lucknow</span>
        <span className="fpPrice">Starting from ₹10500</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
