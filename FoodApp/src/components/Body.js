import { restaurantList } from "../config.js";
import RestrauntCard from "./RestrauntCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

function filterData(searchtxt, restraunts) {
  const filterData = restraunts.filter((restraunt) =>
    restraunt.data.name.includes(searchtxt)
  );
  return filterData;
}

const BodyComponent = () => {
  //const searchtxt = "";
  //const abc = "hello";
  //const [abc] = useState("hello");
  const [searchtxt, setSearchText] = useState("");
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [allRestraunts, setAllRestraunts] = useState([]);

  useEffect(() => {
    //API Call
    getRestrauntListing();
  }, []);

  async function getRestrauntListing() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5279995&lng=88.3660445&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const fetchedRestraunts =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    console.log(fetchedRestraunts);
    setAllRestraunts(fetchedRestraunts);
    setFilteredRestraunts(fetchedRestraunts);
  }

  return filteredRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchtxt, allRestraunts);
            setFilteredRestraunts(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="listing">
        {/* <RestrauntCard {...restaurantList[0].data} /> */}
        {filteredRestraunts.map((listingCards) => {
          return (
            <RestrauntCard {...listingCards.info} key={listingCards.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
