import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


import React, {useEffect, useState} from 'react'
import { db } from '../database/firebase'
import { collection, onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore'


export default function Portfolio() {

  const [trabajos, setTrabajos] = useState([])


  useEffect(() => {
  
    const collectionRef = collection(db, 'portfolio')
    const q = query(collectionRef, orderBy('nombre', 'desc'))

    const unsuscribe = onSnapshot(q, querySnapshot => {
      setTrabajos(querySnapshot.docs.map(doc =>{
          id: doc.data().id
          nombre: doc.data().nombre
          descripcion: doc.data().descripcion
          tecnologia: doc.data().tecnologia
          imagen: doc.data().imagen
      }))
    })
    console.log(unsuscribe.toString())
    return unsuscribe
  
  },[])


  return (
    <SafeAreaView>
      <Text>Portfolio</Text>

    </SafeAreaView>
  )
}