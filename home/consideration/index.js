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

/*class Page extends Component {
    constructor( props ){
        super( props );
        this.state = {
            data: {}
        }
    };
    componentDidMount() {
        fetch('http://adzuki.site/build/react/consideration.json')
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch( error => log( error ));
    }
    render(){
        const { fetch } = this.state.data;
        return <Fragment>
            <Title>{ fetch && this.state.data.title }</Title>
            <hr />
            {
                fetch && this.state.data.sub_title.map((st, index) => {
                    return <SubTitle key={index}>{ st }</SubTitle>
                })
            }
        </Fragment>;
    }
};*/
const root = <Page>
    <Title>consideration</Title>
    <hr />
    <p>here are some considerations surround <Strong color="#c80000">Adzuki</Strong> application.</p>
    
    <SubTitle>Micro Front-end Architecture</SubTitle>
    <p>Micro front-end is a new interesting architecture with which we can separate our UI into different smaller parts that can be developed independently.</p>
    <p>For that we should have different repositories for each micro UI.</p>
    <p>And this means for four mirco UI we will have four separate repositories so that they can be worked on and be deployed independently.</p>
    <p>With <Strong color="#c80000">Adzuki</Strong> we do not have different repositories but we do have separate <strong>index.js</strong> files that each one can be seen as a micro UI.</p>
    <p>For gaining the goal of independent deployment each <strong>index.js</strong> file has been mapped to the exact <strong>path</strong> (= URL) we have in our application.
        Also each path has been mapped to an exact directory name containing all files related to that part.</p>
    <p>This separation helps us to see them (= files) individually and we can deploy them independently.</p>

    
    <SubTitle>Microservice Architecture</SubTitle>
    <p>By using Node.js as the server and <strong>core</strong> of the application, it is possible to run and deploy it independently.</p>
    <p>This feature allows us to quickly setup and deploy our SPA / Service / Microservice.</p>
    <p>Because we do not have to <strong>compile</strong> anything nor have to configure anything. It is an on-demand running application.</p>


    <SubTitle>CI / CD Pipeline and Automation</SubTitle>
    <p>Not considering Continuous Integration, Continuous Deployment, and Continuous Delivery in modern software development specially Web, lead us to slow, inefficient operations.</p>
    <p>By having - even - a simple pipeline we will be able to see the Big Picture of our path and it helps us make it more efficient.</p>
    <p>And who can have pipeline line without <strong>automation</strong>?</p>
    <p><Strong color="#c80000">Adzuki</Strong> not only acts as a server for the back-end part also works as a <strong>utility</strong> to manage files and directories:</p>
    <ul>
        <li>creating</li>
        <li>deleting</li>
        <li>linking (soft-link)</li>
    </ul>
    <p>automatically.</p>
    <p>Therefore initiating a new Page / Micro UI is as simple as:</p>
    <ul>
        <li>type name of the path (URL)</li>
        <li>hit Ctrl+s</li>
    </ul>
    <p>That is it.</p>
</Page>;

const rootHtml = document.getElementById( "root" );
render( root, rootHtml );

const footerJs = <Fragment>
    <div className="links">
        <a href="/"><Button size="small" variant="contained" color="primary"> home </Button></a>
        <Button size="small" variant="contained" color="default"> considerations </Button>
        <a href="/technologies"><Button size="small" variant="contained" color="secondary"> technologies </Button></a>
        <a href="/tools"><Button size="small" variant="contained" color="primary"> tools </Button></a>
        <a href="/document"><Button size="small" variant="contained" color="primary"> document </Button></a>
        <a href="/example"><Button size="small" variant="contained" color="primary"> example </Button></a>
        <a href="/architecture"><Button size="small" variant="contained" color="primary"> architecture </Button></a>
        <a href="/source"><Button size="small" variant="contained" color="primary"> source </Button></a>
    </div>
</Fragment>;

const footer = document.getElementById( "footer" );
render( footerJs, footer );
