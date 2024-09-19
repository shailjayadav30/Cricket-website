import "../App.css"
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const GotoTop = () => {
    const goToBtn=()=>{
        window.scrollTo({top:0,left:0,behavior:'smooth'})
    }
  return (
    <div className="flex items-center justify-center fixed bottom-4 cursor-pointer  bg-white overflow-hidden rounded-full right-6 bounce-arrow"  onClick={goToBtn}>
  <FontAwesomeIcon icon={faArrowCircleUp} className='text-[#1b9aaa] text-4xl '/>

    </div>
  )
}

export default GotoTop

