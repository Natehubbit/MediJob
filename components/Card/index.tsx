import React, {
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { nanoid } from "nanoid";
import { ModalContext } from "../../contexts/index";

interface CardProps {
  title: string;
  items: { item: string; count: number | string }[];
}

const Card: FC<CardProps> = ({ title, items }) => {
  const [showMore, setShowMore] = useState(false);
  const modalCtx = useContext(ModalContext);
  const isDept = title.toLowerCase() === "department";
  useEffect(() => {
    modalCtx && setShowMore(modalCtx?.showModal);
  }, [modalCtx?.showModal]);
  const onShowMore = () => {
    modalCtx?.toggleModal(!showMore);
    setShowMore(!showMore);
  };
  return (
    <div className="py-5 px-2 bg-white border-2 border-gray-100">
      <header className="font-bold text-md mb-3">
        {title.toUpperCase()}
      </header>
      <ul className="mb-4">
        {items.map((itm) => {
          return (
            <li key={nanoid()}>
              <p className="text-sm cursor-pointer hover:underline mb-3">
                {itm.item}{" "}
                <span className="text-gray-500">
                  {Number(itm.count).toLocaleString()}
                </span>
              </p>
            </li>
          );
        })}
        {isDept && (
          <li
            onClick={onShowMore}
            className="text-purple-500 hover:opacity-50 cursor-pointer"
          >
            Show more
          </li>
        )}
      </ul>
    </div>
  );
};

export default Card;
