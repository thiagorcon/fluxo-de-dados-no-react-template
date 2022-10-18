import React from 'react'
import {ContainerPostagem, Image, Description} from './styles'

const TelaDaPostagem = () => {
  return (
    <ContainerPostagem>
      <Image src='https://picsum.photos/536/354' alt='drone view'/>
      <h1>Lorem Ipsum is simply dummy tex</h1>
      <Description>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut</Description>
    </ContainerPostagem>
  )
}

export default TelaDaPostagem