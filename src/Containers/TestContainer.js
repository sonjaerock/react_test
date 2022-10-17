import TestButton from "../Components/TestButton";
import TestLink from "../Components/TestLink";
import CountButton from "../Components/CountButton";
import CountButtonRTK from "../Components/CountButtonRTK";
import ApiCallComponent from "../Components/ApiCallComponent";

function TestContainer() {
    return (
        <div className="container">
            <TestButton testId={"button"}></TestButton>
            <TestLink testId={"link"}></TestLink>
            <CountButton></CountButton>
            RTK
            <CountButtonRTK></CountButtonRTK>
            api Call
            <ApiCallComponent></ApiCallComponent>
        </div>
    );
}

export default TestContainer;
