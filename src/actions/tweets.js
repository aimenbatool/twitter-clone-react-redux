import { saveLikeToggle } from '../utils/api';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_TWEET = 'TOGGLE_Tweet';

export const receiveTweets = (tweets) => {
    return {
        type: RECEIVE_TWEETS,
        tweets,
    }
}

export const toggleTweet = ({ id, authedUser, hasLiked }) => {
    return {
        type: TOGGLE_TWEET,
        id,
        authedUser,
        hasLiked,
    }
}

export const handleToggleTweet = (info) => {
    return (dispatch) => {
        dispatch(toggleTweet(info));

        return saveLikeToggle(info)
            .catch((e) => {
                console.warn('Error in handleToggleTweet: ', e);
                dispatch(toggleTweet(info));
                alert('There was an error liking the tweet. Try again.')
            })
    }
}