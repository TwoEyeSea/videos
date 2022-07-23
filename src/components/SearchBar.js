import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
    placeholder: " Please enter a search term :)",
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
    //  note that that onFormSubmit is a prop originally specified
    //  within the parent component and we're passing our state.term to that same function.
  };

  render() {
    return (
      <div onSubmit={this.submitForm} className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              placeholder={this.state.placeholder}
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
