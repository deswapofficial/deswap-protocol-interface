// ** Logo
import logo from '@assets/images/img/Thunder-move.png'
import { useEffect } from 'react'

const Spinner = ({loading}) => {
  useEffect(() => {
    if(loading){
      document.body.classList.add("no-sroll")
    } else {
      document.body.classList.remove("no-sroll")
    }
    return () => {
      document.body.classList.remove("no-sroll")
    }
  }, [loading])
  return (
    loading ? 
    <div className='fallback-spinner vh-100'>
      <img className='fallback-logo' src={logo} alt='logo' />
      <div className='loading'>
        <div className='effect-1 effects'></div>
        <div className='effect-2 effects'></div>
        <div className='effect-3 effects'></div>
      </div>
    </div> :
    null
  )
}

export default Spinner
