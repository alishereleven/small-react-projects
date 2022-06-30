import React, { useEffect } from 'react';

const Alert = ({ alert, clearAlert }) => {
  const {type, msg} = alert;
  
  useEffect(() => {
    const interval = setInterval(clearAlert, 3000);
    return () => clearInterval(interval);
  }, [alert, clearAlert]);
  
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert;
