const MessageText = ({ children }) => {
  return (
    <div className='message__container'>
      <p className='message__text'>{children}</p>
    </div>
  );
};

export default MessageText;
