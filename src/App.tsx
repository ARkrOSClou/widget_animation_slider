import './App.scss'
import { useEffect } from 'react'
import { behavior } from './slider'

function App() {
  useEffect(() => {
    behavior()
  })

  const positionList = [
    'top-left',
    'top-right',
    'bottom-left',
    // 'bottom-right',
  ]

  const sliderSchema = ['collapsed', 'main', 'expanded']
  sliderSchema.unshift('')

  return (
    <>
      {positionList.map((position) => (
        <div key={position} className={`widget widget-${position}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" width={30} height={30}>
            <path d="M246.6 361.4C252.9 367.6 256 375.8 256 384s-3.125 16.38-9.375 22.62l-96 96c-12.5 12.5-32.75 12.5-45.25 0l-96-96c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L96 402.8v-293.5L54.63 150.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l96-96c12.5-12.5 32.75-12.5 45.25 0l96 96C252.9 111.6 256 119.8 256 128s-3.125 16.38-9.375 22.62c-12.5 12.5-32.75 12.5-45.25 0L160 109.3v293.5l41.38-41.38C213.9 348.9 234.1 348.9 246.6 361.4z" />
          </svg>
          <div className="slider" style={{ width: 175, height: 130 }}>
            <div className="slide" data-slide={sliderSchema[1]}>
              <div className="slide-wrapper">
                <h4>slide: collapsed</h4>
                <button className="trigger" data-trigger={sliderSchema[2]}>
                  to main
                </button>
              </div>
            </div>
            <div className="slide" data-slide={sliderSchema[2]}>
              <div className="slide-wrapper">
                <h4>slide: main</h4>
                <button className="trigger" data-trigger={sliderSchema[1]}>
                  collapse x
                </button>
                <button className="trigger" data-trigger={sliderSchema[3]}>
                  expand {'>'}
                </button>
              </div>
            </div>
            <div className="slide" data-slide={sliderSchema[3]}>
              <div className="slide-wrapper">
                <h4>slide: expanded</h4>
                <button className="trigger" data-trigger={sliderSchema[2]}>
                  to main
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className={`widget widget-bottom-right`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={30} height={30}>
          <path d="M502.6 278.6l-96 96C400.4 380.9 392.2 384 384 384s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L402.8 288h-293.5l41.38 41.38c12.5 12.5 12.5 32.75 0 45.25C144.4 380.9 136.2 384 128 384s-16.38-3.125-22.62-9.375l-96-96c-12.5-12.5-12.5-32.75 0-45.25l96-96c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224h293.5l-41.38-41.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l96 96C515.1 245.9 515.1 266.1 502.6 278.6z" />
        </svg>
        <div className="slider slider-direction-horizontal" style={{ width: 175, height: 130 }}>
          <div className="slide" data-slide={sliderSchema[1]}>
            <div className="slide-wrapper">
              <h4>slide: collapsed</h4>
              <button className="trigger" data-trigger={sliderSchema[2]}>
                to main
              </button>
            </div>
          </div>
          <div className="slide" data-slide={sliderSchema[2]}>
            <div className="slide-wrapper">
              <h4>slide: main</h4>
              <button className="trigger" data-trigger={sliderSchema[1]}>
                collapse x
              </button>
              <button className="trigger" data-trigger={sliderSchema[3]}>
                expand {'>'}
              </button>
            </div>
          </div>
          <div className="slide" data-slide={sliderSchema[3]}>
            <div className="slide-wrapper">
              <h4>slide: expanded</h4>
              <button className="trigger" data-trigger={sliderSchema[2]}>
                to main
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
