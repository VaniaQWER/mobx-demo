import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';

@inject('utilsStore')
@inject('userStore')
@observer
class SuccessPage extends Component {
  render() {
    const { utilsStore, userStore  } = this.props;
    return (
      <p>
        { utilsStore.message }, 欢迎 { userStore.currentUser && userStore.currentUser.username }
      </p>
    )
  }
}

export default SuccessPage;