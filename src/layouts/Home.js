import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {Button, Container, Heading, Hero, Section} from 'react-bulma-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {changePath, changeTheme, resetState} from "../actions/appAction";
import qrCode from '../assets/images/qrcode.svg'
import {Redirect} from "react-router-dom";

function Home({props, state, t}) {
    // props contains dispatchers (you need to load them at the bottom of the file)
    const resetEverything = () => {
        props.resetState();
        props.resetPath();
    };

    if (state.isFollowing && state.currentPage !== '/') {
        return <Redirect to={state.currentPage}/>;
    }


    const sectionStyle = {
        padding: '3rem 1.5rem 3rem 0rem',
    };

    const qrStyle = {
        width: '25rem'
    };
    return (
        <Fragment>
            <Hero color={state.currentTheme === 'info' ? 'info' : 'dark'} size="fullheight">
                <Hero.Body>
                    <Container>
                        <img alt="QR Code" style={qrStyle} src={qrCode}/>
                        <Heading>{t('welcome')}</Heading>
                        <Heading subtitle size={3}>
                            {t('homeSubtitle')}
                        </Heading>
                        <Section style={sectionStyle}>
                            <Button.Group>
                                <Button onClick={() => props.changeTheme()}>
                                    <span className="icon">
                                        <FontAwesomeIcon icon="lightbulb"/>
                                    </span>
                                </Button>
                                <Button className="is-hidden-touch" onClick={() => resetEverything()}>
                                    <span className="icon">
                                        <FontAwesomeIcon icon="user-shield"/>
                                    </span>
                                </Button>
                            </Button.Group>
                        </Section>
                    </Container>
                </Hero.Body>
            </Hero>
        </Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    props: {
        changeTheme: () => dispatch(changeTheme()),
        resetState: () => dispatch(resetState()),
        resetPath: () => dispatch(changePath('/'))
    }
});

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Home));