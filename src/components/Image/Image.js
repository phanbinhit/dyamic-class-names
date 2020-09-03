import React, {Component} from 'react';
import './Image.css';
import className from 'classnames';

class Image extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPressed: props.isPressed
        }

        this.change = this.change.bind(this)
    }

    change() {
        this.setState({
            isPressed: !this.state.isPressed
        })
    }

    render() {
        let imageClass = className({
            'image': true,
            'imagePressed': this.state.isPressed
        });

        return(
            <div className='Image'>
                <img src={this.props.linkImage} onClick={this.change} className={imageClass}></img>
            </div>
        )
    }
}

export default Image;

