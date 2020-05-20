import * as React from "react";
import { Chart } from "react-google-charts";
import {  Grid, Cell } from  "react-mdl";

function Home() {
    return(
        <div>
            <Grid className="grid">
                <Cell col={2}></Cell>
                <Cell col={4}>
        <       Chart
                width={'900px'}
                height={'500px'}
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
        <Cell col={6}></Cell>
    </Grid>
            
        </div>
    )
};

export default Home;