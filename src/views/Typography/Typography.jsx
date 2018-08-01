import React from "react";
// @material-ui/core components
import {withStyles} from "@material-ui/core/styles";

import Quote from "components/Quote/Quote.jsx";
import TypographyStyle from "./TypographyStyle.jsx"

function TypographyPage(props) {
    const {classes} = props;
    return (
        <div>
            <div className={classes.typo}>
                <div className={classes.note}>Header 1</div>
                <h1>The Life of Material Dashboard</h1>
            </div>
            <div className={classes.typo}>
                <div className={classes.note}>Header 2</div>
                <h2>The Life of Material Dashboard</h2>
            </div>
            <div className={classes.typo}>
                <div className={classes.note}>Header 3</div>
                <h3>The Life of Material Dashboard</h3>
            </div>
            <div className={classes.typo}>
                <div className={classes.note}>Header 4</div>
                <h4>The Life of Material Dashboard</h4>
            </div>
            <div className={classes.typo}>
                <div className={classes.note}>Header 5</div>
                <h5>The Life of Material Dashboard</h5>
            </div>
            <div className={classes.typo}>
                <div className={classes.note}>Header 6</div>
                <h6>The Life of Material Dashboard</h6>
            </div>
            <div className={classes.typo}>
                <div className={classes.note}>Paragraph</div>
                <p>
                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.
                </p>
            </div>
            <div className={classes.typo}>
                <div className={classes.note}>Quote</div>
                <Quote text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at." author=" Kanye West, Musician"/>
            </div>
            <div className={classes.typo}>
                <div className={classes.note}>Small Tag</div>
                <h2>
                    Header with small subtitle<br/>
                    <small>Use "Small" tag for the headers</small>
                </h2>
            </div>
        </div>
    );
}

export default withStyles(TypographyStyle)(TypographyPage);
