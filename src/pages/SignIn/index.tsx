import {SignInByPhone} from "@/features/auth/SignInByPhone";


export const SignIn = () => {
    return (
        <div style={{backgroundColor: "#E5E5E5"}}>
            <div className="container" style={{padding: "20px 15px"}}>
                <SignInByPhone/>
            </div>
        </div>
    );
};