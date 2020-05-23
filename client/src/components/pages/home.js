import * as React from "react";
import "./pages.css";
import Graph from "../Grid/grid";

function Home() {
    return(
        <div>
            <h3>About Me</h3>
            <p className="summary"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus in ipsum iaculis ullamcorper. Duis ut lobortis lacus. Duis dictum eget leo eu dignissim. 
                Vestibulum aliquet velit et lectus iaculis, sodales ullamcorper mauris congue. Curabitur ut orci magna. Nulla bibendum leo tellus, at eleifend tortor cursus eget. 
                Praesent cursus turpis est, eu gravida sem auctor eget. Morbi in nibh eleifend, commodo mi et, tincidunt ipsum. Ut vel elit faucibus, aliquam nisl non, aliquet ligula. 
                Cras pulvinar hendrerit arcu non viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam ex sapien, lacinia ut erat at, fringilla eleifend mi. 
                Ut nulla velit, sollicitudin id urna eget, egestas malesuada eros. Phasellus interdum dui nec nisi pellentesque, et vestibulum orci eleifend. Vivamus vitae dui quis 
                elit finibus tincidunt. Nunc hendrerit purus risus, sit amet viverra mauris commodo vel. Donec auctor ac odio id pharetra. Donec augue dolor, convallis vel odio ac, 
                tristique faucibus est. Donec laoreet vulputate diam, in varius odio varius vel. Curabitur hendrerit malesuada commodo. Vestibulum massa est, consequat in eleifend lacinia, 
                consectetur eget ipsum. Suspendisse suscipit elementum purus luctus ornare. Ut a felis magna. Nullam nec haretra tortor. Quisque vehicula velit nisl, at vulputate elit maximus a. 
                Duis a hendrerit urna, non volutpat lacus. Donec eget semper ipsum. Aliquam erat volutpat. Sed convallis vehicula dolor, ut ultricies quam porta ac. Ut auctor malesuada sagittis.
                 Maecenas quis est quam.
            </p>
            <div className="container">
                <Graph  />
            </div>
            <p style={{ textAlign: "center"}}>Copyright &copy; 2020</p>
        </div>
    )
};

export default Home;


