import React from "react";
import './footer.css';
//import 'https://kit.fontawesome.com/8b96a632fe.js';

export default function footer() {
    return(
        <footer>
            <span className="text">Created by: M.Abdullah Zeeshan</span>
            <a href="https://github.com/Muhammad-Abdullah-Zeeshan/Todo-List-React">
                <i className="fab fa-github"></i>
            </a>
        </footer>
    );
}