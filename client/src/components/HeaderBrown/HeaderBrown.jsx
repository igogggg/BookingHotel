import React from 'react';
import Logo from '../Header/Logo';
import Menu from '../Header/Menu';
import ShowButton from '../Header/ShowButton/ShowButton';
import SlideMenu from '../Header/SlideMenu';

class HeaderBrown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return(
        <div className="container relative h-24">
            <header className="z-10 absolute top-0 left-0 w-screen bg-secondary">
                <div className="max-w-full mx-auto px-4">
                    <div className="flex justify-between items-center py-8">
                        <Logo/>
                        <Menu/>
                        <ShowButton handleClick={this.toggleMenu} />
                        <div id="container">
                            <SlideMenu handleClick={this.toggleMenu} visibility={this.state.visible} />
                        </div>
                    </div>
                </div>
            </header>
        </div>
        );
    }
}

export default HeaderBrown;
