import React, { Fragment, Component } from "react";
import { render } from "react-dom";
import Button from '@material-ui/core/Button';
const log = console.log;

const Title = ( props ) => {
    return <h1>{ props.children }</h1>
}

const SubTitle = ( props ) => {
    return <h3 className="sub-title">{ props.children }</h3>
}

const Page = ( props ) => {
    return props.children;
}

const Strong = ( props ) => {
    return <strong style={{ color: props.color }} >{ props.children }</strong>
}

const root = <Page>
    <Title>technologies</Title>
    <hr />
    <p>Technologies that have been used</p>

    <SubTitle>GNU/Linux</SubTitle>
    <p>Everything has been coded and tested and is running on a Desktop or Server version of <strong>GNU/Linux</strong> but you should not face any difficulties using <Strong color="#c80000">Adzuki</Strong> on <strong>Windows</strong>.</p>

    <SubTitle>Node.js</SubTitle>
    <p>Node.js has been used as a <strong>server</strong> also as a <strong>utility</strong>.</p>
    <p>In case of which version, version <strong>8.9.1+</strong> will be good.</p>

    <SubTitle>Express.js</SubTitle>
    <p>Express.js will take care of requests and also static files.</p>

    <SubTitle>JSON</SubTitle>
    <p>A simple JSON file has been used as the <strong>database</strong> to keep track of each path / directory.</p>

    <SubTitle>React.js</SubTitle>
    <p>The UI part can be with React.js; but anyone can change it to whatever they want.</p>

    <SubTitle><a target="_blank" href="https://sass-lang.com/">Sass</a></SubTitle>
    <p>Also for styling <strong>scss</strong> format has been used.</p>

</Page>;

const rootHtml = document.getElementById( "root" );
render( root, rootHtml );

const footerJs = <Fragment>
    <div className="links">
        <a href="/"><Button size="small" variant="contained" color="primary"> home </Button></a>
        <a href="/consideration"><Button size="small" variant="contained" color="primary"> consideration </Button></a>
        <Button size="small" variant="contained" color="default"> technologies </Button>
        <a href="/tools"><Button size="small" variant="contained" color="secondary"> tools </Button></a>
        <a href="/document"><Button size="small" variant="contained" color="primary"> document </Button></a>
        <a href="/features"><Button size="small" variant="contained" color="primary"> features </Button></a>
        <a href="/architecture"><Button size="small" variant="contained" color="primary"> architecture </Button></a>
        <a href="/source"><Button size="small" variant="contained" color="primary"> source </Button></a>
    </div>
</Fragment>;

const footer = document.getElementById( "footer" );
render( footerJs, footer );
