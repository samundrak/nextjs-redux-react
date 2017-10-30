import Layout from '../components/MyLayout.js'
import withRedux from "next-redux-wrapper";
import makeStore from '../store/index';

let Index = (props) => (
  <Layout>
    <h1>Dashboard</h1>
    <div className="information-box">
      <div className="information-left">
        <span><strong>{props.dashboard.hits}</strong></span>
        <div>Hits</div>
      </div>
      <div className="information-middle">
        <span><strong>{props.dashboard.views}</strong></span>
        <div>Views</div>
      </div>
      <div className="information-right">
        <span><strong>{props.dashboard.impressions}</strong></span>
        <div>Impressions</div>
      </div>
    </div>
  </Layout>
)

Index = withRedux(makeStore, (state) => ({
  dashboard: state.content.apps[state.current].dashboard,
}))(Index);
export default Index