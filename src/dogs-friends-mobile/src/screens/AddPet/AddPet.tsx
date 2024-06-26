import { useEffect, useState } from "react"
import { Alert, Text, View } from "react-native"
import { HeaderAnimation } from "../../components/header/HeaderAnimation"
import { DrawerScreenProps } from "@react-navigation/drawer"
import { AddImagem } from "./components/AddImagem"
import { AddForm } from "./components/AddForm"
import { File } from "../../api/Files"
import { Pet } from "../../api/Pet"
import { styles } from "./styles"
import { useAuth } from "../../hooks/useAuth"
import { Cliente } from "../../api/Cliente"

const fileRepo = new File()
const petRepo = new Pet()
const cliente = new Cliente()

interface Props extends DrawerScreenProps<any, any>{}

const AddPet = ({route, navigation}: Props) => {

  const [imagens, setImagens] = useState([])
  const [pet, setPet] = useState(null)
  const { user, setUser, token } = useAuth()

 
  
  const sendPet = async() => {
    const petToSend = pet 
    petToSend.clienteId = user.id

    const imgsToSend = imagens.map(async (img) => (
      {url: await fileRepo.upload(img)}
    ))

   await Promise.all(imgsToSend).then((vecImages) => {
      console.log(vecImages)
      petToSend.imagens = vecImages
    }).catch((error)=> {
      console.log(error)
    })

    try {
      const res = await petRepo.addPet(petToSend)
      if(res.status == 201){
        const resp = await cliente.getCliente(token)
        setUser(resp)
        Alert.alert("Pet cadastrado com sucesso")
        navigation.navigate("Dashboard")
      }
      
    } catch (error) {
      console.log(error)
    } 
  }

  useEffect(() => {
    if(pet) sendPet()
  },[pet])

  return (
    <HeaderAnimation route={route} navigation={navigation}>
   
     <View style={styles.container}>
          <Text style={{fontFamily: "semibold"}}>Cadastrar Pet</Text>
          <AddImagem imagens={imagens} setImagens={setImagens}/>
          <AddForm setPet={setPet}/>
     </View>
  
    </HeaderAnimation>
    )
 
}

export default AddPet