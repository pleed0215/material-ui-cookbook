import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Theme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import React, { ChangeEventHandler, useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  control: { margin: theme.spacing(2), minWidth: 200 },
}));

type CategoryProps = { label: string; id: number; selected?: boolean };
type ProductProps = {
  label: string;
  id: number;
  category: number;
  selected?: boolean;
};

export const StateControlledSelect = () => {
  const styles = useStyles();

  const [categories, setCategories] = useState<CategoryProps[]>([
    {
      label: "Category1",
      id: 1,
    },
    { label: "Category2", id: 2 },
    { label: "Category3", id: 3 },
  ]);

  const [products, setProducts] = useState<ProductProps[]>([
    { label: "Product1", id: 1, category: 1 },
    { label: "Product2", id: 2, category: 1 },
    { label: "Product3", id: 3, category: 1 },
    { label: "Product4", id: 4, category: 2 },
    { label: "Product5", id: 5, category: 2 },
    { label: "Product6", id: 6, category: 2 },
    { label: "Product7", id: 7, category: 3 },
    { label: "Product8", id: 8, category: 3 },
    { label: "Product9", id: 9, category: 3 },
  ]);
  type SetterProps = {
    [index: string]:
      | React.Dispatch<CategoryProps[]>
      | React.Dispatch<ProductProps[]>;
  };
  const setters: SetterProps = {
    categories: setCategories,
    products: setProducts,
  };
  type CollectionsProp = {
    [index: string]: Array<ProductProps> | Array<CategoryProps>;
  };
  const collections: CollectionsProp = { categories, products };

  const onCategoryChange: ChangeEventHandler<{
    name?: string;
    value: unknown;
  }> = (e) => {
    const newCategory = categories.map((category) => ({
      ...category,
      selected: false,
    }));
    const index = newCategory.findIndex(
      (category) => category.id === e.target.value
    );
    newCategory[index] = { ...newCategory[index], selected: true };
    setCategories(newCategory);
  };
  const onProductChange: ChangeEventHandler<{
    name?: string;
    value: unknown;
  }> = (e) => {
    const newProduct = products.map((product) => ({
      ...product,
      selected: false,
    }));
    const index = newProduct.findIndex(
      (product) => product.id === e.target.value
    );
    newProduct[index] = { ...newProduct[index], selected: true };
    setProducts(newProduct);
  };

  const category = categories.find((category) => category.selected) || {
    id: "",
  };
  const product = products.find((product) => product.selected) || { id: "" };

  return (
    <>
      <FormControl className={styles.control}>
        <InputLabel htmlFor="categories">Category</InputLabel>
        <Select
          value={category.id}
          onChange={onCategoryChange}
          inputProps={{ name: "categories", id: "categories" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={styles.control} disabled={category.id === ""}>
        <InputLabel htmlFor="products">Products</InputLabel>
        <Select
          value={product.id}
          onChange={onProductChange}
          inputProps={{ name: "products", id: "products" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {products
            .filter((product) => product.category === category.id)
            .map((product) => (
              <MenuItem key={product.id} value={product.id}>
                {product.label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
};
