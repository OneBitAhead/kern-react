import { useEffect, useState } from 'react';

function ToggleDarkModeButton() {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-kern-theme", "light");  
  }, []); 

  const handleToggle = () => {
    setIsToggled((prev) => {
      const newToggled = !prev;
      // Example: Toggle a class on the <html> tag
      document.documentElement.setAttribute("data-kern-theme", newToggled ? "dark" : "light");
      return newToggled;
    });
  };

  return (
    
      <span title="Switch Dark/Light Mode" style={{"cursor":"pointer"}} onClick={handleToggle} className={isToggled ? "kern-icon kern-icon--dark-mode" : "kern-icon kern-icon--light-mode"} aria-hidden="true"></span>
      
  );
}

export default ToggleDarkModeButton;