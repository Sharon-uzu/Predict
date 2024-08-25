import React from 'react'
import bet from '../Assets/bet.jpeg'
import { FaTelegram } from "react-icons/fa";


const Tips = () => {

    const Tips= [
        {
            id:1,
            place: 'LIT',
            time:"16:25",
            over: 'Over 1.5',
            num:'1.31',
            prob:'76.34%',
            place1:'Suduva Marijampole',
            place2:'FK Zalgiris Vilnius',
            f1:['D','D','L','L','W'],
            f2:['W','W','D','L','L'],
        },
        {
            id:2,
            place: 'EPL',
            time:"14:00",
            over: 'Away/Draw(x2)',
            num:'1.25',
            prob:'76.34%',
            place1:'Suduva Marijampole',
            place2:'FK Zalgiris Vilnius',
            f1:['D','D','L','L','W'],
            f2:['W','W','D','L','L'],
        },
        {
            id:3,
            place: 'LIT',
            time:"16:25",
            over: 'Over 1.5',
            num:'1.31',
            prob:'76.34%',
            place1:'Suduva Marijampole',
            place2:'FK Zalgiris Vilnius',
            f1:['D','D','L','L','W'],
            f2:['W','W','D','L','L'],
        },
        {
            id:4,
            place: 'LIT',
            time:"16:25",
            over: 'Over 1.5',
            num:'1.31',
            prob:'76.34%',
            place1:'Suduva Marijampole',
            place2:'FK Zalgiris Vilnius',
            f1:['D','D','L','L','W'],
            f2:['W','W','D','L','L'],
        },
        {
            id:5,
            place: 'LIT',
            time:"16:25",
            over: 'Over 1.5',
            num:'1.31',
            prob:'76.34%',
            place1:'Suduva Marijampole',
            place2:'FK Zalgiris Vilnius',
            f1:['D','D','L','L','W'],
            f2:['?','?','?','?','?'],
        },
        {
            id:6, 
            place: 'LIT',
            time:"16:25",
            over: 'Over 1.5',
            num:'1.31',
            prob:'76.34%',
            place1:'Suduva Marijampole',
            place2:'FK Zalgiris Vilnius',
            f1:['D','D','L','L','W'],
            f2:['W','W','D','L','?'],
            
        },
        {
            id:7,
            place: 'LIT',
            time:"16:25",
            over: 'Over 1.5',
            num:'1.31',
            prob:'76.34%',
            place1:'Suduva Marijampole',
            place2:'FK Zalgiris Vilnius',
            f1:['D','D','L','L','W'],
            f2:['W','W','D','L','L'],
        },
        {
            id:8,
            place: 'EPL',
            time:"14:00",
            over: 'Away/Draw(x2)',
            num:'1.25',
            prob:'76.34%',
            place1:'Suduva Marijampole',
            place2:'FK Zalgiris Vilnius',
            f1:['D','D','L','L','W'],
            f2:['W','W','D','L','L'],
        },
        
    
        
    ]

    const getBgColor = (status) => {
        switch (status) {
            case 'D':
                return '#D6AE3E'; 
            case 'L':
                return '#C1392A'; 
            case 'W':
                return '#5CB85C'; 
            case '?':
                return '#6c757d';
            default:
                return '#000000'; // Default color
        }
    };
    
    const getStatusColor = (status) => {
        switch (status) {
            case 'D':
                return '#D6AE3E'; 
            case 'L':
                return '#C1392A'; 
            case 'W':
                return '#5CB85C'; 
            case '?':
                return '#6c757d';
            default:
                return '#000000'; // Default color
        }
    };


  return (
    <div>
        <div className="tips">
            <div className="top">
                <h2>Free Expert Tips - Sun, Aug 25th, 2024</h2>

                <div className="btns">
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>

            <div className="cards">

                <div className="cards-c">

                {
                    Tips.map((item, id)=>{
                        return(
                        <div className="card" key={item.id}>

                            <div className="card-c">
                                <div className="flex first">
                                    <button><span>{item.place}</span> | <span>{item.time}</span></button>
                                    <button><span>{item.over}</span> | <span>{item.num}1</span></button>
                                </div>
                                <div className="flex second">
                                    <img src={bet} alt="" />
                                    <div className="probs">
                                        <span className='s1'>Prob%:</span>
                                        <span>{item.prob}</span>
                                    </div>
                                </div>

                                <div className="flex rolling">
                                    <div className="one">
                                        <div className="one1">
                                            <p>-</p>
                                        </div>
                                        <div className="one2">
                                            <p>{item.place1}</p>
                                        </div>
                                    </div>

                                    <div className="two">
                                        <div className="rows">
                                            {item.f1.map((status, index) => (
                                                <span key={index} style={{ backgroundColor: getBgColor(status) }}>{status}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex rolling">
                                    <div className="one">
                                        <div className="one1">
                                            <p>-</p>
                                        </div>
                                        <div className="one2">
                                            <p>{item.place2}</p>
                                        </div>
                                    </div>

                                    <div className="two">
                                        <div className="rows">
                                            {item.f2.map((status, index) => (
                                                <span key={index} style={{ backgroundColor: getBgColor(status) }}>{status}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        )
                    })
                }

                </div>

                <div className="join">

                <div className="j-c">
                

                    <a href='' className="ff">
                        <FaTelegram className='t-i'/>
                        <span>Join Our Telegram Channel</span>

                    </a>

                    <div className="other">
                        <a href=""><button>OTHER SPORT</button></a>
                        <a href=""><button>BANKER TIPS</button></a>

                    </div>

                </div>
                

            </div>

            </div>

            


        </div>
    </div>
  )
}

export default Tips;
