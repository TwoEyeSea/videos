import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
    placeholder: " Please enter a search term :)",
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
    //  TODO : Make sure we call
    // callback from parent compoennt
  };

  render() {
    return (
      <div onSubmit={this.onFormSubmit} className="search-bar ui segment">
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
