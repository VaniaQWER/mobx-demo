import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Debounce, Bind } from 'lodash-decorators';

@inject('userStore')
@inject('utilsStore')
@observer
class Login extends Component {
  
  @Bind()
  @Debounce(600)
  _onInput (event) {
    const { target: { name, value } } = event;
    const { userStore } = this.props;
    userStore.updateUser({
      [name]: value
    })
  }
  render () {
    const { userStore, utilsStore, history } = this.props;
    return (
      <div>
        <div>
          username: 
          <input 
            onInput={event => {
              event.persist();
              this._onInput(event);
            }} 
            defaultValue={userStore.currentUser.username}
            name='username'/>
        </div>
        <div>
          alias: 
          <input 
            onInput={event => {
              event.persist();
              this._onInput(event);
            }} 
            defaultValue={userStore.currentUser.alias}
            name='alias'
          />
        </div>
        <div>
          <button onClick={() => {
            utilsStore.update('登录成功');
            history.push('/success')
          }}>login</button>
        </div>
        <div>
        username: { userStore.currentUser.username || 'noname' }<br/>
        alias: { userStore.currentUser.alias || 'noalias' }<br />
        </div>
      </div>
    )
  }
}

export default Login;