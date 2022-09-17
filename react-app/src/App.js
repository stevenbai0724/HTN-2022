import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";


function App() {

  const [images, setImages] = useState([])
  const [imageUrls, setImageUrls] = useState([])
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

      </div>
      <div className = "Body">
        <div className = "Left">

          <div className='Title'>
            Hack The North 2022: Branding
          </div>


          



          <div className = "Elements">

            


                <div className = "Col">
                  <div style = {{width: "90%", borderWidth: "2px", borderStyle: "solid", height: "50px"}}>
                    <input type="file" multiple accept="image/*" onChange={onImageChange} />
                  </div>

                  {imageUrls.map((imageSrc, index) => 
                    {return(
                      
                      (index % 4) === 0 && <img style = {{marginBottom: "15px", width: "90%"}} key = {index} src = {imageSrc}></img>
                    
                    )
                    }
                  )}

                </div>
                <div className = "Col">
                  {imageUrls.map((imageSrc, index) => 
                      {return(
                        
                        (index % 4) === 1 && <img style = {{marginBottom: "15px", width: "90%"}} key = {index} src = {imageSrc}></img>
                      
                      )
                      }
                  )}
                </div>
                <div className = "Col">
                  {imageUrls.map((imageSrc, index) => 
                      {return(
                        
                        (index % 4) === 2 && <img style = {{marginBottom: "15px", width: "90%"}} key = {index} src = {imageSrc}></img>
                      
                      )
                      }
                  )}
                </div>
                <div className = "Col">
                  {imageUrls.map((imageSrc, index) => 
                      {return(
                        
                        (index % 4) === 3 && <img style = {{marginBottom: "15px", width: "90%"}} key = {index} src = {imageSrc}></img>
                      
                      )
                      }
                  )}  
                </div>


              
              
          </div>


        </div>

        <div className = "Right">
          side bar
        </div>
      </div>
      
    </div>
  );
}

export default App;
