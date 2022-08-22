import {SignUpByPhone} from "@/features/auth/SignUpByPhone";


export const SignUp = () => {

    return (
        <div style={{backgroundColor: "#E5E5E5"}}>
            <div className="container" style={{padding: "20px 15px"}}>
                <SignUpByPhone/>
            </div>
        </div>
    );
};