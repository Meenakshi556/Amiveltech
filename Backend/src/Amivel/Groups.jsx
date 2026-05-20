import React from 'react'
import office from '../Amivel/assets/office.jpg'
import ai from '../Amivel/assets/ai.jpg'
import electronics from '../Amivel/assets/electronics.avif'
import city from '../Amivel/assets/city.webp'
import groupphoto from '../Amivel/assets/groupphoto.webp'
import weare from '../Amivel/assets/weare.webp'



function Groups(props) {
    
  return (
    <div>
        <section className='groupcards1'>
            <div className="img1"><img src={office} alt='Office' height={379} width={380} className='zoom-img'/></div>
            <div className="colorcards" id="second"><h3>DRIVING BUSINESS VALUE WITH AGENTIC AI</h3><br />
            <p>A Harvard Business Review Analytic Services Report sponsored by Amivel</p>
            </div>
            <div className="img2"><img src={electronics} alt="automobiles" srcset="" height={379} width={380} className='zoom-img'/>
            </div>
            <div className="colorcards" id="fourth"><h3>INTRODUCING THE Amivel INNOVATION NETWORK</h3><br />
            <p>A catalyst for AI-powered co-innovation.</p>
            <br />
            </div>
        </section>
        <section className='groupcards2'>
            <div className='colorcards' id="eight">
            <b><p>"AMIVELTECH Pvt Ltd is a visionary tech partner that empowers businesses to thrive in the digital era, crafting innovative solutions that drive growth, efficiency, and success."</p></b>
            </div>
            <div className="img3"><img src={weare} alt="together"  height={379} width={380} className='zoom-img'/></div>
                <div className="colorcards" id="fifth">
                <h3>
                    THE NEXT BIG THING: SUPPLY CHAIN
                </h3><br />
                <p>A Consumer Goods Technology report in collaboration with Amivel.</p>
                
                </div>
            <div className="img4"><img src={groupphoto} alt="team" height={379} width={380} className='zoom-img'/></div>
            
        </section>
        <section className='groupcards3'>
            <div className="img5"><img src={ai} alt="ai" height={379} width={380} className='zoom-img'/></div>
            <div className="colorcards" id="sixth">
                <h3>TRANSFORMATION IN A TIME OF DISRUPTION</h3><br />
                <p>Corporations are feeling the pressure in today’s volatile macroeconomic environment. Supply chains are</p>
                
            </div>
            <div className="img6"><img src={city} alt="city" height={379} width={380} className='zoom-img'/></div>
            <div className="colorcards" id="seventh">
                <h3>INDIA'S BRANCH OF THE FUTURE</h3><br />
                <p>Discover how Indian banks can equip their branches for future success in this cutting-edge Capco</p>
                
            </div>
        </section>
    </div>
  )
}

export default Groups