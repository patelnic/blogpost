import React, {useState, useEffect} from "react" ;
import {useNavigate} from "react-router-dom";
import '../App.css';
import {useParams} from "react-router-dom";

export default function UpdatePost ({updatePost}) {
    
    //const [imageURLs, setImageURLs] = useState([]);
    const {blogId} = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        async function findPost() {
        // const data = await fetch("http://localhost:4000/posts/" + blogId);
        const data = await fetch("/posts/" + blogId);
        const post = await data.json();
        setId(post._id)
        setTitle(post.title);
        setDescription(post.description);
        setImages(post.images);
        }
        findPost();
    }, []);

    const [title, setTitle] = useState(' ');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [_id, setId] = useState('');

    const options = { 
        month: 'long', 
        day: '2-digit',
        year: 'numeric', 
      };
    const date =  new Date().toLocaleDateString('en-US', options);
         
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
        updatePost({_id, title, description, images, date})
        navigate('/');
    };
    return (
    <>
    <h1>Update a Blog</h1>
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
            <input type="file" accept="image/*" onChange={onImageChange} />
        </div>
        <input type="submit" value="Submit"/>
    </form>
    </>
)}