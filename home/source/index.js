import React, { Fragment, Component } from "react";
import { render } from "react-dom";

const rootJs = <Fragment>
    <h1>source</h1>
    <p>This is React.js part; ready to go.</p>
</Fragment>;

const rootHtml = document.getElementById( "root" );
render( rootJs, rootHtml );