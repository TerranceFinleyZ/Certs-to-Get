import image from '../assets/skil.png'
import './Skill.css'

const Skill = () => {
  return (
    <div className="all">
      <a href="https://www.skillshare.com/en/" target="">
        <img src={image} alt="" className="" />
      </a>
      <h1>
      Skillshare's advanced marketing training includes training on Facebook ads, Instagram, and Google Ads to help any business scale.
      </h1>
    </div>
  )
}

export default Skill