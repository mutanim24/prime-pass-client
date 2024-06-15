import { Button, Divider, Icon, Input, Label } from "keep-react";
import { Envelope, FacebookLogo, GoogleLogo, Lock, Person } from "phosphor-react";

const Registration = () => {
    return (
        <div>
            <form className="mx-auto max-w-md space-y-2 rounded-lg border p-8 shadow-md">
                <fieldset className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <div className="relative">
                        <Input placeholder="Enter Name" className="ps-11" />
                        <Icon>
                            <Person size={19} color="#AFBACA" />
                        </Icon>
                    </div>
                </fieldset>
                <fieldset className="space-y-1">
                    <Label htmlFor="name">Email</Label>
                    <div className="relative">
                        <Input placeholder="Enter email" className="ps-11" />
                        <Icon>
                            <Envelope size={19} color="#AFBACA" />
                        </Icon>
                    </div>
                </fieldset>
                <fieldset className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                        <Input id="password" placeholder="Enter password" type="password" className="ps-11" />
                        <Icon>
                            <Lock size={19} color="#AFBACA" />
                        </Icon>
                    </div>
                </fieldset>
                <fieldset className="space-y-1">
                    <Label htmlFor="password">Confirm Password</Label>
                    <div className="relative">
                        <Input id="password" placeholder="Confirm password" type="password" className="ps-11" />
                        <Icon>
                            <Lock size={19} color="#AFBACA" />
                        </Icon>
                    </div>
                </fieldset>

                <Button className="!mt-3 block w-full" size="xs" color="secondary" variant="outline">
                    Create Account
                </Button>
                <Divider>Or</Divider>
                <div className="flex items-center justify-between gap-3">
                    <Button size="xs" variant="outline" color="secondary" className="w-full">
                        <GoogleLogo size={20} className="mr-1.5" />
                        Google
                    </Button>
                    <Button size="xs" variant="outline" color="secondary" className="w-full">
                        <FacebookLogo size={20} className="mr-1.5" />
                        Facebook
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Registration;