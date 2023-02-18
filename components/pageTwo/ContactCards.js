import Image from "next/image";
import img0 from "/public/images/Page1-19.png";
import img1 from "/public/images/Page1-13.png";
import img2 from "/public/images/Page1-7.png";
import BaseTitle from "../UI/BaseTitle";
import { MdChevronRight } from "react-icons/md";
import BaseDescription from "../UI/BaseDescription";

const images = [img0, img1, img2];

const ContactCards = ({ cardProps }) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {cardProps?.map((card, i) => (
        <div
          key={card.title}
          className={`p-10 text-center shadow-lg ${
            i === 2 ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <div className="flex flex-col items-center justify-between gap-2 xl:gap-5">
            <div className="relative w-1/5 pt-[20%]">
              <Image
                src={images[i]}
                alt="profile"
                style={{ objectFit: "cover" }}
                fill
              />
            </div>
            <BaseTitle>{card.title}</BaseTitle>
            <BaseDescription className="py-5 lg:pb-8">
              {card.description}
            </BaseDescription>
            <button
              type="button"
              onClick={() => console.log("redirecting")}
              className="flex items-center gap-2 hover:text-teal-300"
            >
              <BaseDescription>{card.label}</BaseDescription>
              <MdChevronRight className="text-lg lg:text-xl xl:text-2xl" />
            </button>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default ContactCards;
