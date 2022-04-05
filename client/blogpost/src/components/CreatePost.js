import React, {useState, useEffect} from "react" ;
import {useNavigate} from "react-router-dom";
import '../App.css'


export default function CreatePost ({createPost}){
    const [title, setTitle] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    const [date, setDate] = useState(" "); 
    const navigate = useNavigate();
    useEffect(() => {
        if(images.length < 1) return;
        const newImageURLs = [];
        images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
        setImageURLs(newImageURLs);
    }, [images]
    );
    function onImageChange(e) {
        setImages([...e.target.files]);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(!title || !description){
            alert("Enter all the details!");
            navigate('/createblog');
            return;
        }
        createPost({title, description, images, date})
        setTitle('');
        setDescription('');
        setImages('');
        setDate('');
        navigate("/");
    };
    return (
    <>
    <form onSubmit = {onSubmit}>
        <div className="form-control">
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
        </div>
        <div className="form-control">
            <label>Description</label>
            <textarea type="text" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
        </div>
        <div className="form-control">
            <label>Image</label>
            <input type="file" multiple accept="image/*" onChange={onImageChange} />
            {imageURLs.map(imageSrc => <img src={imageSrc} />) }
        </div>
        <div className="form-control">
            <label>Date and Time</label>
            <input type="text" value={date} onChange={(e) => {setDate(e.target.value)}}></input>
        </div>
        <input type="submit" value="Submit"/>
    </form>
    </>
)}