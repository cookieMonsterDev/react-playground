import { useState, useEffect, useRef } from 'react';
import './style.scss';

interface NotificationProps {
  type?: 'Message:' | 'Warrning:' | 'Error:';
  text: { message: string };
}

const Notification = ({ type = 'Message:', text }: NotificationProps) => {
  const [show, setShow] = useState(false);
  const ref = useRef(true)

  useEffect(() => {
    if(ref.current) {
      ref.current = false;
      console.log('not all')
      return
    }
    
    console.log('all')
    setShow(true);
    const timeout = setTimeout(() => setShow(false), 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [text]);

  return (
    <>
      <span className={show ? 'notification' : 'notification display'}>
        <label>{type}</label>
        <label>{text.message}</label>
      </span>
      <button onClick={() => setShow((prev) => !prev)}>Test</button>
    </>
  );
};

export default Notification;
