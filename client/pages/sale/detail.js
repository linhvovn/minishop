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
            header : [{key: "id", name: "STT"},
                {key: "code", name: "Ma San Pham"},
                {key: "name", name: "Ten San Pham"},
                {key: "quantity", name: "So Luong"},
                {key: "price", name: "Don Gia"},
                {key: "total", name: "Thanh Tien"}],
            content: [{id: 1, date: "22/10/2020",code:"CPU-Z",name:"CPU", action: "+", quantity: "5",price: "100.000",total:"500.000"},
                      {id: 2, date: "23/10/2020",code:"Phone-X",name:"HeadSet", action: "-", quantity: "2",price: "120.000",total:"240.000"}]
          };

        const formViewData = [
            {label: "So Giao Dich", value: "B123", key: "invoiceNo"},
            {label: "Ngay Giao Dich", value: "22/10/2020", key: "date"},
            {label: "Tong Tien", value: "740.000", key: "total"},
            {label: "Loai", value: "Xuat", key: "action"},
            {label: "Ghi Chu",value:"Ban cho Nam, sdt 0112458778", key:"description"}
        ]


        return (<Layout pageInfo={PageInfo.sale.module.detail}>

            <FormView data={formViewData}></FormView>
            <hr></hr>
        
            <DataTable data={tableData}></DataTable>

            <Link href={Navigation.menuLink.sale.link}>
                <button className="btn btn-secondary">{Message.button.back}</button>
            </Link>
            <button className="btn btn-success">{Message.button.export}</button>

        </Layout>);
    }
}