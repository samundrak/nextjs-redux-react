import Layout from '../components/MyLayout.js'
import withRedux from "next-redux-wrapper";
import makeStore from '../store/index';
import User from '../components/User';

let Contact = (props) => (
  <Layout>
    <h1>Contact</h1>
    <div className="row">
      {props.contacts.map((contact, index) => (
        <div key={index} className="col-md-6">
          <User name={contact.name} address={contact.address} dob={contact.dob} />
        </div>
      ))}
    </div>
  </Layout>
)


Contact = withRedux(makeStore, (state) => ({
  contacts: state.content.apps[state.current].contacts,
}))(Contact);
export default Contact