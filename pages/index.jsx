import { useEffect, useState } from 'react'
import Image from 'next/image'
import daniel from '../public/trofeu.png'
import ggaxie from '../public/ggaxie.png'
import axios from 'axios'

import {
  Container,
  Text
} from '../styles/daniel'

import {
  Containerggaxie,
  Textggaxie
} from '../styles/ggaxie'


export default function Home() {
  const [trofeus, setTrofeus] = useState(0)

  useEffect(() => {
    CarregaTrofeus()

    setInterval(async () => {
      await CarregaTrofeus()
    }, 10000);

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
      console.log(response.data)
      setTrofeus(response.data.mmr)
      console.log(response.data.mmr)
    }).catch(function (error) {
      console.error(error);
    });

  }
  return (
    <>
      {process.env.ID == 'daniel' &&
        <Container>
          <Image src={daniel} alt="Picture of the author daniel" />
          <Text>{trofeus}</Text>
        </Container>
      }

      {process.env.ID == 'ggaxie' &&
        <Containerggaxie>
          <Image
           
          src={ggaxie} 
          alt="Picture of the author ggaxie"                   
          
          />
          <Textggaxie>{2218}</Textggaxie>
        </Containerggaxie>
      }
    </>

  )
}
