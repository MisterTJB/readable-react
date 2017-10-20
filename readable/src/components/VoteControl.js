import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upvotePost, downvotePost } from '../actions';
import { incrementVote as apiIncrement, decrementVote as apiDecrement } from '../utilities/api';


class VoteControl extends Component {

  incrementVote = _ => {
    let { upvote, id } = this.props;

    apiIncrement(id).then( _ => {
      upvote(id)
    })

  }

  decrementVote = _ => {
    let { downvote, id } = this.props;
    apiDecrement(id).then( _ => {
      downvote(id)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.decrementVote}>-</button>
        <button onClick={this.incrementVote}>+</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upvote: d => dispatch(upvotePost(d)),
    downvote: d => dispatch(downvotePost(d))
  }
}

export default connect(_ => ({}), mapDispatchToProps)(VoteControl)
