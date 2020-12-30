import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CountryNotFound from '../components/CountryNotFound'
import RestContext from '../context/rest-context'
import { thousands_separators } from '../helpers/helpers'
import CountryDetails from '../components/CountryDetails'
import Spinner from '../components/Spinner'
import GoBack from '../components/GoBack'

const Details = () => {
  const { name } = useParams()

  const [langs, setLangs] = useState([])
  const [langsName, setLangsName] = useState([])

  const [currencies, setCurrencies] = useState([])
  const [currencyList, setCurrencyList] = useState([])

  const [borders, setBorders] = useState([])

  const [pops, setPops] = useState(0)

  const { country, isLoading, error, fetchCountry, fetchByCode } = useContext(
    RestContext
  )

  //UseEffects
  useEffect(() => {
    name.length > 3 ? fetchCountry(name) : fetchByCode(name)
  }, [name])

  useEffect(() => {
    setLangs(
      country.languages ? country.languages : [{ name: 'No known Lang' }]
    )
    setCurrencies(
      country.currencies ? country.currencies : [{ name: 'No known Currency' }]
    )

    setBorders(borders.length !== 0 ? [...country.borders] : ['No Border'])

    if (country.population) {
      setPops(thousands_separators(country.population))
    }
  }, [country])

  useEffect(() => {
    listLanguages()
    listCurrencies()
  }, [langs])

  //Local Helper Functions

  const listLanguages = () => {
    const languages = []
    for (let i = 0; i < langs.length; i++) {
      languages.push(langs[i].name)
    }
    setLangsName(languages)
  }

  const listCurrencies = () => {
    const currency = []
    for (let i = 0; i < currencies.length; i++) {
      currency.push(currencies[i].name)
    }
    setCurrencyList(currency)
  }

  return (
    <div className="container">
      {error === null ? (
        <>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <GoBack />
              <CountryDetails
                flag={country.flag}
                name={country.name}
                nativeName={country.nativeName}
                population={pops}
                region={country.region}
                subregion={country.subregion}
                capital={country.capital}
                topLevelDomain={country.topLevelDomain}
                currencyList={currencyList}
                langsName={langsName}
                borders={borders}
              />
            </>
          )}
        </>
      ) : (
        <CountryNotFound />
      )}
    </div>
  )
}

export default Details
