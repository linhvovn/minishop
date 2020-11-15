import React,{Component} from 'react';
import Layout from '../../layouts/Layout'
import PageInfo from '../../config/pageinfo'
import Navigation from '../../config/navigation'
import FormSearch from '../../components/formSearch'
import DataTable from '../../components/table'

export default class Users extends Component {
    constructor(props){
        super(props);
    }

    render() {
      const tableData = {
        header : [{key: "id", name: "STT"},
                  {key: "username", name: "Ten Dang Nhap"},
                  {key: "displayName", name: "Ten Hien Thi"},
                  {key: "role", name: "Chuc Nang"},
                  {key: "description", name: "Ghi Chu"}],

        content: [{id: 1, username: "luan",displayName:"Thanh Luan", description: "", role:"Quan Ly"},
                  {id: 1, username: "linh",displayName:"Linh", description: "",role:"Admin"}],
        link: Navigation.module.user.detail,
        linkBy: "id"
      };
      const formSearchData = [
        {
          name: "usrename",type: "text",label: "Ten Dang Nhap"
        },
        {
          name: "displayName",type: "text",label: "Ten Hien Thi"
        },
        {
            name: "role",type:"select",label: "Chuc Danh", options:[{value:"0",label:"Admin"},{value:1,label:"Quan Ly Cua Hang"}]
        }         
    ]

          return (
            <Layout pageInfo={PageInfo.users}>
              <FormSearch data={formSearchData}></FormSearch>
              <DataTable data={tableData}></DataTable>
            </Layout>
          );
    }
}