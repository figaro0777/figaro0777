import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/InputGroup';

const Feedback = () => {
    return (
        <div>
            <InputGroup size="sm">
                <InputGroup.Prepend>
                    <InputGroup.Text>With textarea</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>
        </div>
        );
};

export default Feedback;