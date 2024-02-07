import React from 'react';
import {CatalogsWrapper, CatalogTabContainer, SelectRegion} from "@/Components/Home/CatalogTabStyles";
import {CommonText} from "@/styles/Text";
import {FormattedMessage} from "react-intl";
import {SelectRegionIcon} from "@/Components/Icons/Icons";

export default function CatalogTabs() {
    return (
        <CatalogTabContainer>
            <CatalogsWrapper>
                <li><FormattedMessage id="ads" /></li>
                <li><FormattedMessage id="catalog"/></li>
                <li><FormattedMessage id="dealers"/></li>
                <li><FormattedMessage id="reviews"/></li>
                <li><FormattedMessage id="video"/> </li>
                <li><FormattedMessage id="logbook"/></li>
            </CatalogsWrapper>

            <SelectRegion>
                <SelectRegionIcon/>

                <CommonText margin="0 0 0 10px">
                    <FormattedMessage id="any.region"/>
                </CommonText>
            </SelectRegion>
        </CatalogTabContainer>
    );
}
