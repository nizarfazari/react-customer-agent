/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"; 
 
const AnimatedText = ({ content }) => { 
  const [displayedText, setDisplayedText] = useState(""); 
  const typingSpeed = 50;  
 
  useEffect(() => { 
    let index = 0; 
 
    const typeText = () => { 
      if (index < content.length) { 
        setDisplayedText((prev) => prev + content[index]); 
        setTimeout(() => {
            index++;   
        }, typingSpeed);
        setTimeout(typeText, typingSpeed); 
      } 
    }; 
 
    // Memulai animasi saat `content` berubah 
    if (content) { 
      setDisplayedText(""); // Reset teks sebelumnya 
      typeText(); 
    } 
  }, [content]); // Tambahkan content ke dependency array
 
  return <p className="mt-2">{displayedText}</p>; 
}; 
 
export default AnimatedText;