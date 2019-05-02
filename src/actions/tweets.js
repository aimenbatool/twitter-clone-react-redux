export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

export const receiveTweets = (tweets) => {
    return {
        type: RECEIVE_TWEETS,
        tweets,
    }
}