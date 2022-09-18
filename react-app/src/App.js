import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import Image from './components/Image.js';


function App() {

  const [images, setImages] = useState([])
  const [imageUrls, setImageUrls] = useState([])
  const [page, setPage] = useState("HTN")
  
  function onImageChange(e) {
    setImages([...images, ...e.target.files])
  }

  useEffect(() => {
    if (images.length < 1)return; //don't run when the array is empty
    const newImageUrls = [];
    images.forEach(image => {
      newImageUrls.push(URL.createObjectURL(image))
      console.log(URL.createObjectURL(image))
    });
    setImageUrls(newImageUrls)
  }, [images])

  return (
    <div className="App">
      <div className = "Header">
        <button className = "Button">
          <h1>Hack the North</h1>
        </button>
      </div>
      <div className = "Body">
        <div className = "Left">

          <div className='Title'>
            Hack The North 2022: Branding
          </div>

          <div className = "Elements">

            


                <div className = "Col">
                  
                  <div className = "File">
                    <input className = "Upload" type="file" multiple accept="image/*" onChange={onImageChange} />
                  </div>

                  {imageUrls.map((imageSrc, index) => 
                    {return(
                      
                      (index % 4) === 0 && <Image src = {imageSrc} key = {index} />
                    
                    )
                    }
                  )}

                </div>
                <div className = "Col">
                  {imageUrls.map((imageSrc, index) => 
                      {return(
                        
                        (index % 4) === 1 && <Image src = {imageSrc} key = {index} />
                      
                      )
                      }
                  )}
                </div>
                <div className = "Col">
                  {imageUrls.map((imageSrc, index) => 
                      {return(
                        
                        (index % 4) === 2 && <Image src = {imageSrc} key = {index} />
                      
                      )
                      }
                  )}
                </div>
                <div className = "Col">
                  {imageUrls.map((imageSrc, index) => 
                      {return(
                        
                        (index % 4) === 3 && <Image src = {imageSrc} key = {index} />
                      
                      )
                      }
                  )}  
                </div>


              
              
          </div>


        </div>

        <div className = "Right">
          

          <div>All</div>
          <div>Image</div>
          <div>Video</div>
          <div>Audio</div>
          <div>Link</div>
          <div>Text</div>

        </div>
      </div>
      
    </div>
  );
}

export default App;
