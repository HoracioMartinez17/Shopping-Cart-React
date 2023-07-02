import { ProductDetailsProps, ProductProps } from "../../../types/types";
import { ItemDetails } from "./ItemDetails";
import { getForItemId } from "../../../funtionsUtils/funtionsUtilis";
import { useEffect, useState } from "react";

export const ItemsDetailsContainer = ({ id }: ProductDetailsProps) => {
  const [item, setItem] = useState<ProductProps | { error: string } | null>(null);

  const fetchItem = async () => {
    try {
      const result = await getForItemId(id);
      setItem(result);
    } catch (error) {
      setItem({ error: error as string });
    }
  };
  useEffect(() => {
fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  if ("error" in item) {
    return <div>{item.error}</div>;
  }

  return <ItemDetails itemId={item.id} />;
}
