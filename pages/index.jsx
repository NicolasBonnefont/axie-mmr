import { useEffect, useState } from 'react'
import Image from 'next/image'
import trofeu from '../public/trofeu.png'
import axios from 'axios'

import {
  Container,
  Text

} from '../styles/styles'
export default function Home() {
  const [trofeus, setTrofeus] = useState(0)

  useEffect(() => {
    CarregaTrofeus()

    setInterval(async () => {
      await CarregaTrofeus()
    }, 100000);

  }, [])

  async function CarregaTrofeus() {

    var options = {
      method: 'GET',
      url: `https://axie-infinity.p.rapidapi.com/get-slp/0x${process.env.RONIN}`,
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

  }
  return (
    <Container>
      <Image src={trofeu} alt="Picture of the author" />
      <Text>{trofeus}</Text>
    </Container>
  )
}
