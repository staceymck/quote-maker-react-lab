import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(q => {
                return (
                <QuoteCard 
                  key={q.id} 
                  quote={q} 
                  downvoteQuote={this.props.downvoteQuote} 
                  upvoteQuote={this.props.upvoteQuote} 
                  removeQuote={this.props.removeQuote}/>
                )
              })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    downvoteQuote: (quoteId) => dispatch(downvoteQuote(quoteId)),
    upvoteQuote: (quoteId) => dispatch(upvoteQuote(quoteId)),
    removeQuote: (quoteId) => dispatch(removeQuote(quoteId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
