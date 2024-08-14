import ICP from "../../../assets/images/ICP.png";



const TrendingCard = (props: {
  id: number;
  banner: string;
  NFtName: string;
  ownerName: string;
  ownerPfp: string;
  price: number;
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="my-10 w-200 bg-black p-25 rounded-2xl border-4 border-purple-600 hover:scale-110 duration-300 cursor-pointer">
        <img src={props.banner} className="rounded-2xl" alt="BAYC Ape" />
        <p className="text-white text-sm mb-2">{props.NFtName}</p>
        <div className="flex justify-between items-center text-sm">
          <p className="text-orange-400 flex  items-center justify-center font-bold">
            <img
              className="mr-1"
              src={ICP}
              width={20}
              height={20}
              alt="ICP"
            />{" "}
            {props.price} ICP
          </p>
          <p className="text-white px-2">{props.id} days left</p>
        </div>
        <div className="my-2 flex items-center">
          <img
            src={props.ownerPfp}
            alt={props.ownerName}
            className="h-10 w-10 rounded-full  border border-white mr-2"
          />
          <p className="text-orange-400 text-[12px]">
            Owned by{" "}
            <a href="/" className="text-white font-bold">
              {props.ownerName}
            </a>
          </p>
        </div>
        <div className="flex justify-center space-x-4 items-center">
          <a
            className="flex px-2 h-12 text-sm font- border w-28  border-white bg-blue-600 text-white hover:bg-white hover:text-black hover:duration-700  rounded-full justify-center items-center cursor-pointer"
            href="/"
          >
            Mint Now
          </a>
          <a
            className="flex px-2 h-12 text-sm font- border w-28 border-white  text-white hover:bg-orange-600 hover:duration-700  rounded-full justify-center items-center cursor-pointer"
            href="/"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
