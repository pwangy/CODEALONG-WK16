import React from 'react'
import styled from 'styled-components/macro'
import { Card } from './lib/Card'

const ThinnerCard = styled(Card)`
  width: 400px;
`

const App = () => {
  return (
   <div>
     <ThinnerCard 
      coverImage="https://www.fillmurray.com/500/300"
      thumbnailURL="https://www.fillmurray.com/100/100"
      title="I am the title" 
      secondaryText="I'm a fancy paragraph"
     />

     <ThinnerCard title="I have no other props sad-face" secondaryText="HEY! Whut am I? Chopped liver?">
       Don't forget the children!
     </ThinnerCard>

     <Card title="Hay is for horses"/>

     <Card>
       Hello! I'm a child.
     </Card>
   </div>
  )
}
export default App