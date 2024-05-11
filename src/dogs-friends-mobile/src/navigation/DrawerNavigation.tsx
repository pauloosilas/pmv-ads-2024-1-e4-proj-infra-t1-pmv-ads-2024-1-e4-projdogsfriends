import { createDrawerNavigator } from "@react-navigation/drawer"
import { BottomNavigation } from "./BottomNavigation"
import { Home, Login } from "../screens"
import Dashboard from "../screens/Dashboard/Dashboard"

export const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="BottomNavigation" component={BottomNavigation} />
    </Drawer.Navigator>
  )
}
