import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';

export const TourDetails = () => {
  const places = useLoaderData();
  const {id} = useParams();
  const place = places.find((p) => p.id == id);
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col space-y-4">
      <h1 className="text-[30px] font-bold ">{place?.name}</h1>
      <p className="font-sans text-[20px]">Coming Soon...........</p>
    </div>
  )
}
