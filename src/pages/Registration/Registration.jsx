import { Button, Divider, Icon, Input, Label } from "keep-react";
import { Envelope, FacebookLogo, GoogleLogo, Lock, Person } from "phosphor-react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Registration = () => {
    const { googleLogin, createUser, setUser } = useContext(AuthContext);

    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location?.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                setUser(result.user)
                // navigate(from)
                // console.log(result.user);
            })
            .catch(err => {
                console.log(err.message);
            });
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirm_password.value;

        if (password.length < 6) {
            window.alert("Password is less than 6 digit")
        }
        else if (password !== confirmPass) {
            window.alert("Password Not Match")
        }
        else {
            createUser(email, password, name)
                .then(result => {
                    const loggedUser = result.user;
                    return updateProfile(loggedUser, {
                        displayName: name
                    })
                    // navigate(from)
                })
                .then(err => {
                    console.log(err);
                })
        }


        console.log(name, email, password, confirmPass);
        // Add your login logic here
    }

    return (
        <div>
            <form onSubmit={handleRegistration} className="mx-auto max-w-md space-y-2 rounded-lg border p-8 shadow-md">
                <fieldset className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <div className="relative">
                        <Input type="text" name="name" placeholder="Enter Name" className="ps-11" />
                        <Icon>
                            <Person size={19} color="#AFBACA" />
                        </Icon>
                    </div>
                </fieldset>
                <fieldset className="space-y-1">
                    <Label htmlFor="name">Email</Label>
                    <div className="relative">
                        <Input name="email" type="email" placeholder="Enter email" className="ps-11" />
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
                <fieldset className="space-y-1">
                    <Label htmlFor="confirm_password">Confirm Password</Label>
                    <div className="relative">
                        <Input name="confirm_password" id="confirm_password" placeholder="Confirm password" type="password" className="ps-11" />
                        <Icon>
                            <Lock size={19} color="#AFBACA" />
                        </Icon>
                    </div>
                </fieldset>

                <Button type="submit" className="!mt-3 block w-full" size="xs" color="secondary" variant="outline">
                    Create Account
                </Button>
                <Divider>Or</Divider>
                <div className="flex items-center justify-between gap-3">
                    <Button onClick={handleGoogleLogin} size="xs" variant="outline" color="secondary" className="w-full">
                        <GoogleLogo size={20} className="mr-1.5" />
                        Google
                    </Button>
                    <Button size="xs" variant="outline" color="secondary" className="w-full">
                        <FacebookLogo size={20} className="mr-1.5" />
                        Facebook
                    </Button>
                </div>
                <div className="text-center pt-4">
                    <p className="text-sm mx-auto">Have you an account <Link to={"/login"} className="text-green-800 underline">Login Now</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Registration;