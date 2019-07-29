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
    <Title>architecture</Title>
    <hr />
    <p><Strong color="#c80000">Adzuki</Strong> architecture is based on <a target="_blank" href="http://nodepost.ir">nodepost</a> application.</p>
    <p>The core functionally have been taken but it has been more specialized into using:</p>
    <ul>
        <li>React.js for UI</li>
        <li>Independent JS, HTML, Scss files so they can be deployed independently.</li>
    </ul>
    <p>You can read more about nodepost here <a target="_blank" href="http://nodepost.ir/#DBS">Distributed Blogging System</a></p>

</Page>;

const rootHtml = document.getElementById( "root" );
render( root, rootHtml );

const footerJs = <Fragment>
    <div className="links">
        <a href="/"><Button size="small" variant="contained" color="primary"> home </Button></a>
        <a href="/consideration"><Button size="small" variant="contained" color="primary"> consideration </Button></a>
        <a href="/technologies"><Button size="small" variant="contained" color="primary"> technologies </Button></a>
        <a href="/tools"><Button size="small" variant="contained" color="primary"> tools </Button></a>
        <a href="/document"><Button size="small" variant="contained" color="primary"> document </Button></a>
        <a href="/example"><Button size="small" variant="contained" color="primary"> example </Button></a>
        <Button size="small" variant="contained" color="default"> architecture </Button>
        <a href="/source"><Button size="small" variant="contained" color="secondary"> source </Button></a>
    </div>
</Fragment>;

const footer = document.getElementById( "footer" );
render( footerJs, footer );
