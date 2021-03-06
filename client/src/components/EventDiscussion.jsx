import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitCommentActionCreator } from '../action-creators';

import './EventDiscussion.css';

class EventDiscussion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainComment: '',
      secondaryComment: ''
    };
  }

  handleTextChange(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  handleCommentSubmit(e) {
    e.preventDefault();
    // debugger;
    this.props.dispatch(submitCommentActionCreator(this.props.match.params.id, this.state.mainComment));
  }

  render() {
    const state = this.state;
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className="media">
              <img className="mr-3" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15fb74c72f0%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15fb74c72f0%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2212.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder" />
              <div className="media-body">
                <h5 className="mt-0">Audisho Sada</h5>
                I'm so excited for this event. Markus always kills it!
                <div className="media mt-4">
                  <img className="mr-3" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15fb74c72f0%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15fb74c72f0%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2212.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder" />
                  <div className="media-body">
                    <h5 className="mt-0">Loi Nguyen</h5>
                    Yiss!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div class="input-group">
              <input
                type="text"
                name='mainComment'
                class="form-control"
                placeholder="Say something..."
                aria-label="Say something..."
                value={state.mainComment}
                onChange={e => this.handleTextChange(e)} />
              <span class="input-group-btn">
                <button
                  class="btn btn-secondary"
                  type="button"
                  onClick={e => this.handleCommentSubmit(e)}>
                    Send!
                  </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
}

const ConnectedEventDiscussion = connect(mapStateToProps)(EventDiscussion);

export default ConnectedEventDiscussion;
