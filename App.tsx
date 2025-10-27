
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { CategoriesScreen } from './app/CategoriesScreen';
import { CategoryDetailScreen } from './app/CategoryDetailScreen';
import { DetailsScreen } from './app/DetailsScreen';
import { HomeScreen } from './app/HomeScreen';
import { RandomScreen } from './app/RandomScreen';
import { SavedScreen } from './app/SavedScreen';
import { SearchDetailScreen } from './app/SearchDetailScreen';
import { SearchScreen } from './app/SearchScreen';
import { ThirdScreen } from './app/ThirdScreen';




const RootStack = createNativeStackNavigator({
  initialRouteName: 'Categories',
  screens:  {
      Home:{
      screen: HomeScreen,
      options: {
        title: 'Hemmaskärm',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Details:DetailsScreen,
    Third: ThirdScreen,
    Categories: CategoriesScreen,
    CatogeryDetails: CategoryDetailScreen,
    Random: RandomScreen,
    Search: SearchScreen,
    SearchDetail: SearchDetailScreen,
    Saved: SavedScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <Navigation/>
  );
}

