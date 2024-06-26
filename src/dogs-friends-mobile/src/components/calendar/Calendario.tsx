import { useEffect, useState } from "react";
import { View } from "react-native";
import { Calendar } from "react-native-calendars";

export const Calendario = ({datas, setDataSel, all_days=true}) => {
  const [datasCal, setDatasCal] = useState({})
   
  useEffect(() => {
   const getDiasAtend = () => {
    let data = {}
    for(let i = 0; i < datas.length; i++){
      data[datas[i]] = {
        marked: true,
        dotColor: 'green',
        selected: true,
        selectedColor: 'green',
        selectedTextColor:'white',
        disableTouchEvent: false,
     }
    }
    setDatasCal(data)
   }

   if(datas.length > 0) getDiasAtend();
  },[datas])

    // const datas = {
    //     '2024-05-23': {
    //     marked: true,
    //     dotColor: 'green',
    //     selected: true,
    //     selectedColor: 'green',
    //     selectedTextColor:'white',
    //     disableTouchEvent: false,
    //   },
    //   '2024-05-22': {
    //     marked: true,
    //     dotColor: 'green',
    //     selected: true,
    //     selectedColor: 'green',
    //     selectedTextColor:'white',
    //     disableTouchEvent: false,
    //   },
    // }

    

  return (
    <View>
      {
        all_days ? 
          <Calendar
          style={{borderRadius: 10, elevation: 4, margin: 40}}
          onDayPress={date => {
              console.log(date);
              const {year, month, day} = date;
             
              setDataSel(date.dateString)
            
          }}
          //onMonthChange={() => {Alert.alert("movendo")}}
          initialDate={'2024-06-30'}
          minDate={'2023-12-31'}
          maxDate={'2025-06-31'}
          hideExtraDays={true}
        
        
          disabledByDefault 
          disableAllTouchEventsForDisabledDays
          disableAllTouchEventsForInactiveDays
          
          markedDates={datasCal}

          />
          :
            <Calendar
            style={{borderRadius: 10, elevation: 4, margin: 40}}
            onDayPress={date => {
              console.log("DAATAAAA",date.dateString)
                const {year, month, day} = date;
                setDataSel(date.dateString)
               
            }}
            //onMonthChange={() => {Alert.alert("movendo")}}
            initialDate={'2024-06-30'}
            minDate={'2023-12-31'}
            maxDate={'2025-06-31'}
            hideExtraDays={true}
           
                      
            markedDates={datasCal}

            />
      }
   </View>
  )
}
