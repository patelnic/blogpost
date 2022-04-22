import React, {useState, useEffect} from "react" ;
import {useNavigate} from "react-router-dom";
import '../App.css';
import {useParams} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function UpdatePost ({updatePost}) {
    
    //const [imageURLs, setImageURLs] = useState([]);
    const {blogId} = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        async function findPost() {
        const data = await fetch("http://localhost:4000/posts/" + blogId);
        //const data = await fetch("/posts/" + blogId);
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
    <h2 className="createblog">Update a Blog</h2>
    <Form className="formsize" onSubmit = {onSubmit}>
        <Form.Group className="ms-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} required/>
        </Form.Group>
        <Form.Group className="ms-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} onChange={(e) => {setDescription(e.target.value)}} required/>
        </Form.Group>
        <Form.Group className="ms-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={onImageChange}/>
        </Form.Group>
        <Button type="submit">Submit</Button>
    </Form>
    </>
)}