import React, { Fragment, Component } from "react";
import { render } from "react-dom";
import Button from '@material-ui/core/Button';


const rootJs = <Fragment>
    <div class="description">
       <div class="logo">
           <img width="100px" src="/build/svg/adzuki-logo-static.svg" alt="adzuki-logo-static.svg" />
       </div>
        <h1>ADZUKI</h1>
        <div class="explain">
            <p>Setup and deploy your <span style={{ color: "#000" }}>Single Page Application (= SPA)</span> in less than 1 minute ...</p>
        </div>
    </div>
</Fragment>;

const root = document.getElementById( "root" );
render( rootJs, root );

const footerJs = <Fragment>
    <div class="links">
        <a href="consideration"><Button variant="contained" color="primary"> consideration </Button></a>
        <a href="technologies"><Button variant="contained" color="primary"> technologies </Button></a>
        <a href="tools"><Button variant="contained" color="primary"> tools </Button></a>
        <a href="document"><Button variant="contained" color="primary"> document </Button></a>
        <a href="example"><Button variant="contained" color="primary"> example </Button></a>
        <a href="architecture"><Button variant="contained" color="primary"> architecture </Button></a>
        <a href="source"><Button variant="contained" color="primary"> source </Button></a>
    </div>
</Fragment>;

const footer = document.getElementById( "footer" );
render( footerJs, footer );
