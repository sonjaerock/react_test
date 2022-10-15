import { useParams } from 'react-router-dom';

function Main() {
    const { testId } = useParams();
    return (
        <div className="main">
            test page 입니다 testId : {testId}
        </div>
    );
}

export default Main;
