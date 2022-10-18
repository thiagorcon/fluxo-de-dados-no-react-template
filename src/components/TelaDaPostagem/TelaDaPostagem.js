import React, {useState} from 'react'
import {ContainerPostagem, Image, Description} from './styles'

const TelaDaPostagem = () => {
  const [image, setImage] = useState('https://picsum.photos/536/354')
  const [title, setTitle] = useState('titulo')
  const [description, setDescription] = useState('descrição aqui')

  return (
    <ContainerPostagem>
      <Image src={image} alt='drone view'/>
      <h1>{title}</h1>
      <Description>{description}</Description>
    </ContainerPostagem>
  )
}

export default TelaDaPostagem