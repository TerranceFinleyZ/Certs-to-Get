import image from '../assets/cp.jpg'
import '../components/Last.css'

const Last = () => {
  return (
    <div className="mose">
      <img src={image} alt="" />
    
      <h1>
        <a href='https://aws.amazon.com/certification/certified-cloud-practitioner/' target=''>
            <p >https://aws.amazon.com/certification/certified-cloud-practitioner/</p>
        </a>
      I am in the process of obtaining my <span className='king'>AWS Cloud Practitioner certification</span>, which will allow me to become a certified cloud engineer.
      </h1>
        
    </div>
  )
}

export default Last