import { img_CDN_URL } from "../config";

const RestrauntCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="restrauntCard">
      <img src={img_CDN_URL + cloudinaryImageId} />
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestrauntCard;
