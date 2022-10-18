import React from 'react'
import {ContainerPostagem, Image, Description} from './styles'

const TelaDaPostagem = () => {
  return (
    <ContainerPostagem>
      {/* descomentar a renderização condicional quando implementar os estados, atenção ao nome dado às props */}
      {/* {props.image && props.description ? <> */}
            <Image src={"https://picsum.photos/536/354"} alt='drone view'/>
            <Description>{'Lorem Ipsum'}</Description>
    {/* </> : "Faça uma postagem!"} */}
    </ContainerPostagem>
  )
}

export default TelaDaPostagem