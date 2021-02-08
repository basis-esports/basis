import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {generatePath} from 'react-router-dom';
import theme from 'theme';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';

import * as Routes from 'routes';
import Follow from "../../components/Follow";

/**
 * Card component for rendering user info, meant to be used in Peoples page
 */
const PeopleCard = ({ user }) => {
  const [color, setColor] = useState('');

  const { fullName, username, image, coverImage, followers, following } = user;
  const followersCount = followers.length;
  const followingCount = following.length;

  useEffect(() => {
    const { primary, secondary, success, error } = theme.colors;
    const colors = [primary.main, secondary.main, success, error.main];
    const randomColor = Math.floor(Math.random() * colors.length);
    setColor(colors[randomColor]);
  }, []);

  const splitFullName = () => {
    // If a fullName contains more word than two, take first two word
    const splitWords = fullName.split(' ').slice(0, 2).join(' ');

    // Take only first letters from split words
    return splitWords
      .split(' ')
      .map((a) => a.charAt(0))
      .join(' ');
  };

  // some custom styling for the material components
  const useStyles = makeStyles((theme) => ({
      root: {
        maxWidth: 345,
        height: 400
      },
      media: {
        height: 100,
        width: 'auto',
      },
      avatar: {
        // top margin of negative (half the height/width) so it goes over the cover
        margin: `-${theme.spacing(6)}px auto 0 auto`,
        width: theme.spacing(12),
        height: theme.spacing(12),
        // these 2 props are for fallback avatar
        color: theme.palette.getContrastText(grey[500]),
        backgroundColor: grey[500],
      },
    })
  );

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {coverImage ?
        <CardMedia
          className={classes.media}
          image={coverImage}
          title="User Profile" />
        :
        <Avatar alt={fullName} src={image} variant="square" className={classes.media} />
      }
      <Avatar alt={fullName} src={image} className={classes.avatar} >
        {/* Fallback to Initial Letters*/}
        {!image && splitFullName()}
      </Avatar>
      <CardContent>
        <Box mt={1} mb={3}>
          <Typography variant="h6" component="h6" align="center">
            {fullName}
          </Typography>
        </Box>
        <Box component="div" display="flex" alignItems="center" justifyContent="space-between">
          <Box component="div">
            <Typography variant="subtitle1" color="primary" component="div" align="center">
              <Box fontWeight="fontWeightBold">
                {followersCount}
              </Box>
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              Followers
            </Typography>
          </Box>
          <Box component="div">
            <Typography variant="subtitle1" color="primary" component="div" align="center">
              <Box fontWeight="fontWeightBold">
                {followingCount}
              </Box>
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              Following
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          disableElevation
          variant="contained"
          component={RouterLink}
          color="primary"
          to={generatePath(Routes.USER_PROFILE, { username })}>
          View
        </Button>
        <Follow user={user} />
      </CardActions>
      <Box mt={2} mb={2}>
        <Typography variant="body2" color="textSecondary" component="p">
          {/* TODO Add bio here, need to create a field called bio in the database. Or not, whatever */}
          {/* e.g. {fullName} is a great gamer that NEVER feeds.*/}
        </Typography>
      </Box>
    </Card>
  );
};

PeopleCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default PeopleCard;
