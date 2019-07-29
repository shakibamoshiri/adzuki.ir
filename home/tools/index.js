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
    <Title>tools</Title>
    <hr />
    <p>Users of <Strong color="#c80000">Adzuki</Strong> somehow has to deal with these tools.</p>

    <SubTitle><Strong color="#c80000">Adzuki</Strong></SubTitle>
    <p>The application - other than as a server - is a <strong>utility</strong> that deals with <strong>File-System</strong>.</p>
    <p>It creates files and directories and deletes them as well.</p>
    
    <SubTitle>Terminal</SubTitle>
    <p>The application is run from a Terminal and having a Terminal is a must.</p>
    <p>Here is a screenshot of when we run it the application.</p>
    <img width="100%" src="/build/img/adzuki-05-localhost-1400.png" alt="adzuki-05-localhost-1400.png" />

    <SubTitle>webpack and babel</SubTitle>
    <p>These two tools have been configured in the source code to <strong>transpile</strong> and <strong>bundle</strong> JSX files to JS files.</p>
    <p>Webpack can be run manually or can be automated on both Desktop or Sever using some <strong>bash</strong> script.</p>

    <SubTitle>sass</SubTitle>
    <p>This tool is also used to convert <strong>file.scss</strong> to <strong>file.css</strong>.</p>
</Page>;

const rootHtml = document.getElementById( "root" );
render( root, rootHtml );

const footerJs = <Fragment>
    <div className="links">
        <a href="/"><Button size="small" variant="contained" color="primary"> home </Button></a>
        <a href="/consideration"><Button size="small" variant="contained" color="primary"> consideration </Button></a>
        <a href="/technologies"><Button size="small" variant="contained" color="primary"> technologies </Button></a>
        <Button size="small" variant="contained" color="default"> tools </Button>
        <a href="/document"><Button size="small" variant="contained" color="secondary"> document </Button></a>
        <a href="/example"><Button size="small" variant="contained" color="primary"> example </Button></a>
        <a href="/architecture"><Button size="small" variant="contained" color="primary"> architecture </Button></a>
        <a href="/source"><Button size="small" variant="contained" color="primary"> source </Button></a>
    </div>
</Fragment>;

const footer = document.getElementById( "footer" );
render( footerJs, footer );
