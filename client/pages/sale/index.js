import React,{Component} from 'react';
import Layout from '../../layouts/Layout'
import PageInfo from '../../config/pageinfo'
import Navigation from '../../config/navigation'
import DataTable from '../../components/table'
import FormSearch from '../../components/formSearch'

export default class Sale extends Component {
    constructor(props){
        super(props);
    }

    render() {
      const tableData = {
        header : [{key: "id", name: "STT"},{key: "invoiceNo", name: "So Giao Dich"},{key: "date", name: "Ngay Giao Dich"},{key: "action", name: "Xuat/Nhap"},{key: "total", name: "Tong Tien"},{key: "description", name: "Ghi Chu"}],
        content: [{id: 1, date: "22/10/2020",invoiceNo:"B123", action: "Nhap",total:"500.000",description:"Nhap tu trung quoc"},
                  {id: 2, date: "23/10/2020",invoiceNo:"M123", action: "Ban", total:"240.000",description:"Ban cho sdt 2584788"}],
        link: Navigation.module.sale.detail,
        linkBy: "id"
      };
      const formSearchData = [
        {
            name: "Loai",type:"select",label: "Xuat/Nhap", options:[{value:"0",label:"Xuat"},{value:1,label:"Nhap"}]
        },
        {
            name: "startDate",type: "date",label: "Tu Ngay"
        },
        {
            name: "endDate",type: "date",label: "Den Ngay"
        }           
    ]

          return (
            <Layout pageInfo={PageInfo.sale}>
              <FormSearch data={formSearchData}></FormSearch>
              <DataTable data={tableData}></DataTable>
            </Layout>
          );
    }
}