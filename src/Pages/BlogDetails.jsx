import { useLoaderData, useParams } from "react-router-dom";
export const BlogDetails = () => {
  const places = useLoaderData();
  const {id} = useParams();
  const place = places.find((p) => p.id == id);
  console.log(id, places, place);
  return (
    <div className="max-w-[1400px] mx-auto mb-12 ">
      {/* <h1 className="text-center text-4xl font-bold my-6">Blog Details</h1> */}
      <div className="">
        <img src={place?.image} alt="" className="w-full lg:h-[600px] md:h-[500px]" />
        <h1 className="text-3xl my-5 ml-2 font-semibold">{place?.name}</h1>
        <p className="font-serif mx-2">{place?.blog}</p>
      </div>
    </div>
  );
};