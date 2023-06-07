import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
    return <div className="count-box">
        <ul>
            <li><Link to="/counter-with-reducer">Counter with reducer</Link></li>
            <li><Link to="/counter-with-context">Counter with react context</Link></li>
            <li><Link to="/ui-sample">UI Demo</Link></li>
        </ul>
    </div>
};

export default HomePage