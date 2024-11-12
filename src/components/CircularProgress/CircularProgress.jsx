import  { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const CircularProgress = ({ value, size = 150, strokeWidth = 5, text = '', endpointSize = strokeWidth / 1 }) => {
    // Define the radius and circumference based on the size
    const radius = (size - strokeWidth) / 3;
    const circumference = 2 * Math.PI * radius;
    const progress = useMotionValue(circumference);

    // Define transformations for endpoint position based on progress
    const angle = useTransform(progress, [circumference, 0], [0, 360]);
    const endpointX = useTransform(angle, (a) => size / 2 + radius * Math.cos((a - 90) * (Math.PI / 180)));
    const endpointY = useTransform(angle, (a) => size / 2 + radius * Math.sin((a - 90) * (Math.PI / 180)));

    // State for the counting text animation
    const [count, setCount] = useState(0);

    useEffect(() => {
        let currentValue = 0;
        const interval = setInterval(() => {
            if (currentValue < value) {
                currentValue += 1;
                setCount(currentValue);
            } else {
                clearInterval(interval);
            }
        }, 10); 

        return () => clearInterval(interval);
    }, [value]);

    return (
        <div className="circular-progress-container" style={{ position: 'relative', width: '100%', height: '100%' }}>
            <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`} style={{ maxWidth: '100%' }}>
                {/* Background circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#d6d6d6"
                    strokeWidth={strokeWidth}
                    fill="none"
                />

                {/* Progress path */}
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#FEBF00"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={progress}
                    strokeLinecap="round" 
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: circumference - (circumference * (value / 100)) }}
                    transition={{ duration: 1 }}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`} 
                />

                {/* Endpoint Circle with customizable size */}
                <motion.circle
                    cx={endpointX}
                    cy={endpointY}
                    r={endpointSize} 
                    fill="white"
                    stroke="#FEBF00"
                    strokeWidth="3" 
                />
            </svg>

            {/* Display Text (Animated Counting) */}
            <motion.div
                className="circular-progress-text font-opensans font-heavy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {count}+
            </motion.div>

            {/* Responsive Adjustments */}
            <style jsx>{`
                .circular-progress-container {
                    max-width: 140px;  
                    margin: auto;
                }

                .circular-progress-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 1.5em;
                    color: #0A1425;
                    text-align: center;
                    white-space: nowrap;
                }

                @media (max-width: 1024px) {
                    /* For laptops */
                    .circular-progress-container {
                        max-width: 80px;
                    }
                    .circular-progress-text {
                        font-size: 1.3em;
                    }
                }

                @media (max-width: 768px) {
                    /* For tablets */
                    .circular-progress-container {
                        max-width: 150px;
                    }
                    .circular-progress-text {
                        font-size: 1.2em;
                    }
                }

                @media (max-width: 480px) {
                    /* For mobiles */
                    .circular-progress-container {
                        max-width: 100px;
                    }
                    .circular-progress-text {
                        font-size: 1em;
                    }
                }
            `}</style>
        </div>
    );
};

export default CircularProgress;
