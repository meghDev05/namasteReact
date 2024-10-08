import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                  // we are using map(), it will loop over all of the restaurant in resList array
                  resList.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant} />))
                }
            </div>
        </div>
    )
}
export default Body;