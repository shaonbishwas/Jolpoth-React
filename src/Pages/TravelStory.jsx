import img from '../assets/bannerofts.jpg'
import img1 from '../assets/travelStory1.jpg'
import img2 from '../assets/travelStory2.jpg'
import img3 from '../assets/travelStory3.jpg'
import img4 from '../assets/travelStory4.jpg'

export const TravelStory = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="">
        <img
          src={img}
          alt=""
          className="w-full max-h-[450px]"
        />
      </div>
      <div className="storyDiv">
        <div className="text-center my-12 space-y-2">
          <h1 className="text-3xl font-bold">Travel Story</h1>
          <p className="font-mono">
            Welcome to Bangladesh: Where Hospitality Meets History and Nature's
            Bounty.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 w-[90%] mx-auto mb-12">
          <img
            src={img1}
            alt=""
            className="row-span-2 h-full w-full"
          />
          <img
            src={img2}
            alt=""
            className="h-full w-full"
          /><img
            src={img3}
            alt=""
            className="h-full w-full"
          />
          <img
            src={img4}
            alt=""
            className="col-span-2 h-full w-full"
          />
        </div>
      </div>
    </div>
  )
}
