import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const { data, loading, error } = useFetch("/hotels/countByCity?cities=Mumbai,Agra,Uttarakhand");

  // console.log(data);
  

  return (
    <div className="featured">
     
     {loading ? (
      "Loading please wait"
     ) : (
     <> <div className="featuredItem">
        <img
          src="https://t4.ftcdn.net/jpg/02/01/18/91/360_F_201189187_HAvNKbc5dBACc8Sl0sXVv8lVbwQua0ph.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2> {data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/365px-Taj_Mahal_%28Edited%29.jpeg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Agra</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://staticimg.amarujala.com/assets/images/2021/02/15/auli-uttarakhand_1613386076.jpeg?w=414"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Uttarakhand</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div> </>)}
    </div>
  );
};

export default Featured;
