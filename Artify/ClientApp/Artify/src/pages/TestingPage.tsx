import Button from "../components/UI/Button";

const TestingPage = () =>{
    return <>

    <Button
    onClick={() =>{
    fetch('https://localhost:3000/api/ShotsApi/GetShots',
        {method: 'GET',  mode: 'cors'}
    );
    }
    }>
        Click on me
    </Button>
    </>

}
export default TestingPage;