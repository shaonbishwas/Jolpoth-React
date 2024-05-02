import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import faqImg from "../assets/Frame.png"
export const Home = () => {
  const { data } = useQuery({
    queryKey: ["our tours"],
    queryFn: async () => {
      const result = await axios.get("./places.json");
      return result.data;
    },
  });
  return (
    <div>
      {/* <!-- ========================================================================popular places======================================================== --> */}
      <div className="text-center mt-20 space-y-4">
        <h1 className="text-4xl font-bold">Popular Places</h1>
        <p>
          Exploring the Enchanting Charms of Santorini: A Journey into the Heart
          of bangladesh's Captivating river Paradise <br />
          Draws Travelers from Across the Globe.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[1400px] mx-auto my-10 gap-5">
        {data?.map((d, idx) => (
          <Link key={idx}>
            <div className="card card-compact w-96 bg-base-100 shadow mx-auto rounded-lg">
              <figure>
                <img src={d.image} alt="Shoes" />
              </figure>
              <div className="card-body bg-white">
                <h2 className="card-title font-bold">{d.name}</h2>
                <p>{d.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-right max-w-[1400px] mx-auto text-green-500  pr-5">
        <Link to="/ourtours" className="hover:text-green-700">
          See More -
        </Link>
      </div>
      {/* <!-- ===================================================================================faq===================================================================== --> */}
      <div className="">
        <div className="mt-28 mb-10">
          <h1 className="text-center text-4xl font-bold">
            Frequently Asked Any Questions
          </h1>
        </div>
        <div className="max-w-[1400px] mx-auto flex lg:flex-row flex-col gap-5 items-center">
          <div className="flex-1 space-y-2">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" checked="checked" />
              <div className="collapse-title text-xl font-medium">
                Question number 1
              </div>
              <div className="collapse-content">
                <p>Answer</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Question number 2
              </div>
              <div className="collapse-content">
                <p>Answer</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Question number 3
              </div>
              <div className="collapse-content">
                <p>Answer</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Question number 4
              </div>
              <div className="collapse-content">
                <p>Answer</p>
              </div>
            </div>
          </div>
          <div className="flex-1 h-[450px]">
            <img src={faqImg} alt="" className="w-3/5 h-full mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};
