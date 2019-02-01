import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';

@inject('utilsStore')
@inject('userStore')
@observer
class SuccessPage extends Component {
  render() {
    const { utilsStore, userStore  } = this.props;
    return (
      <div>
        <button>
          点击修改keywords
        </button>
        { utilsStore.message }, 欢迎 { userStore.currentUser && userStore.currentUser.username }
        <br/>
        <div>keywords：{ userStore.keywords}</div>
        <div>after update keywords: { userStore.updateKeyWords }</div>
      </div>
    )
  }
}

export default SuccessPage;