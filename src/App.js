import React from 'react';
import Header from './Components/Header';
import './App.css';
import config from './config';
import TopStories from './Components/TopStories';
import Sidebar from './Components/Sidebar';
import InfoBar from './Components/InfoBar';
import NewsContext from './Components/NewsContext';


export default class App extends React.Component{



  constructor(props){
    super(props);
    this.state ={

      articles: [],
      top3Articles : [],
      beyondArticles: [],
      spotlightArticles: [],
      factArticles: [],
      businessArticles: [],
      business3Articles : [],
      entertainmentArticles: [],
      entertainment3Articles: [],
      technologyArticles:[],
      technology3Articles: [],
      sportsArticles: [],
      sports3Articles: [],
      scienceArticles: [],
      science3Articles: [],
      healthArticles: [],
      health3Articles: []
     
    }
  }



  componentDidMount(){

    const key = config.REACT_APP_KEY;

    const withKey = `&apiKey=${key}`;

    const rootUrl = "https://newsapi.org/v2/top-headlines?country=us";
    const options = {
      method : 'GET'
    };

   
    const searchArticles = rootUrl + withKey;
    fetch(searchArticles,options).then(res =>{
      if(!res.ok){
        console.log('hey error')
      }
      return res.json();
    }).then(res =>{

      const top3 = res.articles.slice(0,3);
      const beyond  = res.articles.slice(3,8);
      const spot = res.articles.slice(8,14);
      const fact = res.articles.slice(14,20);

      this.setState({
        articles : res.articles,
        top3Articles : top3,
        beyondArticles: beyond,
        spotlightArticles : spot,
        factArticles: fact
      })


    })

    const forBusiness =  rootUrl + "&category=business" + withKey;

    fetch(forBusiness,options).then(res =>{
      if(!res.ok){
        console.log('hey error')
      }
      return res.json()
    }).then(res =>{

        const b3 = res.articles.splice(0,3);

        this.setState({
          businessArticles: res.articles,
          business3Articles: b3
        })
    })

    const forTech = rootUrl + "&category=technology" + withKey;
    
    fetch(forTech,options).then(res =>{
      if(!res.ok){
        console.log('hey error')
      }
      return res.json()
    }).then(res =>{

        const t3 = res.articles.slice(0,3);

        this.setState({
          technologyArticles: res.articles,
          technology3Articles : t3
        })
        
    });

    const forEntertainment = rootUrl + "&category=entertainment" + withKey;
    fetch(forEntertainment,options).then(res =>{
      if(!res.ok){
        console.log('hey error')
      }
      return res.json()
    }).then(res =>{

      const e3 = res.articles.slice(0,3);

        this.setState({
          entertainmentArticles: res.articles,
          entertainment3Articles: e3
        })
    })
      
    const forScience = rootUrl + "&category=science" + withKey;
    fetch(forScience,options).then(res =>{
      if(!res.ok){
        console.log('hey error')
      }
      return res.json()
    }).then(res =>{

        const sc3 = res.articles.slice(0,3);

        this.setState({
          scienceArticles: res.articles,
          science3Articles : sc3
        })
    })

    const forHealth = rootUrl + "&category=health" + withKey;
    fetch(forHealth,options).then(res =>{
      if(!res.ok){
        console.log('hey error')
      }
      return res.json()
    }).then(res =>{

        const h3 = res.articles.slice(0,3);

        this.setState({
          healthArticles: res.articles,
          health3Articles : h3
        })
    })

    const forSports = rootUrl + "&category=sports" + withKey;
    fetch(forSports,options).then(res =>{
      if(!res.ok){
        console.log('hey error')
      }
      return res.json()
    }).then(res =>{

      const s3 = res.articles.slice(0,3);

        this.setState({
          sportsArticles: res.articles,
          sports3Articles: s3
        })
    })
    
  }

  render(){

    const contextValue = {

      articles: this.state.articles,
      top3Articles : this.state.top3Articles,
      beyondArticles: this.state.beyondArticles,
      spotlightArticles: this.state.spotlightArticles,
      factArticles: this.state.factArticles,
      businessArticles: this.state.businessArticles,
      business3Articles: this.state.business3Articles,
      entertainmentArticles: this.state.entertainmentArticles,
      entertainment3Articles: this.state.entertainment3Articles,
      technologyArticles: this.state.technologyArticles,
      technology3Articles: this.state.technology3Articles,
      sportsArticles: this.state.sportsArticles,
      sports3Articles: this.state.sports3Articles,
      scienceArticles: this.state.scienceArticles,
      science3Articles : this.state.sports3Articles,
      healthArticles:  this.state.healthArticles,
      health3Articles: this.state.health3Articles
     
    };

    
    

    return(
      <NewsContext.Provider value={contextValue}>
          <div className="App">
            <Header />
              <div className="app-flex">  
                <Sidebar />
                
                  <TopStories />
                  <InfoBar />
                      
                   
                   </div>
                </div>
      </NewsContext.Provider>
      
    )
  }
}








