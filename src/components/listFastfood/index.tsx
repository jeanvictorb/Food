import { useEffect, useState } from 'react';
import { View } from 'react-native';
import RestaurantItens from './itens';
export interface RestaurantProps {
    id: string;
    name: string;
    image: string;
}

export  function RestaurantVerticalList() {
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
   <View  className='px-4 flex-1 w-full h-full mb-11 gap-4'>
    {restaurants.map( itens => (
        <RestaurantItens item={itens} key={itens.id}/>
    ))}
   </View>
  );
}