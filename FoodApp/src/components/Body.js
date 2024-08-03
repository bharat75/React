import { restaurantList } from "../config.js";
import RestrauntCard from "./RestrauntCard.js";

const BodyComponent = () => {
  return (
    <div className="listing">
      {/* <RestrauntCard {...restaurantList[0].data} /> */}
      {restaurantList.map((listingCards) => {
        return (
          <RestrauntCard {...listingCards.data} key={listingCards.data.id} />
        );
      })}
    </div>
  );
};

export default BodyComponent;
