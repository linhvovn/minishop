import React, {Component} from 'react'
import Message from '../config/message'

export default class FormSearch extends Component {
    constructor(props){
        super(props)
    }

    renderFormElement(ele) {

        const renderInput = function(ele){
            switch (ele.type){
                case 'select':
                    return (
                        <select class="form-select" aria-label="Default select example">
                            {ele.options.map(op => <option value={op.value}>{op.label}</option>)}
                        </select>
                    )
                    break;
                default:
                    return <input type={ele.type} class="form-control" id={ele.key}></input>;

            }
                
        }

        return (
            <div class="col-sm-4" key={ele.key}>
                <label class="form-label">{ele.label}</label>
                {renderInput(ele)}
            </div>
        );
    }

    render() {
        return (
            <>
                <form class="row g-3">
                    {this.props.data.map(ele => this.renderFormElement(ele))}                
                </form>
                <br></br>
                <button class="btn btn-primary">{Message.button.search}</button>
            </>
        )
    }
}