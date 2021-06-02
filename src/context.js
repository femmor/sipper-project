import React, { useState, useContext, useEffect, createContext } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = createContext()

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value='hello'>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}