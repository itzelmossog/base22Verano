import {Component, h, Method} from '@stencil/core';

@Component({
    tag: 'slide-menu',
    styleUrl: 'slider-menu.scss'
})

export class SlideMenu{
    @Method()
    expand(){
        let button = document.getElementById("show-menu");
        let menuWrapper = document.getElementById("menu-wrapper");
        let background = document.getElementById("bg-opacity");

        button.classList.toggle("active");
        menuWrapper.classList.toggle("showMenu");
        background.classList.toggle("showOpacity");
    }
    render(){
        return( 
            <span>  
                <div id="bg-opacity"></div>
                <div id="wrapper">
                    <div id="show-menu" class="start-menu" onClick={()=>this.expand()}>
                        <span class="chevron"></span>
                    </div>
                    <div id="menu-wrapper">
                        <div id="swipe-cmpnt" class="">
                            <p>Select one of the options below</p>
                            <ul>
                                <li><a href="#">Menu <span>Option 1</span></a></li>
                                <li><a href="#">Menu <span>Option 2</span></a></li>
                                <li><a href="#">Menu <span>Option 3</span></a></li>
                                <li><a href="#">Menu <span>Option 4</span></a></li>
                                <li><a href="#"><span class="far fa-life-ring"></span>Help Center</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </span>   
        )
        
    }
}