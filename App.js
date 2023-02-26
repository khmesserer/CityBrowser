
import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as WebBrowser from 'expo-web-browser';
import Button from './Button';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const artImage = require("./assets/images/art.png");
const artUrl = "https://www.artic.edu/";
const mileImage = require("./assets/images/mile.png");
const mileUrl = "https://www.themagnificentmile.com/";
const pierImage = require("./assets/images/pier.png");
const pierUrl = "https://navypier.org/";
const waterImage = require("./assets/images/water.png");
const waterUrl = "https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html";
const willisImage = require("./assets/images/willis.png");
const willisUrl = "https://www.willistower.com/";

function handleButtonPress(url) {
  WebBrowser.openBrowserAsync(url);
}

function LocationScreen({ route, navigation }) {
  const { locationImage, url } = route.params;

  return (
    <View style={styles.container}>
      <Image source={locationImage} style={styles.image} />
      <Button info style={styles.button} onPress={() => {handleButtonPress(url)}}>
        More Information
      </Button>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        useLegacyImplementation 
        initialRouteName="Home"
        screenOptions={{
          headerTitleStyle: {
            color: "#000",
          },
        }}>
        <Drawer.Screen 
          name="Art"
          component={LocationScreen} 
          initialParams={{ locationImage: artImage, url: artUrl }} 
          options={{ title: "Art Institute of Chicago" }}
        />
        <Drawer.Screen 
          name="Mile"
          component={LocationScreen} 
          initialParams={{ locationImage: mileImage, url: mileUrl }} 
          options={{ title: "Magnificent Mile" }}
        />
        <Drawer.Screen 
          name="Pier"
          component={LocationScreen} 
          initialParams={{ locationImage: pierImage, url: pierUrl }} 
          options={{ title: "Navy Pier" }}
        />
        <Drawer.Screen 
          name="Water"
          component={LocationScreen} 
          initialParams={{ locationImage: waterImage, url: waterUrl }} 
          options={{ title: "Water Tower" }}
        />
        <Drawer.Screen 
          name="Willis"
          component={LocationScreen} 
          initialParams={{ locationImage: willisImage, url: willisUrl }} 
          options={{ title: "Willis Tower" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 360,
    width: 240,
  },
  button: {
    margin: 10,
  },
});
