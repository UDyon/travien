import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TestPage() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const fetchGreeting = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/data');
                setGreeting(response.data); // 백엔드에서 받은 데이터를 state에 저장
            } catch (error) {
                console.error('Error fetching the greeting:', error);
            }
        };

        fetchGreeting();
    }, []);

    return (
        <div>
            <h1>Greeting from Spring Boot:</h1>
            <h2>Now Testing...</h2>
            <p>{greeting}</p>
        </div>
    );
}

export default TestPage;