import { Text, View } from "react-native"

import { useState } from "react"
import { DrawerScreenProps } from "@react-navigation/drawer";
import { HeaderContainer } from "../../components/header/HeaderContainer";
import { Search } from "../../components/search/Search";
import { Cliente } from "../../api/Cliente";
import { FlatList } from "react-native-gesture-handler";
import { Card } from "../../components/search/Card";
import { styles } from "./styles";
import { HeaderAnimation } from "../../components/header/HeaderAnimation";
import { useAuth } from "../../hooks/useAuth";

interface Props extends DrawerScreenProps<any, any>{}
const clienteRepo = new Cliente();

const getUf = (state: string) => {
  let map = {};

  map["Minas Gerais"] = "MG"
  map["Acre"] = "AC"
  map["Amazonas"] = "AM"
  map["Bahia"] = "BA"
  map["Ceará"] = "CE"
  map["Goiás"] = "GO"
  map["Distrito Federal"] = "DF"
  map["Maranhão"] = "MA"
  map["Tocantins"] = "TO"
  map["Sergipe"] = "SE"
  map["São Paulo"] = "SP"
  map["Santa Catarina"] = "SC"
  map["Roraima"] = "RR"
  map["Rondônia"] = "RO"
  map["Rio Grande do Sul"] = "RS"
  map["Rio Grande do Norte"] = "RN"
  map["Rio de Janeiro"] = "RJ"
  map["Piauí"] = "PI"
  map["Pernambuco"] = "PE"
  map["Paraná"] = "PR"
  map["Paraíba"] = "PB"
  map["Pará"] = "PA"
  map["Espírito Santo"] = "ES"
  map["Mato Grosso"] = "MT"
  map["Mato Grosso do Sul"] = "MS"
  map["Amapá"] = "AP"
  map["Alagoas"] = "AL"

  return map[state]
}

const Pesquisa = ({route, navigation}:Props) => {
  const {user, token} = useAuth()
  const [selectedItem, setSelectedItem] = useState(null);
  const [passeadores, setPasseadores] = useState([])

  const searchSelected = async(city: string, state:string) => {
     
    try {
          
      const response = await clienteRepo.search(city, getUf(state), 10, 0, token)
      setPasseadores(response)
      
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <View>        
      <View style={{zIndex:100}}>
     
        <HeaderAnimation route={route} navigation={navigation} >

           <View style={{zIndex: 999, bottom: 30}}>
            <Search onPress={searchSelected}/>
          </View>
      
         <View style={styles.container}>
          {
            passeadores.length > 0 ?
            passeadores.map((passeador, index) => (
              <Card key={index} passeador={passeador}/>
            ))
            :(
              <View style={{height: "60%",justifyContent: "center", alignItems: "center"}}>
                <Text style={{fontFamily:"bold", fontSize: 24, textAlign:'center', color:"#9E9E9E"}}>Comece pesquisando em uma cidade</Text>
              </View>
            )
          }
          {/* <FlatList
            data={passeadores}
            renderItem={({item}) => (
              <Card passeador={item}/>
            )}
          /> */}
        </View>
        </HeaderAnimation>
      </View>
       
        
    </View>
  )
}

export default Pesquisa