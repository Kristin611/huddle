import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate, useParams } from 'react-router-dom';
import './HuddleModal.css';

const HuddleModal = ({ isOpen, onClose, user_id }) => {

    // if (!isOpen) {
    //     return null;
    // }

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
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
        setError(''); //clear any previous error

        const payload = {
            huddleTitle: title,
            author,
            huddleText: text,
            user_id
        };

        //console.log('Payload:', payload);

        try {
            const response = await fetch('http://localhost:3000/api/huddle', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(payload),
            });

            console.log('Full response:', response);

            const result = await response.json();

            if (response.ok) {
                console.log('Huddle created:', result)
                setTitle('');
                setAuthor('');
                setText('');
                onClose();
                navigate(`/profile/${id}`);
            } else {
                console.error('Huddle not created:', result.message)
                setError(result.message || 'Failed to create huddle. Please try again.')
            }

        } catch (error) {
            console.error('Huddle error:', error)
            setError('An error occured. Please try again.')
        }
    };



  return (
    <>
        <Modal className='huddle-modal' isOpen={isOpen} onRequestClose={onClose} contentLabel='Huddle Modal'>
            <form className='huddle-form' onSubmit={handleSubmit}>
                <h3>Create Huddle</h3>
                <div>
                    <input 
                    value={title}
                    name='title'
                    onChange={handleTitleChange}
                    type="text"
                    placeholder='New Huddle title here...' 
                    />
                </div>
                <div>
                    <input 
                    value={author}
                    name='author'
                    onChange={handleAuthorChange}
                    type="text" 
                    placeholder='Write your name here...'
                    />
                </div>
                <div>
                    <input 
                    value={text}
                    name='text'
                    onChange={handleTextChange}
                    type="text" 
                    placeholder='Write your Huddle content here...'
                    className='text-area'
                    />
                </div>
                <button type='submit'>Publish</button>
            </form>
        </Modal>
    </>
  )
}

export default HuddleModal

