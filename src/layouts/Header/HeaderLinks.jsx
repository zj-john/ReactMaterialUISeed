import React from "react";
import {Manager, Target, Popper} from "react-popper";
import {withStyles} from "@material-ui/core/styles";
import {
    MenuItem,
    Button,
    Input,
    FormControl,
    Typography,
    InputAdornment,
    IconButton,
    MenuList,
    Grow,
    Paper,
    ClickAwayListener
} from "@material-ui/core";

import {Person, Notifications, Search} from "@material-ui/icons";
import {withUser} from 'UserContext.js';
import HeaderLinksStyle from "./HeaderLinksStyle";

class HeaderLinks extends React.Component {
    state = {
        open: false
    };
    handleClick = () => {
        this.setState({
            open: !this.state.open
        });
    };

    handleClose = () => {
        this.setState({open: false});
    };
    render() {
        const {classes, LoginUser} = this.props;
        const {open} = this.state;
        return (
            <div className={classes.container}>
                <div className={classes.left}>
                    <Typography variant="title" color="inherit" noWrap>
                        React Material-UI Seed
                    </Typography>
                </div>
                <div className={classes.right}>
                    <div>
                        <FormControl>
                            <Input id="adornment-search" classes={{
                                underline: classes.cssUnderline
                            }} placeholder={'Search'} type={'text'} endAdornment={< InputAdornment position = "end" > <IconButton aria-label="Search" className={classes.buttonWhite} onClick={() => {}} onMouseDown={() => {}}>
                                <Search/>
                            </IconButton> < /InputAdornment>}/>
                        </FormControl>
                    </div>
                    <Manager>
                        <Target>
                            <Button aria-haspopup="true" onClick={this.handleClick} className={classes.buttonWhite}>
                                <Notifications className={classes.icons}/>
                                <span className={classes.notifications}>2</span>
                            </Button>
                        </Target>
                        <Popper placement="bottom-start" eventsEnabled={open}>
                            <ClickAwayListener onClickAway={this.handleClose}>
                                <Grow in={open} id="menu-list" style={{
                                    transformOrigin: "0 0 0"
                                }}>
                                    <Paper className={classes.dropdown}>
                                        <MenuList role="menu">
                                            <MenuItem onClick={this.handleClose} className={classes.dropdownItem}>
                                                One Notification
                                            </MenuItem>
                                            <MenuItem onClick={this.handleClose} className={classes.dropdownItem}>
                                                Another One
                                            </MenuItem>
                                        </MenuList>
                                    </Paper>
                                </Grow>
                            </ClickAwayListener>
                        </Popper>
                    </Manager>
                    <Button aria-label="Person" className={classes.buttonWhite}>
                        <Person className={classes.icons}/>
                        <p className={classes.linkText}>{LoginUser.displayName}</p>
                    </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(HeaderLinksStyle)(withUser(HeaderLinks));
