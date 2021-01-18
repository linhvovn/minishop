import React, {Component} from 'react'
import Layout from '../../layouts/Layout'
import PageInfo from '../../config/pageinfo'
import Message from '../../config/message'
import Link from 'next/link'
import Navigation from '../../config/navigation'
import DataTable from '../../components/table'
import FormView from '../../components/formView'
import FormSearch from '../../components/formSearch'

export default class ProductDetail extends Component{
    constructor(props){
        super(props)
    }

    render() {
        const tableData = {
            header : [{key: "id", name: "STT"},{key: "invoiceNo", name: "Don Hang",link:"/sale/detail?invoiceNo="},{key: "date", name: "Ngay Giao Dich"},{key: "action", name: "Xuat/Nhap"},{key: "quantity", name: "So Luong"},{key: "price", name: "Gia"},{key: "total", name: "Thanh Tien"}],
            content: [{id: 1, date: "22/10/2020",invoiceNo:"B123", action: "+", quantity: "5",price: "100.000",total:"500.000"},
                      {id: 2, date: "23/10/2020",invoiceNo:"N123", action: "-", quantity: "2",price: "120.000",total:"240.000"}],
            link: Navigation.module.product.detail,
            linkBy: "id"
          };

        const formViewData = [
            {label: "Ten San Pham", value: "CPU", key: "name"},
            {label: "Ma San Pham", value: "CPU-Z", key: "code"},
            {label: "Nhom San Pham", value: "CPU", key: "group"},
            {label: "Ghi Chu", value: "Hang Dom", key: "description"},            
            {label: "Ton Kho", value: "5", key: "balance"}
        ]

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

        return (<Layout pageInfo={PageInfo.product.module.detail}>

            <FormView data={formViewData}></FormView>
            <hr></hr>
            <FormSearch data={formSearchData}></FormSearch>
            <br></br>
            <DataTable data={tableData}></DataTable>

            <Link href={Navigation.menuLink.product.link}>
                <button className="btn btn-secondary">{Message.button.back}</button>
            </Link>

        </Layout>);
    }
}