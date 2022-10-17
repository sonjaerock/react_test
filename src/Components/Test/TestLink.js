import { Link } from 'react-router-dom';

function TestLink({testId}) {
    return (
        <div className="link__test">
            <Link to={'/test/' + testId}>123</Link>
        </div>
    );
}

export default TestLink;
