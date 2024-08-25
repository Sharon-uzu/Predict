import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo (1).webp'
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

const Header = () => {

    const [drop, setDrop] = useState(false)

    const handleDrop = () => {
        setDrop(!drop);
    }


    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
        setDropdownOpen(!isDropdownOpen);
        document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling

    }

    const closeMenuBar = () => {
        setClick(false);
        document.body.style.overflow = 'auto'; // Enable scrolling

    };


  return (
    <div>
        <header>
            <nav>
                <img src={logo} alt="" />

                <div className='bars' onClick={handleClick}>
                    {click ? (<RiCloseFill id='close' />) : (<FaBars id='bar' />)}
                </div>

                <ul className={click ? 'menu active' : 'menu'}>
                    <li><Link>Home</Link></li>
                    <li><Link>Prediction Stores</Link></li>
                    <li><Link>Links 1</Link></li>
                    <li><Link>Links 2</Link></li>
                    <li><Link>Links 3</Link></li>
                    <li><Link>Links 4</Link></li>
                    <li><Link>Links 5</Link></li>
                    <li><Link>Other Sports</Link></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header