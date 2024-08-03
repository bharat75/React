import { restaurantList } from "../config.js";
import RestrauntCard from "./RestrauntCard.js";
import { useState } from "react";

function filterData(searchtxt, restraunts) {
  return restraunts.filter((restraunt) => {
    restraunt.data.name.includes(searchtxt);
  });
}

const BodyComponent = () => {
  //const searchtxt = "";
  //const abc = "hello";
  //const [abc] = useState("hello");
  const [searchtxt, setSearchText] = useState("");
  const [restraunts, setrestraunts] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name, cuisine, or location"
          className="search-input"
          value={searchtxt}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchtxt, restraunts);
            setrestraunts(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="listing">
        {/* <RestrauntCard {...restaurantList[0].data} /> */}
        {restraunts.map((listingCards) => {
          return (
            <RestrauntCard {...listingCards.data} key={listingCards.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
