// Write your code here
import './index.css'

const AppItem = props => {
  const {appsDetails} = props
  const {imageUrl, appName} = appsDetails
  return (
    <div>
      <li className="app-item-container">
        {/* <h1>Hi Darling2</h1> */}
        <img src={imageUrl} alt={appName} className="app-img" />
        <p className="app-title">{appName}</p>
      </li>
    </div>
  )
}

export default AppItem
