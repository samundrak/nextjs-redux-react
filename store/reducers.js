import * as CONST from './const';

const initialState = {
  current: 'app1',
  apps: [
    { id: 'app1', label: 'Android' },
    { id: 'app2', label: 'Iphone' },
  ],
  content: {
    apps: {
      app1: {
        dashboard: {
          hits: 100,
          views: 200,
          impressions: 300,
        },
        users: [
          { name: 'samundra', address: 'butwal', dob: '2012/1/1' },
          { name: 'hari', address: 'birgunj', dob: '2011/1/2' },
          { name: 'rabi', address: 'pokhara', dob: '2013/3/3' }
        ],
        contacts: [
          { name: 'bibek', address: 'kathmandu', dob: '2015/5/5' }
        ],
      },
      app2: {
        dashboard: {
          hits: 400,
          views: 500,
          impressions: 600,
        },
        users: [
          { name: 'kirshna', address: 'butwal', dob: '2012/11/11' },
          { name: 'deepak', address: 'birgunj', dob: '2013/4/4' },
          { name: 'sabin', address: 'pokhara', dob: '2015/5/5' }
        ],
        contacts: [
          { name: 'saroj', address: 'kathmandu', dob: '2015/5/5' }
        ],
      }
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONST.CHANGE_CURRENT_APP:
      return { ...state, current: action.app };
    default:
      return state
  }
};
export default reducer;