import { ScrollView, View } from "react-native";
import { Banner } from "../components/banner";
import { Head } from "../components/header/Head";

import Constants from "expo-constants";
import { Search } from "../components/search";
import { Section } from "../components/section/section";
import { Trending } from "../components/trending";

//para funcionar tem que rodar 2 cdm
//npx expo start para rodar o front
//npx json-server db.json para rodar backend
//para Jean do futuro

const statusBarHeight = Constants.statusBarHeight;
export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Head />

        <Banner />

        <Search />
      </View>

      <Section
        name="Comidas em alta"
        label="Veja mais"
        action={() => console.log("Clicou no botao comidas em alta")}
        size="text=2xl"
      />
      <Trending />
      
      <Section
        name="Famoso no Food"
        label="Veja todos"
        action={() => console.log("Clicou no botao famoso no food")}
        size="text-xl"
      />
    </ScrollView>
  );
}
