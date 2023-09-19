import React from 'react';

const ChatDate = (props) =>{
  return(
    <span
  style={{
  color: 'var(--dl-color-default-deepmaroon)',
  height: 'auto',
  textAlign: 'center',
  lineHeight: '22px',
  alignSelf: 'stretch',
  fontFamily: 'Rubik',
  fontSize: 14,
  fontStretch: 'normal',
  fontStyle: 'Regular',
  fontWeight: 400,
  textDecoration: 'none',
}}
>
<span>{props.text}</span>
</span>
  )
} 

export default ChatDate; 


