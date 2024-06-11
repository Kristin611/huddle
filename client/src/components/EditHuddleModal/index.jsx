import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate, useParams } from 'react-router-dom';
import './EditHuddleModal.css';


const EditHuddle = ({ isOpen, onClose, huddle }) => {
    const [title, setTitle] = useState(huddle.huddleTitle);
    const [author, setAuthor] = useState(huddle.author);
    const [text, setText] = useState(huddle.huddleText);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const payload = {
            huddleTitle: title,
            author,
            huddleText: text
        };

        try {
            const response = await fetch(`http://localhost:3000/api/huddle/${huddle.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(payload),
            });

            console.log('Edit huddle response object:', response)

            const result = await response.json();

            if (response.ok) {
                console.log('Huddle updated:', result);
                onClose();
                navigate(`/profile/${id}`);
            } else {
                console.error('Huddle not updated:', result.message);
                setError(result.message || 'Failed to update Huddle. Please try again.')
            }
        } catch (error) {
            console.error('Huddle error:', error);
            setError('An error occured, please try again.');
        }
    };

  return (
    <>
        <Modal className='edit-huddle-modal' isOpen={isOpen} onRequestClose={onClose} contentLabel='Edit Huddle Modal'>
            <form className='edit-huddle-form' onSubmit={handleSubmit}>
                <h3>Edit Huddle</h3>
                <div>
                    <input 
                    value={title}
                    name='title'
                    onChange={handleTitleChange}
                    type="text" 
                    />
                </div>
                <div>
                    <input 
                    value={author}
                    name='author'
                    onChange={handleAuthorChange}
                    type="text" 
                    />
                </div>
                <div>
                    <input 
                    value={text}
                    name='text'
                    onChange={handleTextChange}
                    type="text" 
                    className='text-area'
                    />
                </div>
                <button type='submit'>Update</button>
            </form>
        </Modal>
    </>
  )
}

export default EditHuddle