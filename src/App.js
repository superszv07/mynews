import { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News  from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadingBar from 'top-loading-bar/dist'
export default class App extends Component {
  pageSize = 5;
  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={6} country="us" category="general"/>}></Route> 
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={6} country="us" category="business"/>}></Route> 
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={6} country="us" category="entertainment"/>}></Route> 
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={6} country="us" category="health"/>}></Route> 
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={6} country="us" category="science"/>}></Route> 
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={6} country="us" category="sports"/>}></Route> 
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={6} country="us" category="technology"/>}></Route> 
        </Routes>
        </Router>
      </div>
    )
  }
};
