import React, {Component} from 'react'

export default class FormView extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const readOnly = this.props.control ? this.props.control.readOnly : 'true';
        console.log(readOnly);
        return (
            <div className="row">
                {this.props.data.map(d => {
                    return (
                        <div class="col-sm-4">
                            <label for={d.key} class="form-label">{d.label}</label>
                            <input readOnly={readOnly} class="form-control"  type="text" value={d.value}></input>
                        </div>
                    );
                })}
            </div>
        );
    }
}