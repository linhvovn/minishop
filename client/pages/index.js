import Layout from '../layouts/Layout';
import PageInfo from '../config/pageinfo'

export default function Home() {
  return (
    <Layout pageInfo={PageInfo.home}>
      Hello
    </Layout>
  )
}
