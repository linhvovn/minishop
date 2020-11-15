import Message from './message';

const Navigation = {
    menuLink : {
        home: {
            link: "/",
            title: Message.pages.home.title
        },
        product: {
            link: "/product/",
            title: Message.pages.product.title
        },
        sale: {
            link: "/sale/",
            title: Message.pages.sale.title
        },
        users: {
            link: "/user/",
            title: Message.pages.users.title
        },
        report: {
            link: "/report/",
            title: Message.pages.report.title
        }
    },
    module: {
        product: {
            detail : "/product/detail"
        },
        sale: {
            detail : "/sale/detail"
        },
        user: {
            detail : "/user/detail"
        }
    }
}

export default Navigation;