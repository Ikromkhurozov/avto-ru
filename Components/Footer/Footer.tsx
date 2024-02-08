import React from 'react';
import Link from "next/link";
import {FormattedMessage, useIntl} from "react-intl";

import {TwitterIcon, VkIcon, YouTubeIcon} from "@/Components/Icons/Icons";

import {getRegions} from "@/utils/regionsList";

import {
    BaseLinks, BaseLinksContent,
    FooterContainer, Owner,
    RegionColumns,
    RegionsWrapper,
    SeoText,
    ServicesWrapper, SocialsWrapper
} from "@/Components/Footer/FooterStyles";
import {CommonText} from "@/styles/Text";

export default function Footer() {
    const intl = useIntl()
    const {locale} = useIntl();
    const regions = getRegions(intl);

    return (
        <FooterContainer>
            <ServicesWrapper>
                <Link href="/"><FormattedMessage id="place.and.advertisement"/></Link>
                <Link href="/"><FormattedMessage id="for.business"/></Link>
                <Link href="/"><FormattedMessage id="help"/></Link>
                <Link href="/"><FormattedMessage id="become.part.of.the.team"/></Link>
                <Link href="/"><FormattedMessage id="about.the.project"/></Link>
                <Link href="/"><FormattedMessage id="analytics.avto.ru"/></Link>
                <Link href="/"><FormattedMessage id="sasha.kotov"/></Link>
            </ServicesWrapper>

            <RegionsWrapper>
                <RegionColumns>
                    { regions && regions?.map(region => (
                        <Link key={region.id} href={`/${locale}/regions/${region.slug}`}>
                            <FormattedMessage id={region.label}/>
                        </Link>
                    ))}
                </RegionColumns>
            </RegionsWrapper>

            <SeoText>
                <CommonText><FormattedMessage id="seo.text.one"/></CommonText>
                <CommonText><FormattedMessage id="seo.text.two"/></CommonText>
            </SeoText>

            <BaseLinks>
               <BaseLinksContent>
                   <CommonText><FormattedMessage id="advertising.services"/></CommonText>
                   <Link href="/"><FormattedMessage id="terms.of.use"/></Link>
                   <Link href="/"><FormattedMessage id="recommendation.rules"/></Link>
               </BaseLinksContent>
                <SocialsWrapper>
                    <VkIcon/>
                    <YouTubeIcon/>
                    <TwitterIcon/>
                </SocialsWrapper>
            </BaseLinks>

            <Owner>
                <CommonText fontSize="12px" lineHeight="14px" margin="0 5px 0 0"><FormattedMessage id="project.company"/></CommonText>
                <CommonText><Link href="https://ya.ru/" target="_blank">Яндекс</Link></CommonText>
            </Owner>
        </FooterContainer>
    );
}