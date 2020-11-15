import Message from "./message"

const PageInfo = {

    home : {
        header: Message.pages.home.title
    },
    product: {
        header: Message.pages.product.title,
        module: {
            detail : {
                header: Message.pages.product.module.detail.header,
            }
        }
    },
    sale: {
        header: Message.pages.sale.title,
        module: {
            detail : {
                header: Message.pages.sale.module.detail.header,
            }
        }
    },
    users: {
        header: Message.pages.users.title,
        module: {
            detail : {
                header: Message.pages.users.module.detail.header,
            }
        }
    },
    report: {
        header: Message.pages.report.title,
        module: {
            detail : {
                header: Message.pages.report.module.detail.header,
            }
        }
    }

};

export default PageInfo;