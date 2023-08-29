import { useState } from "react";
import { AddCategory,GiftGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return; //  si existe el valor en el array , sale de la fx

    // console.log(newCategory);
    setCategories([newCategory, ...categories]);
    // setCategories(cat=>[newCategory,...cat])
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((category) => (
        <GiftGrid key={category} category={category} />
      ))}
    </>
  );
};
