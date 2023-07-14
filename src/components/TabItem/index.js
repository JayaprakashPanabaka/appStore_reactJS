// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsDetails, isActive, clickTabItem} = props
  const {displayText, tabId} = tabsDetails

  const activeTabBtnClassName = isActive ? 'active' : ''

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-container">
      {/* <h1>Hi Darling1</h1> */}
      <button
        type="button"
        onClick={onClickTabItem}
        className={`tabs-btn ${activeTabBtnClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
