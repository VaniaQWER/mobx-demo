import { observable, action } from 'mobx';

class UserStore {

  @observable currentUser = {
    username: 'vania',
    alias: '拖鞋爸爸'
  }

  @action updateUser(user) {
    this.currentUser = {
      ...this.currentUser,
      ...user
    }
  }

}


export default new UserStore();