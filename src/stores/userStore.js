import { observable, action, computed } from 'mobx';

class UserStore {

  constructor() {
    this.keywords = 'Jennifer';
  }
  

  @observable currentUser = {
    username: 'vania',
    alias: '拖鞋爸爸'
  }

  @observable numbers = 0;

  @action updateUser(user) {
    this.currentUser = {
      ...this.currentUser,
      ...user
    }
  }

  @computed get updateKeyWords () {
    return this.keywords = 'Vania';
  }

}


export default new UserStore();