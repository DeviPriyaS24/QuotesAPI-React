import React, { useEffect, useState } from 'react'
import './quotesStyle.css';


const Quotes = () => {

    const [quotes,setQuotes] = useState([])

  const apiUrl = 'https://dummyjson.com/quotes'

  const quotesApiFetch = async ()=>{
    let result = await fetch(apiUrl)
    let resultData = await result.json()
    console.log(resultData);

    setQuotes(resultData.quotes)
  }

  useEffect(()=>{
    quotesApiFetch()
  },[])

  console.log(quotes);

  return (
    <div className='main-div m-5'>
        {quotes.map((eachQuote)=>(
            <div className='quoteContain'>
            <p>{eachQuote.quote}</p>
            <p className='author-name'>- {eachQuote.author}</p>
        </div>
        ))}
        
    </div>
  )
}

export default Quotes