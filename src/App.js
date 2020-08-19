import React from 'react';
import Header from './Components/Header';
import './App.css';
import config from './config';
import TopStories from './Components/TopStories';
import Sidebar from './Components/Sidebar';
import InfoBar from './Components/InfoBar';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      articles: [],
      businessArticles: [],
      entertainmentArticles: [],
      technologyArticles:[],
      sportsArticles: [],
      scienceArticles: [],
      healthArticles: []
    }
  }

  componentDidMount(){

    const rootUrl = "https://newsapi.org/v2/top-headlines?country=us";
    const options = {
      method : 'GET',
      headers : {
        'X-Api-Key': config.APIKEY
      }
    };

    fetch(rootUrl,options).then(res =>{
      if(!res.ok){
        console.log('hey error')
      }
      return res.json();
    }).then(res =>{
      this.setState({
        articles : res.articles
      })
    })

    const forBusiness =  rootUrl + "&category=business";

    fetch(forBusiness,options).then(res =>{
      if(!res.ok){
        console.log('hey error')
      }
      return res.json()
    }).then(res =>{
        this.setState({
          businessArticles: res.articles
        })
    })

    const forTech = rootUrl + "&category=technology";
    
    fetch(forTech,options).then(res =>{
      if(!res.ok){
        console.log('hey error')
      }
      return res.json()
    }).then(res =>{
        this.setState({
          technologyArticles: res.articles
        })
    })

    const forEntertainment = rootUrl + "&category=entertainment";

    fetch(forEntertainment,options).then(res =>{
      if(!res.ok){
        console.log('hey error')
      }
      return res.json()
    }).then(res =>{
        this.setState({
          entertainmentArticles: res.articles
        })
    })
      
    const forScience = rootUrl + "&category=science";
    fetch(forScience,options).then(res =>{
      if(!res.ok){
        console.log('hey error')
      }
      return res.json()
    }).then(res =>{
        this.setState({
          scienceArticles: res.articles
        })
    })

    const forHealth = rootUrl + "&category=health";
    fetch(forHealth,options).then(res =>{
      if(!res.ok){
        console.log('hey error')
      }
      return res.json()
    }).then(res =>{
        this.setState({
          healthArticles: res.articles
        })
    })

    const forSports = rootUrl + "&category=sports";
    fetch(forSports,options).then(res =>{
      if(!res.ok){
        console.log('hey error')
      }
      return res.json()
    }).then(res =>{
        this.setState({
          sportsArticles: res.articles
        })
    })
    
  }

  render(){

    const beyondArticles = () =>{

        const articles = [];
      for (let x=0;x < 6; x++){
          articles.push(this.state.technologyArticles[x])
      }
        return articles;
    };  

    const spotlightArticles = () =>{
      const articles = [];
      for(let x = 3; x < 9; x++){
        articles.push(this.state.articles[x])
      }
      return articles;
    }
    
    const factArticles = [this.state.articles[3],this.state.sportsArticles[3],this.state.healthArticles[3],this.state.businessArticles[3],this.state.scienceArticles[3]];

    return(
      <div className="App">
      <Header />
        <div className="app-flex">
          <Sidebar />
          <TopStories 
            articles={this.state.articles} 
            sportsArticles={this.state.sportsArticles}
            healthArticles={this.state.healthArticles}
            scienceArticles={this.state.scienceArticles} 
            entertainmentArticles={this.state.entertainmentArticles} 
            technologyArticles={this.state.technologyArticles}  
            businessArticles={this.state.businessArticles}/>
          <InfoBar 
            factArticles={factArticles}
            beyondArticles={beyondArticles()}
            spotlightArticles={spotlightArticles()}
             />
        </div>
        
       
    </div>
    )
  }
}

