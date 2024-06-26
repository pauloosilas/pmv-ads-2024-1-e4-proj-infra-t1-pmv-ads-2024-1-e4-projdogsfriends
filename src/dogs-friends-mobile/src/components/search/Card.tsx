import { Image, Text, View, TouchableOpacity } from "react-native"
import { styles } from "../header/UserProfile/styles"
import { useNavigation } from "@react-navigation/native"
import { URL_IMAGE_BASE } from "../../constants/constants"


export const Card = ({passeador}) => {
  const navigation = useNavigation()
  console.log(passeador)
   return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Passeador", {passeadorId: passeador.id})}>
        <View style={styles.content}>
            <View>
               {
                passeador.fotoPerfil ? 
                (
                    
                <Image source={{uri: `${URL_IMAGE_BASE}${passeador.fotoPerfil}`}} 
                style={{width: 70, height: 70, borderRadius:50}} />
            
                ): (  
                    <Image source={require("../../../assets/images/imgperfil.png")} 
                    style={{width: 70, height: 70, borderRadius:50}} />
                   )
               }
            </View>

            <View>
                <Text>{ passeador.nome } { passeador.sobrenome }</Text>
                <Text>{ passeador.enderecos[0].cidade }</Text>
                <View style={{ width:"85%", flexDirection: "row", justifyContent:"space-between" }}>
                    <Text>{ passeador.enderecos[0].bairro }</Text>
                    <Text>visualizar</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
   )
}