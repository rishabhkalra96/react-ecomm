import React from 'react';
import './content-body.scss';
import { ContentBodyService } from './../../services/content-body-service'
import SlideShow from '../shared/slide-show/slide-show';
import CardCarousel from '../shared/card-carousel/card-carousel';

export class ContentBody extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bannerUrls: []
        }
    }

    componentDidMount() {
        const urls = ContentBodyService.slideUrls()
        this.setState({
            bannerUrls: urls
        })
    }

    getBannerTemplates = (urls) => {
        return urls.map((url, idx) => {
            return <SlideShow source={url} key={"slider_" + idx} />
        })
    }

    getCategories = () => {
        return (
            <React.Fragment>
                <CardCarousel title={'Recommended Items'} />
                <CardCarousel title={'Best Selling'} />
                <CardCarousel title={'Recently Added'} />
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                <div className="content-container">
                    {this.state.bannerUrls.length && this.getBannerTemplates(this.state.bannerUrls)}
                    {this.getCategories()}
                </div>
            </React.Fragment>
        )
    }
}

