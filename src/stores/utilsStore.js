import { observable, action } from 'mobx';

class UtilsStore {

  @observable message = 'some words....'

  @action update(words) {
    this.message = words;
  }

}


export default new UtilsStore();