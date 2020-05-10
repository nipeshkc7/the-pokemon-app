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
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import DoneIcon from '@material-ui/icons/DoneOutlined'


const chooseMoves = ({ }) => {
    const pokemonTypes = [
        {
            value: 'Normal',
            label: 'Normal',
        },
        {
            value: 'Fighting',
            label: 'Fighting',
        },
        {
            value: 'Ghost',
            label: 'Ghost',
        },
        {
            value: 'Dark',
            label: 'Dark',
        },
    ];

    const handleChange = (event) => {
        // setCurrency(event.target.value);
    };

    return (
        <Paper className="Action-box" elevation={1}>
            <Typography variant="h5" gutterBottom>
                <b>✨ SELECT MOVES ✨</b>
            </Typography>
            <hr />
            <form noValidate autoComplete="off" className="Main-form">
                <br/>
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
                        // ..TODO
                    }}>
                    Done !
                 </Button>
            </form>
        </Paper>
    )
}

export default chooseMoves;