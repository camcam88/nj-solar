import React, { useState, useEffect } from 'react';

import LinkList from '../nav/LinkList'

export default function Footer(){
    return(
        <footer className="border-t border-t-slate-900 flex justify-center w-screen py-2">
            <LinkList/>
        </footer>
    )
}