import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Container, Heading, Hero} from 'react-bulma-components';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import CompoDescription1 from "../components/CompoDescription1";
import CompoDescription2 from "../components/CompoDescription2";
import CompoDescription3 from "../components/CompoDescription3";

function Component({state, t}) {


    if (state.isFollowing && state.currentPage !== 'component') {
        return <Redirect to={state.currentPage}/>;
    }

    return (
        <Fragment>
            {
                state.showHeader ? (
                    <Hero color={state.currentTheme === 'info' ? 'info' : 'dark'}>
                        <Hero.Body>
                            <Container>
                                <Heading>{t('reactComponent')}</Heading>
                                <Heading subtitle size={3}>
                                    {t('reactComponentSubtitle')}
                                </Heading>
                            </Container>
                        </Hero.Body>
                    </Hero>
                ) : null
            }
            <CompoDescription1/>
            <CompoDescription2/>
            <CompoDescription3/>
        </Fragment>
    );
}


const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps)(withTranslation()(Component));
