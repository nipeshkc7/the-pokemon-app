import React from 'react';
import '../style/App.css';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grow from '@material-ui/core/Grow';
import DoneIcon from '@material-ui/icons/DoneOutlined'
import { useSelector, useDispatch } from 'react-redux'
import * as allActions from '../actions'

const ChooseMoves = () => {

    const appState = useSelector(state => state.AppStatus);
    const dispatch = useDispatch();
    let elevation = appState === 'PICKING_MOVES' ? 4 : 0;

    return (
        <Grow in={true}>
            <Paper className="Action-box" elevation={elevation}>
                <Typography variant="h5" gutterBottom>
                    <b><span role="img" aria-label="emoji">✨</span> SELECT MOVES <span role="img" aria-label="emoji">✨</span></b>
                </Typography>
                <hr />
                <form noValidate autoComplete="off" className="Main-form">
                    <br />
                    <div className="theNinetyPercent">
                        <TextField id="standard-basic" label="Enter Move Name" />
                        <br />
                        <br />
                OR,
                <br />
                        <br />
                        <Button variant="contained" color="secondary"
                            className="Train-action">
                            Get Random Moves
                </Button>
                        <div>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <DoneIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Move 1" secondary="No Type" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <DoneIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Move 2" secondary="No Type" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <DoneIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Move 3" secondary="No Type" />
                                </ListItem>
                            </List>
                        </div>
                    </div>
                    <Button variant="contained" color="primary" className="End-action-button"
                        onClick={() => {
                            dispatch(allActions.trainPokemon());
                        }}>
                        Done !
                 </Button>
                </form>
            </Paper>
        </Grow>
    )
}

export default ChooseMoves;