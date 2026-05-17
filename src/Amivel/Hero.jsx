import { useEffect, useState} from 'react'
 
const messages = [
  "We deliver innovative IT solutions that drive growth",
  "enhance efficiency, and empower businesses to thrive in the digital age.",
  "Transform Your Business With Technology",
]

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % messages.length)
    },3000)

    return () => clearInterval(interval)
  },[])
  return (
    <div>
        <section className='sec1'><br /><br /><br />
          <div className='text-wrapper'>
            <h1 className='text'>{messages[index]}</h1>
          </div>

            <button id="btn1"
            onClick={() => window.open("/about","_blank")}><b>Know more</b></button>
        </section>
    </div>
  )
}

export default Hero