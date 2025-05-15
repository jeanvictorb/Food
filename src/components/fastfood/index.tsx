import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { CardHorizontalRestaurant } from './restaurant';

export interface RestaurantProps {
    id: string;
    name: string;
    image: string;
}


export  function FastFood() {
    const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);

    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch("http://10.35.238.92/restaurants");
            const data = await response.json();
            setRestaurants(data);
        }
        getRestaurants();
    }, []);
 return (
   <FlatList
   data={restaurants}
   renderItem={({ item}) => <CardHorizontalRestaurant restaurant={item} />}
   horizontal={true}
   />
  );
}