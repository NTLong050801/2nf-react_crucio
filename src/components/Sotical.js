import React, { Component } from 'react'
import logo1 from '../assets/images/logo-1.png'
export default class Sotical extends Component {
    state = {
        arrLogo : [
            "ri:facebook-box-fill",
            "ri:twitter-fill",
            "ph:instagram-logo-fill",
            "ri:linkedin-box-fill",
            "ph:dribbble-logo-fill",
            "icon-park-solid:youtobe"
        ]
    }
  render() {
    let {arrLogo} = this.state;
    return (
      <>
      <div class="social">
        <div class="logo_social text-center">
            <img src={logo1} alt=""/>
        </div>
        <div class="all_social">
            {
                arrLogo.map((item) => {
                    return(
                        <a href="#" class="info">
                        <iconify-icon icon={item}></iconify-icon>
                    </a>
                    )
                })
            }
          
           
        </div>
    </div>
    <footer>
        <div class="copyright">
            <p>© 2017. Crucio. All Rights Reserved.</p>
        </div>
    </footer>
    <div class="back-to-top" style={{"display":"block"}}>
        <a href="#top">
            <iconify-icon icon="material-symbols:keyboard-arrow-up"></iconify-icon>
        </a>
    </div>
      </>
    )
  }
}
