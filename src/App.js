import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './component/header';
import Headline from './component/headline';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import { fetchPosts } from './actions';
import './app.scss';

const tempArr = [{
  fName: 'Arash',
  lName: 'Manteghi',
  email: 'arash.manteghi@gmail.com',
  age: 31,
  onlineStatus: true,
}];

const initialState = {
  hideBtn: false
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  fetch = () => {
    this.props.fetchPosts();
    this.exampleMethod_updatesState()
  };

  exampleMethod_updatesState = () => {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    });
  };

  exampleMethod_returnsAValue = (number) => {
    return number + 1;
  };

  render() {
    const { posts } = this.props;
    const { hideBtn } = this.state;

    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    };

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <div className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />

          {!hideBtn &&
            <SharedButton {...configButton} />
          }

          {posts.length > 0 && 
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body,
                };
                return <ListItem key={index} {...configListItem} />
              })}
            </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(App);
