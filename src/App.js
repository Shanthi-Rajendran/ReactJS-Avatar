import React from 'react';
import md5 from 'md5';
import './App.css';
class App extends React.Component {
  state = {
    users: [
      {
        name: 'User 1',
        emailId: 'mailId1@gmail.com',
      },
      {
        name: 'User 2',
        emailId: 'mailId2@gmail.com',
      },
    ],
  };

  render() {
    const { users } = this.state;
    return (
      <div className="main-container">
        <div class="ui horizontal list">
          {users.map((currentIndex, index) => (
            <div class="item" key={index}>
              <img
                class="ui mini circular image"
                src={`http://gravatar.com/avatar/${md5(
                  currentIndex.emailId
                )}?d=identicon`}
                alt={currentIndex.emailId}
                className="ui circular image"
              />
              <div class="content">
                <div class="ui sub header">{currentIndex.name}</div>
                {currentIndex.emailId}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
