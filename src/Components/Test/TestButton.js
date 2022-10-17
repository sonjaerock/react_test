import { useNavigate } from 'react-router-dom';

function TestButton({testId}) {
    const navigate = useNavigate();

    return (
        <div className="button__test">
            <button onClick={() => {navigate('/test/' + testId)}}>test button</button>
        </div>
    );
}

export default TestButton;
