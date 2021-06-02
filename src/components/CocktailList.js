import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  // Global context
  const {cocktails, loading} = useGlobalContext()

  if (loading) {
    return <Loading/>
  } 

  if (cocktails.length < 1) {
    return (<h2 className="section-title">no cocktails matched your search criteria</h2>)
  }

  return (
      <div>
        <Cocktail cocktails={cocktails}/>
      </div>
    )
}

export default CocktailList
