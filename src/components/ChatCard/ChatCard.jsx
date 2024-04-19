import React, { useContext, useState } from 'react';
//styles
import "./ChatCard.css";
//assets
import likeIcon from "../../assets/likeBlack.svg";
import dislikeIcon from "../../assets/dislikeBlack.svg";
//contexts
import { ThemeContext } from '../../AllContexts';
//MUI
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';



function RatingSize() {
  return (
    <Stack spacing={1}>
      <Rating name="size-small" defaultValue={2} size="small" />
      <Rating name="size-medium" defaultValue={2} />
      <Rating name="size-large" defaultValue={2} size="large" />
    </Stack>
  );
}
const Thumbs = ({likeDislikeReply, id}) => {
    return (
        <span className='thumbsWraper'>
            <img src={likeIcon} alt='like button' onClick={()=>likeDislikeReply(id,"like")}/>
            <img src={dislikeIcon} alt='dislike button' onClick={()=>likeDislikeReply(id,"dislike")}/>
        </span>
    )
}

const ChatCard = props => {
    //props
    const { name, message, time, icon, customClass, likeDislikeReply, id } = props;
    //states
    const [rate, setRate] = useState({});
    // ..contexts
    const [theme, setTheme] = useContext(ThemeContext);
    return (
        <div className={`ChatCard ChatCardTheme-${theme} ${customClass}`}>
            <span className='chatCardImage-wrapper'>
                <img src={icon} alt={`${name} icon`} className='chatCardImage'/>
            </span>
            <span className='chatCardTexts'>
                <span className='chatCardName'>{name}</span>
                <span className='chatCardMessage'>{message}</span>
                <span className='chatCardTime'>
                    <span> {time} </span>
                    {name==="bot ai" ? <Thumbs likeDislikeReply={likeDislikeReply} id={id}/> : null}
                </span>
            </span>
        </div>
    );
};

export default ChatCard;