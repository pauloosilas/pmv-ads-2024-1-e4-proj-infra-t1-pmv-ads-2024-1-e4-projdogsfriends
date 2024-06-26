import { DrawerScreenProps } from "@react-navigation/drawer"
import { View, Image, ImageBackground } from "react-native"

import { SideMenuButton } from "../SideMenuButton"
import { UserProfile } from "../UserProfile"
import { styles } from "./styles"
 
interface Props extends DrawerScreenProps<any, any>{
  children:any
}

export const HeaderContainer = ({route, navigation, children}:Props  ) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
          style={styles.bgtexture}
          source={require('../../../../assets/images/bgtexture.png')}/>
      
      <View style={styles.content}>
        <View style={styles.header}>
            <SideMenuButton navigation={navigation} route={route} />
            <UserProfile />        
        </View>
      </View>
      <View style={styles.search}>
        {children}
      </View>

    </View>
 
  )
}
