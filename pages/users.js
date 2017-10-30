import Layout from '../components/MyLayout.js'
import withRedux from "next-redux-wrapper";
import makeStore from '../store/index';
import User from '../components/User';

let Users = (props) => (
  <Layout>
    <h1>Users</h1>
    <div className="row">
      {props.users.map((user, index) => (
        <div key={index}  className="col-md-6">
          <User name={user.name} address={user.address} dob={user.dob} />
        </div>
      ))}
    </div>
  </Layout>
)

Users = withRedux(makeStore, (state) => ({
  users: state.content.apps[state.current].users,
}))(Users);
export default Users