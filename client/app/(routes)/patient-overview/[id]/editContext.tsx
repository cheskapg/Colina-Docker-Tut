<<<<<<< HEAD
=======
"use client";
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

interface EditContextType {
  isEdit: boolean;
<<<<<<< HEAD
=======
  isOpenHovered: boolean;
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  toggleEdit: () => void;
  saveClicked: () => void;
  disableEdit: () => void;
  cancelClicked: () => void;
<<<<<<< HEAD
  isSave: boolean; // Define toggleEdit as a function that takes no arguments and returns void
=======
  isSave: number; // Define toggleEdit as a function that takes no arguments and returns void
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
}

const defaultValue: EditContextType = {
  isEdit: false,
<<<<<<< HEAD
=======
  isOpenHovered: false,

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  toggleEdit: () => {},
  cancelClicked: () => {},
  disableEdit: () => {},

<<<<<<< HEAD
  isSave: false,
=======
  isSave: 0,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  saveClicked: () => {},
  // Set the default value of isEdit to false
};
//create the context first
export const EditContext = createContext(defaultValue);
// use the context passing the context as an argument
export const useEditContext = () => useContext(EditContext);
// create the provider to wrap the components that will use the context
export const EditProvider = ({ children }: { children: React.ReactNode }) => {
  const [isEdit, setIsEdit] = useState(false);
<<<<<<< HEAD
  const [isSave, setIsSave] = useState(false);
=======
  const [isOpenHovered, setIsOpenHovered] = useState(false);
  const [isSave, setIsSave] = useState(0);
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de

  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
    console.log("editcontext", isEdit);
<<<<<<< HEAD
    setIsSave(false);
=======
    // setIsSave(false);
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  };
  const disableEdit = () => {
    setIsEdit(false);
    console.log("restrictEdit", isEdit);
<<<<<<< HEAD
    setIsSave(false);
  };

  const saveClicked = () => {
    setIsSave(true);
    setIsEdit(false);
=======
    // setIsSave(false);
  };

  const saveClicked = () => {
    setIsSave(isSave+1);

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de

    console.log("setIsSave", isSave);
  };
  const cancelClicked = () => {
<<<<<<< HEAD
    setIsSave(false);
=======
    // setIsSave(false);
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    setIsEdit(false);

    console.log("setIsSave", isSave);
  };

<<<<<<< HEAD
=======
  const isOpenHoveredClicked = () => {
    
    setIsEdit(false);

    console.log("setIsSave", isSave);
  };


>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  useEffect(() => {
    setIsSave(isSave);
    setIsEdit(isEdit);
    console.log("isEdit changed context:", isEdit);
    console.log("isSave changed context:", isSave);
  }, [isEdit, isSave]); // Include isEdit in the dependency array to ensure that the effect runs whenever the isEdit state changes

  return (
    //values to pass in the children when using the provider
    <EditContext.Provider
      value={{
        isEdit,
<<<<<<< HEAD
=======
        isOpenHovered,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        toggleEdit,
        isSave,
        saveClicked,
        disableEdit,
        cancelClicked,
      }}
    >
      {children}
    </EditContext.Provider>
  );
};
