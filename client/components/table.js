import React, {Component} from 'react'
import Link from 'next/link'

export default class DataTable extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <table class="table table-striped">
                <thead>
                    <tr>
                        {this.props.data.header.map(ele => <th key={ele.key}>{ele.name}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.content.map(ele => {
                        return (
                            <Link href={this.props.data.link ? this.props.data.link+"?"+this.props.data.linkBy+"="+ele[this.props.data.linkBy] : "#"}>
                                <tr key={ele.id}>
                                    {this.props.data.header
                                    .map(header => 
                                        
                                            <td key={header.key}>    
                                                <Link href={header.link ? header.link+ele[header.key] : "#"}>
                                                    <span>{ele[header.key]}</span>
                                                </Link>
                                            </td>                                        
                                        
                                    )}
                                </tr>
                            </Link>
                        )
                    })}
                </tbody>
    
            </table>
        )
    }
}