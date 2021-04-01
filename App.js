import { StatusBar as ExpoStatusBar } from "expo-status-bar"; /* rename status bar since we will use the StatusBar from react-native */
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme"
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";


/* const isAndroid = Platform.OS === 'android'; */

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
