import './index.css'

const CryptocurrencyItem = props => {
  const {eachItem} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = eachItem
  console.log(currencyName)
  return (
    <li className="crypto-list">
      <div className="crypto-img-name-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p>{currencyName}</p>
      </div>

      <div className="price-container">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
