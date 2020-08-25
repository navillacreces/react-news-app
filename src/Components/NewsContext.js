import React from 'react';

const NewsContext = React.createContext({
      articles: [],
      top3Articles: [],
      beyondArticles: [],
      spotlightArticles: [],
      factArticles: [],
      businessArticles: [],
      business3Articles: [],
      entertainmentArticles: [],
      entertainment3Articles: [],
      technologyArticles:[],
      technology3Articles:[],
      sportsArticles: [],
      sports3Articles: [],
      scienceArticles: [],
      science3Articles: [],
      healthArticles: [],
      health3Articles: [],

});

export default NewsContext;