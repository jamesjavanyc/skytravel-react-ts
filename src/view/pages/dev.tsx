import { baseURL } from "@/constants"
import {request} from "@/model/api/axios-request"

const Dev = () => {
    const testEcho = ():string=>{
        console.log(request)
        return "success";
    }


    return (
        <>
            <p>Welcome, developer!</p>
            <p>Development server location: {baseURL}</p>
            <p>{testEcho()}</p>
        </>
    )
}

export default Dev