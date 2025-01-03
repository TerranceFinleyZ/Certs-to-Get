import image from '../assets/code.cert.png'
import './Home.css'

const Home = () => {
  return (
    <div className="more">
        <h3 className='gey'>More Certs!</h3>
        <a href="https://www.codecademy.com/" target="">
      <img src={image} alt="" className="w-[400px] cursor-pointer rounded-xl shadow-xl shadow-pink-500 transition-all duration-300 hover:-translate-y-5
          hover:scale-105 hover:shadow-2xl hover:shadow-pink-500 md:w-[850px] " />
      </a>
      <h1>
      Computer science is very important to know and master as an engineering discipline.
      </h1>
        
    </div>
  )
}

export default Home