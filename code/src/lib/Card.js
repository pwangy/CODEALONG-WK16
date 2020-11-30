import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  padding: 20px;
  border-radius: 3px;
  background: #fff;
`

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`

const SecondaryText = styled.p`
  margin: 0;
  color: #6b6b6b;
`

const Thumbnail = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`

export const Card = ({ title, secondaryText, thumbnailURL }) => {

  return (
    <Container>
      <Thumbnail url={thumbnailURL} />
      {title && <Title>{title}</Title>}
        {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
    </Container>
  )
}