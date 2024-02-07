import React from 'react';
import {NavigationList} from "@/Components/Header/NavigationStyles";
import {FormattedMessage} from "react-intl";

export default function Navigation() {
    return (
        <NavigationList>
            <li><FormattedMessage id="cars"/></li>
            <li><FormattedMessage id="commercial"/></li>
            <li><FormattedMessage id="electric"/></li>
            <li><FormattedMessage id="chinese"/></li>
            <li><FormattedMessage id="moto"/></li>
            <li><FormattedMessage id="reports"/></li>
            <li><FormattedMessage id="ransom"/></li>
            <li><FormattedMessage id="loans"/></li>
            <li><FormattedMessage id="car.valuation"/></li>
            <li><FormattedMessage id="insurance"/></li>
            <li><FormattedMessage id="garage"/></li>
            <li><FormattedMessage id="magazine"/></li>
            <li><FormattedMessage id="for.business"/></li>
        </NavigationList>
    );
}