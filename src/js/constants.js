export const FIREBASE_URL = 'https://frontend-workshop.firebaseio.com/zborowski/';
export const PICSUM_URL = "https://picsum.photos/";

export const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (
        max - min + 1
    )) + min;
};