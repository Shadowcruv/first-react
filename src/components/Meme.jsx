import {useState} from 'react'
import imageMeme from '../image/meme.png'

export default function Meme(){
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/lbij.jpg"
  })

  function handleChange(event){
    const {value} = event.currentTarget;
    setMeme(preMeme => ({
      ...prevMeme,
      topText: value
    }))
  }

  return (
    <main className='meme-main'>
      <header className="meme-head">
        <img 
          src={imageMeme}
          alt='Meme'
          style={{
            width: 30,
            height: 30
          }}
        />
        <h2>Meme Generator</h2>
      </header>
      <div className="form">
        <div className="inside-form">
          <div>
            <label>
              Top Text
            </label>
            <input 
              type="text"
              name='topText'
              placeholder="One does not simply"
              onChange={handleChange}
              value={meme.topText}
            />
          </div>
          <div>
            <label>
              Bottom Text
            </label>
            <input 
              type="text"
              name='bottomText'
              placeholder="Walk into Morder"
              onChange={handleChange}
              value={meme.bottomText}
            />
          </div>
        </div>
      </div>
      <button>Get a new meme image</button>
    </main>
  )

}