import React,{useState} from 'react'
import TextEditor from './texteditor'
import axios from 'axios';
import Loginnavbar from './loginnavbar';
import Pay from './Pay';
function RichEditor() {

    const [value, setValue] = useState("");
    const getValue = (value) => {
      setValue(value);
    };

    const handleSubmit = async() => {
      // store the states in the form data
      const articleData = new FormData();
      articleData.append("article", value)
   
    
      try {
        // make axios post request
        const response = await axios({
          method: "post",
          url: "",
          data: {title: "From frontend ", text: "Hello world"},
          headers: { "Content-Type": "multipart/form-data", "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE2NzU3NzUyNjR9.h8_zrVuY-1jJW0-OKrkHfFdZl5-mwbv2Z-SoYXB3om4" },
        });
        console.log("REquest sent")
      } catch(error) {
        console.log(error)
      }
    }

  return (
    <><Loginnavbar/>
    <h1 class="self-center text-xl font-semibold whitespace-nowrap dark:text-black">...Kindly Add Your Article</h1>
      <TextEditor initialValue="" getValue={getValue} /><br/>
      <a class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-primary-600 hover:bg-gray-100 text-sm text-gray-100 font-bold  rounded-xl transition duration-200" href="#" method="post" onClick={handleSubmit}>Submit</a>
        <br />
        <br />
        <div>{value}</div>
        <Pay/>
    </>
  )
}

export default RichEditor