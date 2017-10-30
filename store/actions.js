import * as CONST from './const';

export function handleAppChange(app) {
  return {
    type: CONST.CHANGE_CURRENT_APP,
    app,
  };
}