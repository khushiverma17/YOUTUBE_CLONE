// export const API_KEY='AIzaSyDP9Y7wXmY9y_dJk_avE4_Yi4G3UK9B4a4';

export const API_KEY = 'AIzaSyC4rVBpSx-dfYxagAAilKWczTMnsitZHO8';


export const valueConvertor = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000) + "M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000) + "K";
    }
    else
    {
        return value;
    }
}
 
