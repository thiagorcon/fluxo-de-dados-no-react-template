import React from 'react'
import {ContainerPostagem, Image, Description} from './styles'

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
      {/* {props.image ? <> */}
          <Image src={props.image} alt='drone view'/>
            <Description>{props.description}</Description>
    {/* </> : "Faça uma postagem!"} */}
    </ContainerPostagem>
  )
}

export default TelaDaPostagem