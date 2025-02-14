
import './App.css';

export default function Categories({categories,setcatname}) {  

  return (
    <div>
      {categories.map((v, index) => (
        <li 
          key={index} 
          onClick={()=>setcatname(v)}
          style={{ 
            backgroundColor: "silver", 
            marginBottom: "20px", 
            listStyle: "none", 
            fontSize: "25px", 
            color: "black", 
            borderBottom: "2px brown solid", 
            cursor: "pointer"
          }}
        >
          {v}
        </li>
      ))}
    </div>
  );
}
