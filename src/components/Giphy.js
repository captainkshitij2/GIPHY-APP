import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import Search from "../images/Search.png" ; 

const Gifs = () => {
  const [lad, setLad] = useState([]);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  //--for finding lastindiex
  const indexOfLastItem = currentPage * itemsPerPage;

  //-- for the first item
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = lad.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const Kaptan = async () => {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "VeOEx0CEKeyYaMugklzs09duRus8NW9Z",
        },
      });
      console.log(results.data.data);
      setLad(results.data.data);
    };
    Kaptan();
  }, []);

  const handleSearch = async () => {
    const results = await axios("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: "VeOEx0CEKeyYaMugklzs09duRus8NW9Z",
        q: search,
      },
    });
    setLad(results.data.data);
  };

  const pageSelected = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>

      


     <img style= {{marginTop: '10px', marginLeft: '-1200px' , height:'200px',width:'150px'}} src={'https://media.giphy.com/media/1n9xKwR6fKqI0X7t9I/giphy.gif'} 
     height= '50' width= '50'alt="" />
                <span><h1 className="giphy" style={{marginTop:'-150px'}}><b>GIPHY</b></h1></span><br />
                <input style = {{width:'800px'}} type="text" placeholder="Search all the GIF's" value= {search} onChange= {(e) => setSearch(e.target.value)} />
                
                
                <span><img style= {{backgroundColor: '', display: 'inline-block', marginTop: '-7px' , marginLeft:'30px'}} onClick= {() => handleSearch()} src= {Search} height= '40' width= '40'alt="" /></span><br /><br />

               
               
               
                <h6 style= {{color: 'white', fontSize:'40px'}}>Trending GIF's</h6>

               

      <div>
        {currentItems.map((item, index) => {
          return (
            <img
              style={{ margin: "20px", height: "180px" }}
              key={index}
              src={item.images.fixed_height_small.url}
              alt=""
            />
          );
        })}
      </div>
      


          
      <div className="container-active">
        <Pagination style={{height:'100px' ,marginLeft:'200px'}}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={lad.length}
          pageSelected={pageSelected}
        />
      </div>
      
    </div>
  );
};
// export default Dashboard;
export default Gifs;
