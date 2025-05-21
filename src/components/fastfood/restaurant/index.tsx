import { Image, Pressable, Text, View } from 'react-native';
import { RestaurantProps } from '..';

export  function CardHorizontalRestaurant({restaurant}: { restaurant: RestaurantProps }) {
 return (
   <Pressable>
         <Image source={{ uri: restaurant.image }} className="w-20 h-20 rounded-full" />
         <View className='flex flex-row bg-neutral-900/90 w-fit gap-1 rounded-full absolute top-2 right-2 px-2 py-1 items-center justify-center' />
     <Text className='text-black font-medium text-lg leading-4' numberOfLines={2}>
             {restaurant.name}
         </Text>
     </Pressable>
  );
}