import { useEffect, useState } from 'react';
import { ProductDetailsProps,Brand } from '../../../types/types';
import { ItemDetails } from './ItemDetails';
import { getProductById } from '../../../funtionsUtils/funtionsUtilis';

export const ItemsDetailsContainer = ({ id }: ProductDetailsProps) => {
  const [item, setItem] = useState<{ products: Brand[] } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const result: Brand[] = await getProductById(id);
        setItem({ products: result });
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Error fetching product');
      }
    };

    fetchItem();
  }, [id]);

  if (item === null && error === null) {
    return <div>Loading...</div>;
  }

  if (error !== null) {
    return <div>Error: {error}</div>;
  }

  return <ItemDetails item={item!} />;
};