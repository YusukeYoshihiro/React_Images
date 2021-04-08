import React from 'react';
import unsplash from '../api/unsplash'
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = {
    images: [],
  }
  // In Event handler, if when we want to invoke "this.setState({})" inside of onSearchSubmit, we must use Allow function in onSearchSubmit.
   onSearchSubmit = async(term) =>{
    const res = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({images : res.data.results})
  }

render(){
  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSubmit={this.onSearchSubmit} />
      <ImageList images={this.state.images}/>
    </div>
  )
}
}

export default App;
