import TestButton from "../Components/Test/TestButton";
import TestLink from "../Components/Test/TestLink";
import CountButton from "../Components/Counter/CountButton";
import CountButtonRTK from "../Components/Counter/CountButtonRTK";
import ApiCallComponent from "../Components/Test/ApiCallComponent";

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
