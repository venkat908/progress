import React from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom' // Import Routes component
import Home from '../pages/Home'
import Products from '../pages/Products'
import Contact from '../pages/Contact'
import routes from '../constants/routes.json'

const Main = () => {
  return (
    <MainWrapper>
      {/* Wrap Route components within Routes */}
      <Routes>
        <Route exact path={routes.HOME} element={<Home />} />
        <Route exact path={routes.PRODUCTS} element={<Products />} />
        <Route exact path={routes.CONTACT} element={<Contact />} />
      </Routes>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 4rem;
`

export default Main
