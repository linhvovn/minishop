import React,{Component} from 'react';
import Layout from '../../layouts/Layout'
import PageInfo from '../../config/pageinfo'
import DataTable from '../../components/table'
import Navigation from '../../config/navigation'
import FormSearch from '../../components/formSearch'

export default class ProductList extends Component {
    constructor(props){
        super(props);
    }    

    render() {
      const tableData = {
        header : [{key: "id", name: "STT"},{key: "name", name: "Ten San Pham"},{key: "code", name: "Ma So"},{key: "group", name: "Nhom San Pham"},{key: "balance", name: "Ton Kho"}],
        content: [{id: 1, name: "CPU", code: "CPU-Z", group: "CPU",balance: "5"},{id: 2, name: "Phone", code: "Headset", group: "Phone",balance: "1"}],
        link: Navigation.module.product.detail,
        linkBy: "id"
      };
      const formSearchData = [
        {
            name: "name",type:"text",label: "Ten San Pham"
        },
        {
            name: "code",type: "text",label: "Ma San Pham"
        },
        {
            name: "group",type: "select",label: "Nhom San Pham",options:[{value:0,label:"CPU",value:1,label:"Mainboard"}]
        },
        {
          name: "balanceFrom",type: "number",label: "Ton Kho Tu"
        },
        {
          name: "balanceTo",type: "number",label: "Ton Kho Den"
        }       
    ]
          return (
            <Layout pageInfo={PageInfo.product}>
              <FormSearch data={formSearchData}></FormSearch>
              <DataTable data={tableData}></DataTable>
            </Layout>
          );
    }
}