import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import trofeu from '../public/trofeu.png'
import api from '../services/api'
import axios from 'axios'

import {
  Container,
  Text

} from '../styles/styles'
export default function Home() {
  const [trofeus, setTrofeus] = useState(0)
  const [cont, setCont] = useState(0)

  useEffect(() => {
    CarregaTrofeus()

    setInterval(async () => {
      await CarregaTrofeus()
    }, 100000);

  }, [])

  async function CarregaTrofeus() {

    console.log(process.env.KEY)

    var options = {
      method: 'GET',
      url: 'https://axie-infinity.p.rapidapi.com/get-slp/0x7bb0048f76dbac80cd65b6215b3e39b528dbf7cd',
      headers: {
        'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
        'x-rapidapi-key': process.env.KEY
      }
    };

    axios.request(options).then(function (response) {
      setTrofeus(response.data.mmr)
      console.log(response.data.mmr)
    }).catch(function (error) {
      console.error(error);
    });

    setCont(cont + 1)
  }
  return (
    <Container>
      <Image src={trofeu} alt="Picture of the author" />
      <Text>{trofeus}</Text>
    </Container>
  )
}
