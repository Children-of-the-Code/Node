/* React is often used to build what is called a single page application (SPA)

if you visit a site like facebook (which is the company that developed react)
and you 'switch' between pages
you actually never switch pages! you are always on the same page!
it's all an illusion..
you switch pages only in the sense that components on the page get swapped out for other components

why do we do this
this leads to a website that feels much more response to the user
eg older websites on slow internet connections would swap to a white page before the page contents load when you
are click a link to another portion of the website
we're used to this obviously but it's not ideal

instead, react can pre-load all components of the site, which leads to a slow initial load of the site,
but the rest will be super fast!

the way we will be swapping entire pages is known as 'routing'
*/

// HAD TO NPM INSTALL REACT-ROUTER-DOM
import {Link} from 'react-router-dom';
import * as React from 'react';

export class Navbar extends React.Component {
    render(){
        return(
            <div>
                <Link to="/AddArtist">add artist </Link>
                <Link to="/AddPainting">add painting </Link>
                <Link to="/ArtistList">see all artists </Link>
            </div>
        )
    }
}