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

const json = `{
    "home": {
        "consideration": "",
        "technologies": "",
        "tools": "",
        "document": "",
        "features": "",
        "architecture": "",
        "source": ""
    }
}`;

const links = `...
...
    <base href="/features/">
    <title>features</title>
    <link rel="stylesheet" href="/build/css/features/features.css">
</head>
<body>
     <div id="root" class="main">
        <div class="loading"></div>
     </div>
     <script defer type="application/javascript" src="/build/react/features.bundle.js"></script>
</body>
</html>`;

const root = <Page>
    <Title>features</Title>
    <hr />
    <SubTitle>Auto file and directory management</SubTitle>
    <p>There is no need to create or delete files and directories manually. It is done automatically</p>

    <SubTitle>Auto route management</SubTitle>
    <p>There is no need to think about <strong>routing</strong> and back-end side.</p>
    <p>The only thing you need is just editing a simple JSON file.</p>
    <Prism>{ json }</Prism>

    <SubTitle>Auto CSS and JS links management</SubTitle>
    <p>User does not have to add &lt;link&gt; or &lt;script&gt; for CSS or JS files manually. It is added when the files and directories are created automatically.</p>
    <ul>
        <li>base URL of a page</li>
        <li>title of a page</li>
        <li>main css file of a page</li>
        <li>main js file of a page</li>
    </ul>
    <Prism language="html">{ links }</Prism>

    <SubTitle>Light weight</SubTitle>
    <p>Less than <strong>500</strong> lines of code.</p>
    <p>Every JavaScript developer can customize it!</p>

    <SubTitle>Unlimited nesting posts</SubTitle>
    <p>There is no limitations for adding nested page. As many as a user wants, is possible.</p>

    <SubTitle>As a microservice</SubTitle>
    <p>Since the server is part of the application - using <strong>Reverse Proxy</strong> - we can easily have several <Strong color="#c80000">Adzuki</Strong> applications running; each one doing a specific task / responsibility.</p>
    <p>For more see <a target="_blank" href="http://nodepost.ir">NodePost</a>.</p>
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
        <Button size="small" variant="contained" color="default"> features </Button>
        <a href="/architecture"><Button size="small" variant="contained" color="secondary"> architecture </Button></a>
        <a href="/source"><Button size="small" variant="contained" color="primary"> source </Button></a>
    </div>
</Fragment>;

const footer = document.getElementById( "footer" );
render( footerJs, footer );
