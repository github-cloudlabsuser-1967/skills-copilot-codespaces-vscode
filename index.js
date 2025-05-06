import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

// Example data: Array of arrays of objects
const data = [
    [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" }
    ],
    [
        { id: 3, name: "Bob" },
        { id: 4, name: "Alice" }
    ]
];

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState("type markdown here");

    // Extract names from the nested data array
    const names = data.flatMap(group => group.map(item => item.name));

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
            <textarea
                style={{ width: '100%', height: '200px', marginBottom: '20px', fontSize: '16px' }}
                value={markdown}
                onChange={handleChange}
            />
            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
                <p><strong>Names:</strong> {JSON.stringify(names)}</p>
            </div>
        </div>
    );
}