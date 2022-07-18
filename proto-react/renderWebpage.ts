// import * as http from 'http';

import {tscomponent} from "./component"
import {renderBody} from "./renderBody"
import {renderTitle} from "./renderTitle"

let components : tscomponent[];
let title : renderTitle = new renderTitle();
let body : renderBody = new renderBody();

components.push(title);
components.push(body);

title.setContents('<h1>This page was auto generated!</h1>');
body.setContents('<p>This text was auto generated!</p>');

/*
the web server should be able to collect all of the contents of our components, and then
display them on our site.
*/



