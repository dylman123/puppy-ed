import React from 'react';
import { useParams } from "react-router-dom";

export default function LearnerModulePage() {
    let { slug } = useParams();

    return (
        <div className='learnerModulePage'>
            {slug}
        </div>
    );
}
