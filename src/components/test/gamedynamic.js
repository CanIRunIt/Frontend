import React, { Component } from 'react';
import Gamerigscore from '../gamerigscore/gamerigscore';
import { Button } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import axios from 'axios';
import CircularIndeterminate from '../ui/progress';

const gamesjson = [
    {title : "Astra Exodus system requirements",OS : "Windows 8 / 8.1 64 bit",Processor : "2.5 Ghz Intel Core 2 Quad Q8300 or equivalent",Memory : "4 GB RAM",Graphics : "1 GB nVidia Geforce GT460 or equivalent, 500 MB ATI HD4850 or equivalent",Storage : "4 GB available space",},
    {title : "Alders Blood: Prologue system requirements",OS : "Windows 7, 8, 10",Processor : "1.0 GHz",Memory : "2 GB RAM",Graphics : "GeForce 8800GTX with 512MB of memory or equivalent",Storage : "2 GB available space",},
    {title : "Adore system requirements",OS : "Windows 7",Processor : "Intel(R) Core(TM) 2 Duo CPU E8400 @ 3.00Hz",Memory : "4 GB RAM",Graphics : "NVIDIA GTX 260 | ATI Radeon HD 4800 Series",Storage : "4 GB available space",},
    {title : "A Long Way Down system requirements",OS : "Windows XP (Windows), OSX 10.9+ (Mac OS X), Ubuntu 12.04 (SteamOS + Linux)",Processor : "Dual-core 2Ghz CPU",Memory : "2 GB RAM",Graphics : "Open GL 3.2+ Compliant",Storage : "1 GB available space",},
    {title : "12 Minutes system requirements",OS : "Win 7 64",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "Ashes of Creation system requirements",OS : "Win Xp 32",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "1666 Amsterdam system requirements",OS : "Win 7 64",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "After The Fall system requirements",OS : "Windows 7 - 64 bit",Processor : "Intel i5-4590 equivalent or greater",Memory : "8 GB RAM",Graphics : "NVIDIA GTX 970 / AMD equivalent or greater",Storage : "",},
    {title : "83 system requirements",OS : "Win 7 64",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "Automobilista 2 system requirements",OS : "Windows 10 (+ specific versions of 7)",Processor : "3.5 GHz Intel Core i5 3450, 4.0 GHz AMD FX-8350",Memory : "8 GB RAM",Graphics : "GTX680 or equivalent",Storage : "50 GB available space",},
    {title : "Age of Empires IV system requirements",OS : "Win 7 64",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "Alaskan Truck Simulator system requirements",OS : "Windows 7 (64-bit) or Newer",Processor : "Intel Core i5",Memory : "12 GB RAM",Graphics : "NVidia GeForce GTX 760",Storage : "15 GB available space",},
    {title : "Atelier Shallie: Alchemists of the Dusk Sea DX system requirements",OS : "Windows® 8.1, Windows® 10 (64bit required)",Processor : "Core i5 2.6GHz or better",Memory : "4 GB RAM",Graphics : "NVIDIA GeForce GTX660 or better,1280x720 (Graphic Memory 2GB or better)",Storage : "17 GB available space",},
    {title : "Age of Empires III: Definitive Edition system requirements",OS : "Win 10 64",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "Alder's Blood system requirements",OS : "Windows 7, 8, 10",Processor : "1.0 GHz",Memory : "2 GB RAM",Graphics : "GeForce 8800GTX with 512MB of memory or equivalent",Storage : "2 GB available space",},
    {title : "",OS : "",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "Aeioth RPG system requirements",OS : "Windows 7/8/10",Processor : "Intel Core i5-2300 2.8 GHz/AMD Phenom II X4 945 3.0 GHz or equivalent",Memory : "4 GB RAM",Graphics : "NVIDIA GTX 550 Ti 2GB/AMD Radeon HD 7870 2GB or equivalent",Storage : "8 GB available space",},
    {title : "A Plague Tale 2 system requirements",OS : "Win 7 64",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "Beast system requirements",OS : "64-bit Windows 7 or Higher",Processor : "Intel® Core™ i3-2105 or AMD® Phenom™ II X3 720",Memory : "8 GB RAM",Graphics : "Nvidia® GeForce™ GTX 560 Ti or AMD® ATI Radeon™ HD 5870 (1 GB VRAM)",Storage : "35 GB available space",},
    {title : "Alien Shooter 2 - The Legend system requirements",OS : "Windows 7 (service pack 1), 8, 10",Processor : "Intel Core 2 Duo T5200 @1.6GHz / AMD Athlon 64 X2 3600+ @2000MHz or better",Memory : "2 GB RAM",Graphics : "512 MB video card",Storage : "1500 MB available space",},
    {title : "Battlefield 6 system requirements",OS : "Win 7 64",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "A Horde Too Many system requirements",OS : "Windows 7 SP1+",Processor : "",Memory : "4 GB RAM",Graphics : "NVIDIA GeForce GTX 960",Storage : "1049 MB available space",},
    {title : "Atelier Escha & Logy: Alchemists of the Dusk Sky DX system requirements",OS : "Windows® 8.1, Windows® 10 (64bit required)",Processor : "Core i5 2.6GHz or better",Memory : "4 GB RAM",Graphics : "NVIDIA GeForce GTX660 or better,1280x720 (Graphic Memory 2GB or better)",Storage : "17 GB available space",},
    {title : "Araha: Curse of Yieun Island system requirements",OS : "Windows 7 / 8 / 8.1 / 10",Processor : "Intel Core i5",Memory : "4 GB RAM",Graphics : "NVIDIA® GeForce® GTX 560 or better",Storage : "5 GB available space",},
    {title : "Airport Contraband system requirements",OS : "Windows 7 (64-bit) or 10 (64-bit)",Processor : "Intel Core i3 3.0 GHz",Memory : "",Graphics : "NVidia GeForce GTX 660 2GB VRAM",Storage : "15 GB available space",},
    {title : "Fast & Furious Crossroads system requirements",OS : "Win 7 64",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "Final Fantasy VII Remake system requirements",OS : "Win 7 64",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "Before We Leave system requirements",OS : "Win 7 64",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "Atelier Ayesha: The Alchemist of Dusk DX system requirements",OS : "Windows® 8.1, Windows® 10 (64bit required)",Processor : "Core i5 2.6GHz or better",Memory : "4 GB RAM",Graphics : "NVIDIA GeForce GTX660 or better,1280x720 (Graphic Memory 2GB or better)",Storage : "17 GB available space",},
    {title : "Alien: Blackout system requirements",OS : "Win 7 64",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "Atomic Heart system requirements",OS : "WINDOWS® 7, 8, 8.1, 10 (64-BIT Required)",Processor : "Intel® Core™ i5-4460, 2.70GHz or AMD FX™-6300 or better",Memory : "6 GB RAM",Graphics : "NVIDIA® GeForce® GTX 760 or AMD Radeon™ R7 260x with 2GB Video RAM",Storage : "22 GB available space",},
    {title : "Furious Drivers system requirements",OS : "Windows 7 64-bit 7 or Newer",Processor : "Quad-core Intel or AMD processor, 2.5 GHz or faster",Memory : "4 GB RAM",Graphics : "NVIDIA GeForce 560 GTX or AMD Radeon 6870 HD series card or higher",Storage : "3 GB available space",},
    {title : "Bastide system requirements",OS : "Windows 7 or Higher",Processor : "AMD Ryzen 3 1200",Memory : "4 GB RAM",Graphics : "Nvidia GeForce 760 or Higher",Storage : "10 GB available space",},
    {title : "Azur Lane Crosswave system requirements",OS : "Windows 7 64bit (DirectX 11 equivalent)",Processor : "Intel CPU Core-I5 3.2GHz or above",Memory : "8 GB RAM",Graphics : "NVIDIA GeForce GTX 750Ti or AMD R7 260X equivalent",Storage : "4 GB available space",},
    {title : "Filament system requirements",OS : "",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "Batman: Arkham Legacy system requirements",OS : "Win 7 64",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "Flying Circus system requirements",OS : "Windows 7 (64-bit) or later",Processor : "Intel Core i3-3220 @ 3.30GHz or better",Memory : "2 GB RAM",Graphics : "GeForce GTX 750 / Radeon HD 7790",Storage : "",},
    {title : "Back 4 Blood system requirements",OS : "Win 7 64",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "Blackthorn Arena system requirements",OS : "Windows 7/8/10 (64 bits)",Processor : "Intel Core i5-3450 (3.1 GHz) / AMD FX-6300 X6 (3.5 GHz)",Memory : "8 GB RAM",Graphics : "2 GB, GeForce GTX 660/Radeon HD 7870",Storage : "25 GB available space",},
    {title : "Beyond a Steel Sky system requirements",OS : "Windows 7 or above",Processor : "Intel Core i3-2100 (3.1GHz) or AMD Phenom X4 945 (3.0GHz)",Memory : "4 GB RAM",Graphics : "Nvidia GeForce GTX 650 2GB or AMD Radeon HD 7770 2GB",Storage : "20 GB available space",},
    {title : "Battletoads system requirements",OS : "Win 7 64",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "Ghostrunner system requirements",OS : "WIN7-64 bit",Processor : "Intel i3-2100 / AMD A8-5600k",Memory : "8 GB RAM",Graphics : "GeForce GTX 630 / Radeon HD 6570",Storage : "",},
    {title : "Broomstick League system requirements",OS : "Windows 7",Processor : "3.0+ GHZ Dual Core",Memory : "8 GB RAM",Graphics : "GTX 650 or better, Radeon HD 7770 or better",Storage : "5 GB available space",},
    {title : "FIFA 21 system requirements",OS : "Win 7 64",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "Boomerang Fu system requirements",OS : "Windows 7+",Processor : "AMD Athlon X4 5350, Intel Core i3-2100T or equivalent",Memory : "4 GB RAM",Graphics : "GeForce GTX 480M, Radeon HD 6790 or equivalent",Storage : "250 MB available space",},
    {title : "Blood Bowl 3 system requirements",OS : "Win 7 64",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "Chernobyl 1986 system requirements",OS : "windows 10",Processor : "Intel Core i3-2100 / AMD Phenom II X4 965",Memory : "4 GB RAM",Graphics : "GeForce GTX 550 Ti / Intel HD 620",Storage : "4 GB available space",},
    {title : "",OS : "",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "Frostpunk: The Last Autumn system requirements",OS : "64-bit Windows 7/8/10",Processor : "3.2 GHz Dual Core CPU",Memory : "4 GB RAM",Graphics : "GeForce GTX 660, Radeon R7 370 or equivalent with 2 GB of video RAM",Storage : "8 GB available space",},
    {title : "Formula Car Racing Simulator system requirements",OS : "Windows 7 32-bit SP1",Processor : "Intel Core i5 2.8Ghz or AMD equivalent",Memory : "2 GB RAM",Graphics : "DX10 compatible or better",Storage : "500 MB available space",},
    {title : "Coffee Talk system requirements",OS : "Windows 7 SP1+",Processor : "2.4 GHz or faster processor",Memory : "2 GB RAM",Graphics : "512 MB display memory",Storage : "600 MB available space",},
    {title : "Bully 2: Kevins Back Jack system requirements",OS : "Win Xp 32",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "Far Cry 6 system requirements",OS : "Win 7 64",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "Gears Tactics system requirements",OS : "Windows 10 64-bit",Processor : "Intel i3 Skylake | AMD FX-6000",Memory : "8 GB RAM",Graphics : "AMD Radeon R7 260X | NVIDIA GeForce GTX 750 Ti",Storage : "45 GB available space",},
    {title : "Blind Spot VR system requirements",OS : "Windows 7, Windows 8.1, Windows 10 (64-bit versions only)",Processor : "Intel Core i5-2500K or equivalent",Memory : "4 GB RAM",Graphics : "Nvidia GTX 970 or equivalent",Storage : "4 GB available space",},
    {title : "ANAREA Battle Royale system requirements",OS : "Windows 7 SP1 (x64)",Processor : "Intel Core i5-4430 / AMD FX-6300",Memory : "8 GB RAM",Graphics : "NVIDIA GeForce GTX 950 2GB / AMD Radeon R7 370 2GB",Storage : "30 GB available space",},
    {title : "Caffeine: Victoria's Legacy system requirements",OS : "XP, Vista, 7, 8, 10",Processor : "1.4GHz",Memory : "2 GB RAM",Graphics : "Intel HD Graphics, NVIDIA 600 Series, AMD 7000 Series",Storage : "2 GB available space",},
    {title : "Crazy Simulator system requirements",OS : "Windows XP/Vista/7/8/10",Processor : "2 GHz",Memory : "512 MB RAM",Graphics : "512MB+",Storage : "200 MB available space",},
    {title : "Gene Rain: Wind Tower system requirements",OS : "Windows 7 64-bit",Processor : "Intel Core i5-3470 or AMD FX-8350",Memory : "4 GB RAM",Graphics : "NVIDIA GeForce GTX 750 Ti or AMD Radeon HD 7870",Storage : "12 GB available space",},
    {title : "Gene Rain system requirements",OS : "Windows 7/8/10",Processor : "Intel Core i3 3210 3.2GHz",Memory : "4 GB RAM",Graphics : "NVIDIA GTX 750Ti 2GB",Storage : "15 GB available space",},
    {title : "Black Survival: Eternal Return system requirements",OS : "Windows 7 64-bit",Processor : "Intel Core 2 Duo 2.5 GHz",Memory : "2 GB RAM",Graphics : "Nvidia 9xxx / ATI 2xxx",Storage : "5 GB available space",},
    {title : "Beyond Blue system requirements",OS : "Windows 7 x64 or newer",Processor : "Intel Core i5-4460 / AMD FX-6300 @ 3.5 GHz or equivalent",Memory : "4 GB RAM",Graphics : "NVIDIA GeForce GTX 670 or AMD R9 270 (2GB VRAM with Shader Model 5.0 or better)",Storage : "40 GB available space",},
    {title : "Call of Duty: Black Ops 5 system requirements",OS : "Win 7 64",Processor : "",Memory : "",Graphics : "",Storage : "",},
    {title : "Food Factory VR system requirements",OS : "Windows",Processor : "i5-4590 (AMD FX 8350) or better",Memory : "",Graphics : "Nvidia GeForce GTX 970, AMD Radeon R9 290",Storage : "5 GB available space",},
    {title : "FrostFall system requirements",OS : "Windows 7 (64-bit) or 10 (64-bit)",Processor : "Intel Core i3 3.0 GHz",Memory : "8 GB RAM",Graphics : "Geforce 960 or similar",Storage : "25 GB available space",},
    {title : "Free Company VR system requirements",OS : "Windows 7 SP1, Windows 8.1 or later, Windows 10",Processor : "Intel Core i5-4590/AMD FX 8350 equivalent or better",Memory : "4 GB RAM",Graphics : "NVIDIA GeForce GTX 1060, AMD Radeon RX 480 equivalent or better",Storage : "15 GB available space",},
    ]

    var gamelist = [];

    const primary = purple[500];

class Gamedynamic extends Component {

    state = {
        game : '',
        progress: true,
        first: ''
    }

    componentDidMount () {

        const query = new URLSearchParams(this.props.location.search);
        console.log(this.props.location.search.replace('?',''))
        this.setState({first: this.props.location.search.replace('?','')},
        () => console.log(this.state.first))



        axios.get('http://canirunit.herokuapp.com/results')
    .then(response => {
      console.log(response)
      gamelist = response.data
      

    }).catch(error => {
        console.log(error)
    })
    this.setState({ progress: false })
    }

    handleChnge = (e) => {
        this.setState({
            [e.target.id]: e.target.value.toUpperCase()

        })

    }

    gamepickHandler = (gametitle) => {
        console.log("hey")
        console.log(gametitle);

        this.setState({game: gametitle})
        console.log(this.state.game)

        const game = gametitle
        this.props.history.push({
            pathname: '/rigpost',
            search: '?' + game
        })


    }

    render () {
        let progresscircle = null;
        if(this.state.progress) {
            progresscircle = <CircularIndeterminate ></CircularIndeterminate>
            
        }
        return (
            <div style={{textAlign: 'center'}} className="gamedynamic">

            <div className="input-field" style={{paddingLeft:'99px', paddingRight: '99px'}}>
            {/* <label htmlFor="game" style={{textAlign: 'center'}}>Game</label> */}
            <h3 style={{textAlign: 'center',color: 'white'}}>Game</h3>
            {progresscircle}
            <input type ="text" id="game" onChange={this.handleChnge} style={{color: 'white'}}></input>
            </div>


            <h1 style={{color: 'white'}}>Game list</h1>
                {gamelist.map(game => {
                    
                    return (
                        <div style={{textAlign: 'center', marginTop: '3px'}}>

                        {this.state.progress ? <CircularIndeterminate></CircularIndeterminate> : null}

                        {game.title.replace(" system requirements","")[0] == this.state.game[0] /* this.state.first[0] */ ? 
                    <Button variant="contained" color="primary" style={{textAlign: 'center', width: '60%'}} onClick={() => this.gamepickHandler(game.title)}>{game.title.replace(" system requirements","")}</Button>
                    
                     : null   } 
                     </div>
                    )
                })}

            {this.state.game != '' && this.state.game.length > 6 ? 
            <div><h1 style={{color: 'white'}}>{this.state.game}</h1>
            
            <Gamerigscore cpuscore="60"
                          gpuscore="80"
                          ramscore="90" />

            </div>
             : null }



            </div>
           
        )
    }
}

export default Gamedynamic;