import { useSelector } from "react-redux"

const Notification = () => {
  const notification = useSelector(state => state.notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    maxWidth: '600px',
    margin: '10px',
    textAlign: 'center',
    display: notification ? '' : 'none'
  }
  
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification