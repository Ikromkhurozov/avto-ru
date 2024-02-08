import React, {useState} from 'react';
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import {FormattedMessage, useIntl} from "react-intl";

const Navigation = dynamic(() => import("@/Components/Header/Navigation"));
const LanguageSwitcher = dynamic(() => import("@/Components/Header/LanguageSwitcher"));
const SubMenuPanel = dynamic(()=> import("@/Components/Header/SubMenuPanel"))
const CatalogTabs = dynamic(()=> import("@/Components/Header/CatalogTabs"))
const Modal = dynamic(()=> import("@/Components/CommonModal/CommonModal"))

import {
    CloseIcon,
    ComparisonIcon,
    FavIcon,
    MenuLogo,
    MessageIcon,
    SearchFavIcon,
    SearchIcon, SellItIcon
} from "@/Components/Icons/Icons";

import {
    CatalogContainer,
    HeaderContainer,
    HeaderLinks,
    HeaderWrapper,
    LinkWrapper, LoginActions, LoginContent, LoginInput, LogoWrapper, NavigationWrapper,
    SearchInput
} from "@/Components/Header/HeaderStyles";
import {IconWrapper} from "@/styles/CommonStyles";
import {CommonText} from "@/styles/Text";
import {Button} from "@/styles/Buttons";

 export default function Header() {
     const intl = useIntl()
     const router = useRouter();
     const [isOpen, setIsOpen] = useState(false);
     const [toggleLang, setToggleLang] = useState(false);
     const [showMenuPanel, setShowMenuPanel] = useState(false);

     const openModal = () => {
         setIsOpen(true);
     };

     const closeModal = () => {
         setIsOpen(false);
     };

     return (
        <HeaderContainer>
            <HeaderWrapper>
                <IconWrapper onMouseEnter={()=> setShowMenuPanel(true)} onMouseLeave={() => setShowMenuPanel(false)}>
                    {!showMenuPanel ? <MenuLogo/> : <CloseIcon />}
                    {showMenuPanel &&  <SubMenuPanel/>}
                </IconWrapper>
                <LogoWrapper onClick={()=> router.push("/")}>
                    <CommonText color="#E60000" fontSize="28px" fontWeight="600" lineHeight="30px">auto.ru</CommonText>
                </LogoWrapper>

                <SearchInput>
                    <SearchIcon/>
                    <input type="search" placeholder={intl.formatMessage({ id: "search.by.advertisements" })}/>
                </SearchInput>

                <HeaderLinks>
                    <LinkWrapper>
                        <FavIcon/>
                        <CommonText margin="2px 0 0 0" fontSize="12px" color="#00000080" lineHeight="14px" >
                            <FormattedMessage id="favorites"/>
                        </CommonText>
                    </LinkWrapper>
                    <LinkWrapper>
                        <SearchFavIcon/>
                        <CommonText margin="2px 0 0 0" fontSize="12px" color="#00000080" lineHeight="14px" >
                            <FormattedMessage id="search"/>
                        </CommonText>
                    </LinkWrapper>
                    <LinkWrapper>
                        <ComparisonIcon/>
                        <CommonText margin="2px 0 0 0" fontSize="12px" color="#00000080" lineHeight="14px" >
                            <FormattedMessage id="comparison"/>
                        </CommonText>
                    </LinkWrapper>
                    <LinkWrapper>
                        <MessageIcon/>
                        <CommonText margin="2px 0 0 0" fontSize="12px" color="#00000080" lineHeight="14px" >
                            <FormattedMessage id="message"/>
                        </CommonText>
                    </LinkWrapper>
                    <LinkWrapper>
                        <SellItIcon/>
                        <CommonText margin="2px 0 0 0" fontSize="12px" color="#00000080" lineHeight="14px" >
                            <FormattedMessage id="i.sell"/>
                        </CommonText>
                    </LinkWrapper>
                </HeaderLinks>

                <LanguageSwitcher toggleLang={toggleLang} setToggleLang={setToggleLang}/>

                <Button onClick={openModal} bgColor="#EFEFF3" hoveredBgColor="#e7e7e9" ><FormattedMessage id="login"/></Button>
                <Button bgColor="#36B555" hoveredBgColor="#36B555E0" color="#fff" ><FormattedMessage id="post.for.free"/></Button>

            </HeaderWrapper>

            <NavigationWrapper>
                <Navigation/>
            </NavigationWrapper>

            <CatalogContainer>
                <CatalogTabs/>
            </CatalogContainer>

            <Modal isOpen={isOpen} onClose={closeModal}>

                <LoginContent>
                    <CommonText color="#E60000" fontSize="45px" fontWeight="600" lineHeight="60px">auto.ru</CommonText>

                    <CommonText color="#000" fontSize="14px" margin="10px 0">
                        <FormattedMessage id="enter.the.site"/>
                    </CommonText>

                    <LoginInput type="input" placeholder={intl.formatMessage({id: "phone.or.mail"})} />

                    <LoginActions>
                        <Button width="100%" color="#fff" bgColor="#000" hoveredBgColor="#222"><FormattedMessage id="next"/></Button>

                        <Button onClick={closeModal}><FormattedMessage id="cancel"/></Button>
                    </LoginActions>

                    <CommonText fontSize="12px" lineHeight="14px" margin="25px 0"><FormattedMessage id="privacy.policy"/></CommonText>

                </LoginContent>
            </Modal>

        </HeaderContainer>
    );
}
