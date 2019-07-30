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
    <Title>source</Title>
    <hr />
    <p>Source code is available on GitHub at: <a target="_blank" href="https://github.com/k-five/adzuki">github.com/k-five/adzuki</a>.</p>
    <p>Also download it as tar.gz file:</p>
    <ol>
        <li>link</li>
    </ol>
</Page>;

const rootHtml = document.getElementById( "root" );
render( root, rootHtml );

const footerJs = <Fragment>
    <div className="links">
        <a href="/"><Button size="small" variant="contained" color="secondary"> home </Button></a>
        <a href="/consideration"><Button size="small" variant="contained" color="primary"> consideration </Button></a>
        <a href="/technologies"><Button size="small" variant="contained" color="primary"> technologies </Button></a>
        <a href="/tools"><Button size="small" variant="contained" color="primary"> tools </Button></a>
        <a href="/document"><Button size="small" variant="contained" color="primary"> document </Button></a>
        <a href="/example"><Button size="small" variant="contained" color="primary"> example </Button></a>
        <a href="/architecture"><Button size="small" variant="contained" color="primary"> architecture </Button></a>
        <Button size="small" variant="contained" color="default"> source </Button>
    </div>
</Fragment>;

const footer = document.getElementById( "footer" );
render( footerJs, footer );
