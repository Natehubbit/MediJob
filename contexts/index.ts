import React from "react";

export const ModalContext = React.createContext<
  | {
      toggleModal: (
        val?: boolean,
        label?: string,
        list?: any[]
      ) => void;
      showModal: boolean;
      title?: string;
      list?: any[];
      setList?: (v: string[]) => void;
    }
  | undefined
>(undefined);
