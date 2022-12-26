import React, { Component } from 'react'
import {  NavLink } from "react-router-dom";
import logo1 from '../assets/images/logo-1.png'
export default class Nav extends Component {
  
    state = {
        checkTogget: true,
        listNav: [
            { idNav: "1", titleNav: "home" },
            { idNav: "2", titleNav: "about" },
            { idNav: "3", titleNav: "services" },
            { idNav: "4", titleNav: "team" },
            { idNav: "5", titleNav: "portfolio" },
            { idNav: "6", titleNav: "blog" },
            { idNav: "7", titleNav: "contact" },
        ],
        width: 0,
        height: 0
    }
    clickMenu = () => {
        this.setState({
            checkTogget: !this.state.checkTogget
        })
    }
    handleClick = (titleNav) => {
        // Scroll to the top of the div element with the "target" id
        document.getElementById(titleNav).scrollIntoView({ behavior: 'smooth' });
     
    };
    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      };
      //sau khi render
      componentDidMount() {
       
        window.addEventListener('resize', this.updateDimensions);
    
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
       
      }
    render() {
        let {checkTogget,width} = this.state
        if(width > 1200){
            checkTogget = true
        }
        return (
            <div className='NavBar'>
                <div className='nav_container'>
                    <a href='/#'>
                        <img src={logo1} alt="CRUCIO" />
                    </a>
                    <div id="main_menu" className="main_menu">
                        <iconify-icon icon="ic:outline-menu" onClick={() => this.clickMenu()}  ></iconify-icon>
                    </div>
                    {
                        
                        checkTogget  && 
                        <div className='main_nav'>
                            <ul>
                                {
                                    this.state.listNav.map((item, index) => {
                                        return (
                                            <li key={item.idNav} onClick={()=> this.handleClick(item.titleNav)}>
                                                <NavLink to={item.titleNav} activeClassName="active" >{item.titleNav}</NavLink>
                                            </li>
                                        )
                                    })
                                }


                            </ul>
                        </div>
                    }

                </div>

            </div>
        )
    }
}
