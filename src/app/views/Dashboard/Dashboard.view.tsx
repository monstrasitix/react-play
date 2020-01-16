// Core
import * as React from 'react';


export interface IDashboardProps { };


const items = new Array(10).fill(0).map((_, index) => ({
    id: index += 1,
}));


const Dashboard: React.FC<IDashboardProps> = () => (
    <div className="section">
        <div className="container">
            <div className="columns is-multiline">
                {items.map(item => (
                    <div key={item.id} className="column is-one-third">
                        <div className="card">
                            <div className="card-content">Content</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


Dashboard.propTypes = {};
Dashboard.defaultProps = {};


export default Dashboard;