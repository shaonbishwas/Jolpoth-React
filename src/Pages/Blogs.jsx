import { useQuery } from "@tanstack/react-query";
import banner from "../assets/blogBanner.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

export const Blogs = () => {
    const { data } = useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
          const result = await axios.get("./places.json");
          return result.data;
        },
      });
  return (
    <div>
      <div className="">
        <div className="item relative max-w-[1400px] mx-auto">
          <img src={banner} alt=""  />
          <div className="absolute text-center w-full px-5 top-[20%] md:top-[30%] lg:px-44 text-white">
            <p className="hidden lg:block lg:text-[25px]">
              Embark on unforgettable journeys with Sail Away Adventures! Our
              boat travel agency specializes in curated cruises, island hopping,
              and coastal escapades. Whether you’re seeking serene sunsets,
              thrilling water sports, or tranquil fishing trips, we’ve got you
              covered. Set sail with us and let the waves carry you to blissful
              destinations.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 lg:mt-20 space-y-4 px-5">
        <h1 className="text-2xl lg:text-4xl font-bold">Blogs</h1>
        <p className="text-[12px] lg:text-base">
          Exploring the Enchanting Charms of Santorini: A Journey into the Heart
          of bangladesh's Captivating river Paradise <br />
          Draws Travelers from Across the Globe.
        </p>
        {/* <ul className="flex gap-4 justify-center items-center">
          <li className="text-[#449586] font-bold cursor-pointer">New</li>
          <li className="font-medium cursor-pointer">Favorite</li>
          <li className="font-medium cursor-pointer">Trending</li>
        </ul> */}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1400px] mx-auto my-10 gap-7 px-5">
       
        {
            data?.map((d, idx)=><div key={idx} className="card card-compact bg-base-100 shadow mx-auto rounded-md">
            <figure>
              <img
                className="h-[300px] w-full object-cover"
                src={d.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-white">
              <h2 className="card-title font-bold">{d.name}</h2>
              <p>
                {d.shortDescription}
              </p>
              <Link to="/blogdetails">
                <button className="text-white mt-[6px] bg-[#449586] py-3 px-5 rounded-md">
                  See More
                </button>
              </Link>
            </div>
          </div>)
        }
        
      </div>
    </div>
  );
};
