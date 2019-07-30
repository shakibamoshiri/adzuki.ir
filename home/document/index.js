import React, { Fragment, Component } from "react";
import { render } from "react-dom";
import Button from '@material-ui/core/Button';
const log = console.log;

const Prism = ( props ) => {
    return <pre><code className={ `language-${props.language || "javascript" }` }>{ props.children }</code></pre>;
}
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
    <Title>document</Title>
    <hr />
    <p>Here is a quick start.</p>

    <SubTitle>1. Clone the application</SubTitle>
    <p>First <strong>clone</strong> the application and give it a name to save file there.</p>
    <Prism>{`git clone https://github.com/k-five/adzuki name-of-project`}</Prism>

    <SubTitle>2. Install dependencies</SubTitle>
    <p>Then <strong>cd</strong> to the directory and run:</p>
    <Prism>{`cd $_ && npm install`}</Prism>

    <SubTitle>3. First run</SubTitle>
    <p>The first run will create all the directories and files</p>
    <Prism>{`./node-dev adzuki.js`}</Prism>
    <p>Close it by hitting <strong>Ctrl-c</strong></p>

    <SubTitle>4. Build JSX files</SubTitle>
    <p>Then run <strong>webpack</strong> so all <strong>index.js</strong> files be build by webpack.</p>
    <Prism>{`npm run webpack`}</Prism>

    <SubTitle>5. Run, second time</SubTitle>
    <p>finally with the second run:</p>
    <Prism>{`./node-dev adzuki.js`}</Prism>
    <p>you can view it at:</p>
    <Prism>{`localhost:1400`}</Prism>
    <p>This is it!</p>
    <p>Edit <strong>index.html</strong> or <strong>index.js</strong> on each <strong>path</strong> (= directory) and reload your browser.</p>

    <SubTitle>Complete Guide</SubTitle>
    <p>It will be added soon.</p>

    <SubTitle></SubTitle>
</Page>;

const rootHtml = document.getElementById( "root" );
render( root, rootHtml );

const footerJs = <Fragment>
    <div className="links">
        <a href="/"><Button size="small" variant="contained" color="primary"> home </Button></a>
        <a href="/consideration"><Button size="small" variant="contained" color="primary"> consideration </Button></a>
        <a href="/technologies"><Button size="small" variant="contained" color="primary"> technologies </Button></a>
        <a href="/tools"><Button size="small" variant="contained" color="primary"> tools </Button></a>
        <Button size="small" variant="contained" color="default"> document </Button>
        <a href="/example"><Button size="small" variant="contained" color="secondary"> example </Button></a>
        <a href="/architecture"><Button size="small" variant="contained" color="primary"> architecture </Button></a>
        <a href="/source"><Button size="small" variant="contained" color="primary"> source </Button></a>
    </div>
</Fragment>;

const footer = document.getElementById( "footer" );
render( footerJs, footer );
