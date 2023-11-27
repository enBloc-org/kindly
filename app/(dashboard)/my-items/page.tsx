'use client';
import React, { useEffect, useState } from 'react';
import { RetreiveItemsFromSupabase } from '@/utils/supabase/RetreiveFromSupabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import ItemCard from '@/components/ItemCard';

const MyItemsPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supabase = createClientComponentClient();
        const { data } = await supabase.auth.getSession();

        const currentUserId = data.session?.user.id;

        if (!currentUserId) {
          // Handle the case where the user ID is not available
          console.error('User ID not available');
          return <div>Error loading items</div>;
        } else {
          console.log(currentUserId);

          const fetchedItems = await RetreiveItemsFromSupabase(
            'items',
            '',
            'donated_by',
            currentUserId
          );
          console.log(fetchedItems);
          setItems(fetchedItems);
        }
      } catch (error) {
        console.error('Error loading items', error);
      }
    };
    fetchData();
  }, []);

  return (
    <ul>
      {items?.map((item) => (
        <li key={item.id}>
          <ItemCard
            img={item.image}
            title={item.item_name}
            size={item.size}
            donor={item.donated_by}
            location={item.postcode}
            postageCovered={item.postable}
            link={item.item_description}
          ></ItemCard>
        </li>
      ))}
    </ul>
  );
};

export default MyItemsPage;
