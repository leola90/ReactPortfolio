import React from "react";
import { Card, CardTitle, CardText, CardActions, Button, IconButton, CardMenu, Grid, Cell } from  "react-mdl";



function Projects() {
   return(
        <div>
            <h1 style={{ textAlign: "center"}}>Projects</h1>
            <Grid className="grid-1">
                <Cell col={4}>
                    <Card shadow={1} >
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Password Generator</CardTitle>
                            <CardText>
                              Random password is an application that generates a random password based on user-selected criteria. 
                              This app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code.
                            </CardText>
                        <CardActions border>
                            <Button colored>Link</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </Cell>
                <Cell col={4}>
                    <Card shadow={0}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Weather App</CardTitle>
                            <CardText>
                              Weather app utilizes openWeather API to retrieve weather data for cities. Get information about your local weather here.
                            </CardText>
                        <CardActions border>
                            <Button colored>Link</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </Cell>
                <Cell col={4}>
                    <Card shadow={0} >
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Note Taker App</CardTitle>
                            <CardText>
                            Notetaker is an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.
                            </CardText>
                        <CardActions border>
                            <Button colored>Link</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </Cell>
            </Grid>
            <Grid className="grid-2">
                <Cell col={4}>
                    <Card shadow={0} >
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Burger App</CardTitle>
                            <CardText>
                            A Burger app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, it will display the burger on the page.
                            Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.
                            </CardText>
                        <CardActions border>
                            <Button colored>Link</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </Cell>
                <Cell col={4}>
                    <Card shadow={0}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Event Spite</CardTitle>
                            <CardText>
                            Event Spite brings the power of searching for events that are happening near you. See what is going on in your area tonight!
                            </CardText>
                        <CardActions border>
                            <Button colored>Link</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </Cell>
                <Cell col={4}>
                    <Card shadow={0} >
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>BookMart</CardTitle>
                            <CardText>
                            BookMart is a site that allows you to search for your favorite books and engage in live chats about any books related discussion. If you sign up, you will have the ability to participate in live chats with other fellow bookworms, as well as adding books to your wishlist.
                            </CardText>
                        <CardActions border>
                            <Button colored>Link</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </Cell>
            </Grid>
        
            
            {/* <Card shadow={0} style={{width: '512px', margin: 'auto'}}> */}
        
            
        </div>
    )
}

export default Projects;