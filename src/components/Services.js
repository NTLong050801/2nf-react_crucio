import React, { Component } from 'react'

export default class Services extends Component {
    state = {
        arrServices: [
            { titleServ: "WEB DESIGN", icon: 'ic:outline-desktop-mac' },
            { titleServ: "BRAND DESIGN", icon: 'ion:albums' },
            { titleServ: "UI/UX DESIGN", icon: 'ion:apps' },
            { titleServ: "GRAPHIC DESIGN", icon: 'ion:color-palette' },
            { titleServ: "PHOTOGRAPHY", icon: 'ion:camera-sharp' },
            { titleServ: "VIDEO EDITING", icon: 'ion:videocam-sharp' },
            { titleServ: "DATA ANALYSIS", icon: 'ion:pulse' },
            { titleServ: "CLIENT ASSISTANCE", icon: 'ion:person-sharp' },
        ]


    }
    render() {
        let { arrServices } = this.state;
        return (
            <div id="services" className="services">
                <div className="about_text">
                    <div className="section-content text-center">

                        <h2>SERVICES</h2>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisci elit, sed eiusmod tempor
                            incidunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris
                            nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in
                            <strong>voluptate</strong>
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
                            proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="serv_main">
                    {
                        arrServices.map((item, index) => {
                            return (
                                <div className="serv_content ">
                                    <div className="serv_icon">
                                        <iconify-icon icon={item.icon}></iconify-icon>
                                    </div>
                                    <div className="serv_text">
                                        <h4>{item.titleServ}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
                <div className="serv_banner">
                    <div className="serv_banner_main text-center ">
                        <h2 className="animate__animated wow animate__fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">WE
                            CREATE
                            <strong>AWESOME</strong> PROJECTS</h2>
                        <a href="/#" className="animate__animated wow animate__fadeInUp " data-wow-duration="1s"
                            data-wow-delay="0.5s">GET STARTED</a>
                    </div>
                </div>
            </div>
        )
    }
}
