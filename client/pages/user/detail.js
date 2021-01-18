import React, {Component} from 'react'
import Layout from '../../layouts/Layout'
import PageInfo from '../../config/pageinfo'
import Message from '../../config/message'
import Link from 'next/link'
import Navigation from '../../config/navigation'
import DataTable from '../../components/table'
import FormView from '../../components/formView'

export default class SaleDetail extends Component{
    constructor(props){
        super(props)
    }

    render() {
        const tableData = {
            header : [{key: "id", name: "STT"},{key: "invoiceNo", name: "So Giao Dich"},{key: "date", name: "Ngay Giao Dich"},{key: "action", name: "Xuat/Nhap"},{key: "total", name: "Tong Tien"},{key: "description", name: "Ghi Chu"}],
            content: [{id: 1, date: "22/10/2020",invoiceNo:"B123", action: "Nhap",total:"500.000",description:"Nhap tu trung quoc"},
                      {id: 2, date: "23/10/2020",invoiceNo:"M123", action: "Ban", total:"240.000",description:"Ban cho sdt 2584788"}],
            link: Navigation.module.sale.detail,
            linkBy: "id"
          };

        const formViewData = [
            {label: "Ten Dang Nhap", value: "luan", key: "username"},
            {label: "Ten Hien Thi", value: "thanh luan", key: "displayName"},
            {label: "Chuc Nang", value: "Manager", key: "role"},
            {label: "Ghi Chu",value:"Chu Cua Hang", key:"description"}
        ]
        const formControl = {
            readOnly : false
        }


        return (<Layout pageInfo={PageInfo.users.module.detail}>

            <FormView data={formViewData} control={formControl}></FormView>
            <hr></hr>
        
            <DataTable data={tableData}></DataTable>

            <Link href={Navigation.menuLink.users.link}>
                <button className="btn btn-secondary">{Message.button.back}</button>
            </Link>

        </Layout>);
    }
}