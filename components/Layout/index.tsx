import React, { FC, useState } from "react";
import Footer from "../Footer";
import Modal from "../Modal";
import Navbar from "../Navbar/index";
import { ModalContext } from "../../contexts/index";

const Layout: FC = ({ children }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<
    string | undefined
  >();
  const [modalList, setModalList] = useState<string[]>([]);
  const toggleModal = (
    val?: boolean,
    label?: string,
    list?: string[]
  ) => {
    if (val !== undefined) {
      setShowModal(val);
    } else {
      setShowModal(!showModal);
    }
    if (label !== undefined) {
      setModalTitle(label);
    }
    if (list !== undefined) {
      setModalList(list);
    }
  };
  return (
    <ModalContext.Provider
      value={{
        showModal,
        toggleModal,
        title: modalTitle,
        list: modalList,
        setList: setModalList,
      }}
    >
      <Navbar />
      {children}
      <Modal />
      <Footer />
    </ModalContext.Provider>
  );
};

export default Layout;
