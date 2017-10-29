const initialState = {
  current: 'app1',
  apps: [
    { id: 'app1', label: 'Android' },
    { id: 'app1', label: 'Iphone' },
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
          { name: 'samundra', address: 'butwal' },
          { name: 'hari', address: 'birgunj' },
          { name: 'rabi', address: 'pokhara' }
        ],
        contacts: [
          { name: 'bibek', address: 'kathmandu' }
        ],
      },
      app2: {
        dashboard: {
          hits: 400,
          views: 500,
          impressions: 600,
        },
        users: [
          { name: 'kirshna', address: 'butwal' },
          { name: 'deepak', address: 'birgunj' },
          { name: 'sabin', address: 'pokhara' }
        ],
        contacts: [
          { name: 'saroj', address: 'kathmandu' }
        ],
      }
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FOO':
      return { ...state, foo: action.payload };
    default:
      return state
  }
};
export default reducer;