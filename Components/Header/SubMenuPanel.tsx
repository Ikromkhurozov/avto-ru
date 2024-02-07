import React from 'react';
import Link from "next/link";
import {FormattedMessage, useIntl} from "react-intl";

import {
    ColumnTitle,
    MenuPanelContainer,
    MenuPanelWrapper,
    PanelColumn,
    PanelColumnsWrapper,
    PanelTitleColumn
} from "@/Components/Header/SubMenuPanelStyles";

interface ColumnTitle {
    id: number;
    label: string;
}

export default function SubMenuPanel() {
    const intl = useIntl();

    const columnTitles: ColumnTitle[] = [
        {
            id: 1,
            label: intl.formatMessage({ id: "car.valuation" })
        },
        {
            id: 2,
            label: intl.formatMessage({ id: "ransom" })
        },
        {
            id: 3,
            label: intl.formatMessage({ id: "reports" })
        },
        {
            id: 4,
            label: intl.formatMessage({ id: "loans" })
        },
        {
            id: 5,
            label: intl.formatMessage({ id: "insurance" })
        },
        {
            id: 6,
            label: intl.formatMessage({ id: "reviews" })
        },
        {
            id: 7,
            label: intl.formatMessage({ id: "catalog" })
        },
        {
            id: 8,
            label: intl.formatMessage({ id: "garage" })
        },
        {
            id: 9,
            label: intl.formatMessage({ id: "logbook" })
        },
        {
            id: 10,
            label: intl.formatMessage({ id: "secure.transaction" })
        },
        {
            id: 11,
            label: intl.formatMessage({ id: "leasing" })
        },
    ];

    return (
        <MenuPanelContainer>
            <MenuPanelWrapper>
                <PanelColumnsWrapper>
                    <PanelTitleColumn>
                        {columnTitles.map((item) => (
                            <ColumnTitle key={item.id}>
                                <Link href="/">{item.label}</Link>
                            </ColumnTitle>
                        ))}
                    </PanelTitleColumn>
                </PanelColumnsWrapper>
                <PanelColumnsWrapper>
                    <PanelColumn>
                        <ColumnTitle>
                            <Link href="/"><FormattedMessage id="cars"/></Link>
                        </ColumnTitle>
                        <li>
                            <Link href="/"><FormattedMessage id="used"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="new"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="automotive.news"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="dealers"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="video"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="exeed"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="omoda"/></Link>
                        </li>

                    </PanelColumn>
                    <PanelColumn>
                        <ColumnTitle>
                            <Link href="/"><FormattedMessage id="moto"/></Link>
                        </ColumnTitle>
                        <li>
                            <Link href="/"><FormattedMessage id="motorcycles"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="scooters"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="atvs"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="snowmobiles"/></Link>
                        </li>
                    </PanelColumn>
                </PanelColumnsWrapper>

                <PanelColumnsWrapper>
                    <PanelColumn>
                        <ColumnTitle>
                            <Link href="/"><FormattedMessage id="commercial"/></Link>
                        </ColumnTitle>
                        <li>
                            <Link href="/"><FormattedMessage id="light.commercial"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="trucks"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="truck.tractors"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="buses"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="trailers.and.semi.trailers"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="agricultural"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="construction.and.road"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="loaders"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="mobile.cranes"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="excavators"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="bulldozers"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="communal"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="fotonn"/></Link>
                        </li>
                    </PanelColumn>
                    <PanelColumn>
                        <ColumnTitle>
                            <Link href="/"><FormattedMessage id="for.partners"/></Link>
                        </ColumnTitle>
                        <li>
                            <Link href="/"><FormattedMessage id="for.business"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="place.and.advertisement"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="collaboration.with.reports"/></Link>
                        </li>
                    </PanelColumn>
                </PanelColumnsWrapper>
                <PanelColumnsWrapper>
                    <PanelColumn>
                        <ColumnTitle>
                            <Link href="/"><FormattedMessage id="magazine"/></Link>
                        </ColumnTitle>
                        <li>
                            <Link href="/"><FormattedMessage id="news"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="tests"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="video"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="analysis"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="games"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="collections"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="textbook"/></Link>
                        </li>

                    </PanelColumn>
                    <PanelColumn>
                        <ColumnTitle>
                            <Link href="/"><FormattedMessage id="about.business"/></Link>
                        </ColumnTitle>
                        <li>
                            <Link href="/"><FormattedMessage id="miscellaneous"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="contract.of.sale"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="help"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="become.part.of.the.team"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="about.the.project"/></Link>
                        </li>
                        <li>
                            <Link href="/"><FormattedMessage id="analytics.avto.ru"/></Link>
                        </li>
                    </PanelColumn>
                </PanelColumnsWrapper>

            </MenuPanelWrapper>
        </MenuPanelContainer>
    );
}