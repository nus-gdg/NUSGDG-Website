import React from 'react';
import Video from '../../videos/BannerVid.mp4'
import { BannerContainer, BannerBg, VideoBg, BannerContent, BannerH1, BannerP, BannerBtnWrapper } from './BannerElements';
import { Button } from '../Button/ButtonElement';

const Banner = () => {
    return (
        <BannerContainer>
            <BannerBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </BannerBg>
            <BannerContent>
                <BannerH1>Build Worlds, Create Games</BannerH1>
                <BannerP>NUS Game Development Group</BannerP>
                <BannerBtnWrapper>
                    <Button bg>Learn More</Button>
                </BannerBtnWrapper>
                <BannerBtnWrapper>
                <Button>View Our Games</Button>
                </BannerBtnWrapper>
            </BannerContent>
        </BannerContainer>
    )
}

export default Banner;
