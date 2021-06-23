import { nanoid } from "nanoid";
import React, { FC, useContext } from "react";
import { ModalContext } from "../../contexts";

interface ModalProps {
  title?: string;
}

const Modal: FC<ModalProps> = () => {
  const ctx = useContext(ModalContext);
  if (!ctx?.showModal) return null;
  return (
    <div className="fixed h-screen w-screen top-0 bg-fixed flex-col justify-center items-center flex bg-black bg-opacity-50">
      <div className="md:w-2/3 bg-white shadow-lg border-gray-100 border-3 rounded-t-sm rounded-b-lg overflow-hidden">
        <div className="flex justify-between p-2 border-b-2 border-gray-200">
          <header>{ctx.title}</header>
          <button
            onClick={() => ctx?.toggleModal()}
            className="px-2"
          >
            &#10005;
          </button>
        </div>
        <div className="p-5">
          <ul className="mb-4 grid grid-cols-4 gap-2">
            {ctx.list?.map((itm) => {
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
