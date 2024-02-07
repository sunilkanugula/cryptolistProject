import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoDataList()
  }

  getCryptoDataList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formattedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))

    this.setState({cryptoData: formattedData, isLoading: false})
  }

  render() {
    const {cryptoData, isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="crypto-container">
            <ul className="crypto-list-container">
              <li className="crypto-list-heading">
                <p>Coin Type</p>
                <div className="price-container">
                  <p>USD</p>
                  <p>EURO</p>
                </div>
              </li>
              {cryptoData.map(each => (
                <CryptocurrencyItem eachItem={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
