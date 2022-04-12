import React, {useState} from "react" ;
import {useNavigate} from "react-router-dom";
import '../App.css';
import { useAuth0 } from "@auth0/auth0-react";

export default function CreatePost ({createPost}) {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState(" ");
    const [images, setImages] = useState([]);
    //const [imageURLs, setImageURLs] = useState([]);
    const options = { 
        month: 'long', 
        day: '2-digit',
        year: 'numeric', 
      };
    const date =  new Date().toLocaleDateString('en-US', options);
 
    const navigate = useNavigate();
    /*
    useEffect(() => {
        if(images.length < 1) return;
        const newImageURLs = [];
        images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
        console.log(newImageURLs);
        setImageURLs(newImageURLs);
    }, [images]
    );
    function onImageChange(e) {
        setImages([...e.target.files]);
    }*/
        
    function onImageChange(e) {
        const reader = new FileReader();
      
        reader.addEventListener("load", function () {
          // convert image file to base64 string
        setImages([reader.result]);

        }, false);
      
        for (const index in e.target.files) {
            reader.readAsDataURL(e.target.files[index]);
      }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(title == " " || description == " " || images == null){
            alert("Enter all the details!");
            return;
        }
        createPost({title, description, images, date})
        setTitle('');
        setDescription('');
        setImages('');
        navigate('/');
    };
    return (
    <>
    <h1>Create a Blog</h1>
    <form className = "create-post-form" onSubmit = {onSubmit}>
        <div className="form-control">
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} required/>
        </div>
        <div className="form-control">
            <label>Description</label>
            <textarea type="text" value={description} onChange={(e) => {setDescription(e.target.value)}} required/>
        </div>
        <div className="form-control">
            <label>Image</label>
            <input type="file" accept="image/*" onChange={onImageChange} required/>
        </div>
        <input type="submit" value="Submit"/>
    </form>
    </>
)}