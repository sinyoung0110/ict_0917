import React from 'react';

const AIChat = (props) => {
  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '10px',
      padding: '8px 16px',
      alignSelf: 'stretch'
    }}
  >
    <div
      style={{
        backgroundColor: '#FEF3B1',
        width: '344px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px',
        padding: '8px 16px',
        flexShrink: '0',
        borderRadius: '4px',
      }}
    >
      <span
        style={{
          color: 'var(--dl-color-grey-800)',
          height: 'auto',
          textAlign: 'left',
          lineHeight: '22px',
          flexGrow: 1,
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
    </div>
  </div>
  );
};

export default AIChat;
