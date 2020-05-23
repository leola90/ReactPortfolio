import React from "react";
import { Chart } from "react-google-charts";
import logo from "./profilepic.png"
import {  Grid, Cell } from  "react-mdl";

const Graph = props => (
    <div>
     <Grid className="grid">
        <Cell col={3}>
            <img className="profile-pic" src={logo} alt="pic"></img>
                <h5 className="connection_zone">Connect with me</h5>
                <ul className="connection_navigation-items">
                    <li><a href="https://www.linkedin.com">linkedin</a></li>
                    <li><a href="https://github.com/">Github</a></li>
                </ul>
        </Cell>
        <Cell col={4}>
            <Chart
                className={"graph"}
                width={'900px'}
                height={'400px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                    [
                    'Skills',
                    'Level',
                    { role: 'style' },
                    { sourceColumn: 0,
                    role: 'annotation',
                    type: 'string',
                    calc: 'stringify',
                    },
                ],
                ['HTML/CSS/JavaScript', 80, '#b87333', null],
                ['', 0, '', null],
                ['Framework/React JS/ExpressJS/NodeJS', 75, 'silver', null],
                ['', 0, '', null],
                ['Progressive Web Apps', 60, 'color: #e5e4e2', null],
                ['', 0, '', null],
                ['Relational Databases/NoSQL Databases', 65, 'gold', null],
                ['', 0, '', null],
                ['', 99, 'white', null],
                ]}
                options={{
                    title: 'My Skills',
                    width: "300px",
                    height: "300px",
                    bar: { groupWidth: '90%' },
                    legend: { position: 'none' },
                }}
                // For tests
                rootProps={{ 'data-testid': '6' }}
                />
        </Cell>
        <Cell col={5}></Cell>
    </Grid>
    </div>
);

export default Graph;


