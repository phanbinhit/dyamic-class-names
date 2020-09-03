import React, {Component} from 'react';
import './Table.css';
import Image from '../Image/Image';

class Table extends Component {
    render() {
        return(
            <div className='Table'>
                <table>
                    <tr>
                        <td><Image linkImage='http://bit.ly/3ayPusa' isPressed={false}/></td>
                    </tr>
                </table>
            </div>
        ) 
    }
}

export default Table;