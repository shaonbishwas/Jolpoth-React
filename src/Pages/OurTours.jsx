import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/ToursBanner.jpg";

export const OurTours = () => {
  const { data } = useQuery({
    queryKey: ["our tours"],
    queryFn: async () => {
      const result = await axios.get("./places.json");
      return result.data;
    },
  });
  return (
    <div>
        <div className="item relative border">
          <img className="h-[600px] w-full" src={banner} alt="" />
          <div
            className="absolute text-center w-full px-5 top-[20%] md:top-[30%] lg:px-44 text-white"
          ></div>
        </div>
      <div className="text-center mt-10 lg:mt-20 space-y-4 px-5">
        <h1 className="text-2xl lg:text-4xl font-bold">Our Tours</h1>
        <p className="text-[12px] lg:text-base">
          Exploring the Enchanting Charms of Santorini: A Journey into the Heart
          of bangladesh's Captivating river Paradise <br />
          Draws Travelers from Across the Globe.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1400px] mx-auto my-10 gap-7 px-5">
        {data?.map((d, idx) => (
          <div
            key={idx}
            className="card card-compact bg-base-100 shadow mx-auto rounded-md"
          >
            <figure>
              <img
                className="h-[300px] w-full object-cover"
                src={d.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-white">
              <h2 className="card-title font-bold">{d.name}</h2>
              <p>{d?.shortDescription}</p>
              <Link to="/blogdetails">
                <button className="text-white mt-[6px] bg-[#449586] py-3 px-5 rounded-md font-medium">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
