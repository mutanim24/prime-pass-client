import { Button, Divider, Icon, Input, Label } from "keep-react";
import { Envelope, FacebookLogo, GoogleLogo, Lock } from "phosphor-react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const { googleLogin, facebookLogin, setUser } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                setUser(result.user)
                console.log(result.user);
            })
            .catch(err => {
                console.log(err.message);
            });
    }

    const handleFacebookLogin = () => {
        facebookLogin()
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err.message);
        })
    }


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(email, pass);
        // Add your login logic here
    }

    return (
        <div>
            <form onSubmit={handleLogin} className="mx-auto max-w-md space-y-2 rounded-lg border p-8 shadow-md">
                <fieldset className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                        <Input name="email" placeholder="Enter email" className="ps-11" />
                        <Icon>
                            <Envelope size={19} color="#AFBACA" />
                        </Icon>
                    </div>
                </fieldset>
                <fieldset className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                        <Input name="password" id="password" placeholder="Enter password" type="password" className="ps-11" />
                        <Icon>
                            <Lock size={19} color="#AFBACA" />
                        </Icon>
                    </div>
                </fieldset>
                <Button className="!mt-3 block w-full" size="xs" color="secondary" variant="outline">
                    Login
                </Button>
                <Divider>Or</Divider>
                <div className="flex items-center justify-between gap-3">
                    <Button onClick={handleGoogleLogin} size="xs" variant="outline" color="secondary" className="w-full">
                        <GoogleLogo size={20} className="mr-1.5" />
                        Google
                    </Button>
                    <Button onClick={handleFacebookLogin} size="xs" variant="outline" color="secondary" className="w-full">
                        <FacebookLogo size={20} className="mr-1.5" />
                        Facebook
                    </Button>
                </div>

            </form>
        </div>
    );
};

export default Login;
