import React, { Component } from 'react'
import NewsItem from '../NewsItem/NewsItem'
import InfiniteLoader from 'react-window-infinite-loader'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    apiKey = process.env.REACT_APP_NEWS_API_KEY;
    newsType = "general"
    pageSize = 5;
    constructor(props) {
        super(props);
        this.state = {
            newsList: [],
            page: 1,
            newsLoadingFlag: false,
            totalNewsItem: 0
        }

    }

    updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.apiKey}&page=${this.state.page}&pageSize=${this.pageSize}`;
        this.setState({
            newsLoadingFlag: true
        })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            newsList: parseData.articles,
            newsLoadingFlag: false,
            totalNewsItem: parseData.totalResults
        })
        console.log("newsList", this.state.newsList, this.state.totalNewsItem)
    }

    fetchMoreData = async () => {
        let url;
        let parseData
        this.setState({ page: this.state.page + 1 }, async () => {
            url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.apiKey}&page=${this.state.page}&pageSize=${this.pageSize}`;
            parseData = await fetch(url);
            parseData = await parseData.json();
            this.setState({
                newsList: this.state.newsList.concat(parseData.articles),
                newsLoadingFlag: false,
                totalNewsItem: parseData.totalResults,
            })
        });
    }

    async componentDidMount() {
        console.log("componentDidMount got called");
        this.updateNews();
    }
    render() {
        console.log("render method called");
        return (
            <>
                <InfiniteScroll
                    dataLength={this.state.newsList.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.newsList.length < this.state.totalNewsItem}
                    loader={<h4>Loading...</h4>}
                >
                    <div className="container">
                        <div className="row">
                            {
                                this.state.newsList.map((news, index) => {
                                    return <div className="col-md-4 " key={news.url}>
                                        <NewsItem title={news.title} 
                                        url={news.url} 
                                        description={news.description}
                                        urlToImage={news.urlToImage}
                                        source={news.source.name}
                                        author={news.author}
                                        publishDate={news.publishDate} />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}
