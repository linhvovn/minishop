import React,{Component} from 'react';
import Layout from '../../layouts/Layout'
import PageInfo from '../../config/pageinfo'

export default class Report extends Component {
    constructor(props){
        super(props);
    }

    render() {
          return (
            <Layout pageInfo={PageInfo.report}>
              Hello
            </Layout>
          );
    }
}