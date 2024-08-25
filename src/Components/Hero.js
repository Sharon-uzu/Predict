import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='hero'>
            <div className="hh">
                <div className="h-c">

                <h1>Free Soccer <span>Predictions</span> and Tips</h1>
                <p>VictorsPredict is an online service that provides free soccer tips and predictions for football fans around the world, free analysis, Banker tips, latest results, and many more.</p>
                </div>

            </div>
        </div>

        <div className="overlay">
            <div className="o-v">
                <button>Free Tips</button>
                <button>Banker Tips</button>
                <button>Free 2 Odds</button>
                <button>Double Chance</button>
                <button>Over 1.5 Goals</button>
                <button>Over 2.5 Goals</button>
                <button>O/U 2.5 Goals</button>
                <button>BTTS/G</button>
                <button>Draws</button>
            </div>
        </div>
    </div>
  )
}

export default Hero