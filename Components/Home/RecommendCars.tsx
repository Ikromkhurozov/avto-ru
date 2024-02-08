import React from 'react';
import { useRouter} from "next/router";
import Image from "next/image";
import {FormattedMessage, useIntl} from "react-intl";

import {CarInfo, CarItem, CarsContainer, CarTitle} from "@/Components/Home/RecommendCarStyles";

import CarImage from "@/public/bmw.jpg"

import {getCarsList} from "@/utils/carsList";
import {CommonText} from "@/styles/Text";

export default function RecommendCars() {
    const intl = useIntl();
    const {locale} = useIntl();
    const router = useRouter()
    const cars = getCarsList(intl)

    return (
        <CarsContainer>
            {cars?.map((car: any) => (
                <CarItem onClick={() => router.push(`${locale}/cars/${car?.id}`)} key={car?.id}>
                    <Image src={CarImage} width="260" height="190" alt={car?.name}/>
                    <CommonText color="#000" fontWeight="600" fontSize="18px" lineHeight="22px"><FormattedMessage id={car?.cost}/> </CommonText>
                    <CarTitle><FormattedMessage id={car?.name}/></CarTitle>
                    <CarInfo>
                        <CommonText fontSize="15px" ><FormattedMessage id={car?.year}/> <FormattedMessage id="year"/></CommonText>
                        <CommonText fontSize="15px"><FormattedMessage id={car?.km}/></CommonText>
                    </CarInfo>
                </CarItem>
            ))}
        </CarsContainer>
    );
}