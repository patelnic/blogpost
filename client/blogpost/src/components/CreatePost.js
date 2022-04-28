import React, {useState} from "react" ;
import {Route, useNavigate} from "react-router-dom";
import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';

export default function CreatePost ({createPost}) {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState(" ");
    const [images, setImages] = useState([]);

    const { user } = useAuth0();
    const { name, picture, email } = user;
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
        createPost({title, description, images, date, email})
        setTitle('');
        setDescription('');
        setImages('');
        navigate('/');
    };
    return (
    <>
    <h2 className="createblog">Create a Blog</h2>
    <Form className="formsize" onSubmit = {onSubmit}>
        <Form.Group className="ms-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => {setTitle(e.target.value)}} required/>
        </Form.Group>
        <Form.Group className="ms-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" placeholder="Enter description" rows={3} value={description} onChange={(e) => {setDescription(e.target.value)}} required/>
        </Form.Group>
        <Form.Group className="ms-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" placeholder="Choose image" accept="image/*" onChange={onImageChange} required/>
        </Form.Group>
        <Button type="submit">Submit</Button>
    </Form>
    </>
)}