import React from 'react';
import { useResolvedPath, useMatch, Link } from 'react-router-dom';

function CustomLink({ children, to, }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div className='text-center'>
            <Link
                className= ' md:pb-2 ml-[-28px] border-b-2  pl-2 pr-2'
                style={{ borderBottom: match && "2px solid #ff7518",  color: match && '#ff7518'}}
                to={to}
            >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;