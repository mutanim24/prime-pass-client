import { Avatar, Button, Divider, Icon, Input, Sidebar } from 'keep-react';
import { ArchiveTray, Chat, Gear, List, MagnifyingGlass, ShoppingCart, SignIn, SquaresFour, Users } from 'phosphor-react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Main = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogout = async () => {
        logOut()
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div className='flex'>
            <div className='w-2/12 h-screen sticky top-0'>

                <Sidebar>
                    <Sidebar.Header className="space-y-2.5">
                        <div className="flex items-center justify-between">
                            <h5 className="font-bold text-green-800">
                                Prime Pass
                            </h5>
                            <Button variant="outline" shape="icon" color="primary" className="border-none">
                                <List size={24} />
                            </Button>
                        </div>
                        <div>
                            <fieldset className="relative max-w-md">
                                <Input placeholder="Search here" className="ps-11" />
                                <Icon>
                                    <MagnifyingGlass size={18} color="#AFBACA" />
                                </Icon>
                            </fieldset>
                        </div>
                    </Sidebar.Header>
                    <Sidebar.Body>
                        <Sidebar.Item>
                            <SquaresFour size={24} />
                            <Link to='/'>Home</Link>
                        </Sidebar.Item>
                        <Sidebar.Item>
                            <ShoppingCart size={24} />
                            Products
                        </Sidebar.Item>
                        <Sidebar.Item>
                            <ArchiveTray size={24} />
                            Download
                        </Sidebar.Item>
                        <Sidebar.Item>
                            <Chat size={24} />
                            <Link to="/login">Login</Link>
                        </Sidebar.Item>
                        <Sidebar.Item>
                            <Gear size={24} />
                            <Link to="/sign-up">Sign Up</Link>
                        </Sidebar.Item>
                        <Sidebar.Item className='cursor-pointer' onClick={handleLogout}>
                            <Users size={24} />
                            Log Out
                        </Sidebar.Item>
                        <Sidebar.Item>
                            <SignIn size={24} />
                            Log Out
                        </Sidebar.Item>
                    </Sidebar.Body>
                    <Divider className="my-3" />
                    <Sidebar.Footer className="flex items-center gap-2">
                        <div>
                            {user && <Avatar shape="circle" img={user.photoURL} />}
                        </div>
                        <div>
                            {user && <p className="mb-0 text-body-3 font-medium text-metal-600">{user.displayName}</p>}
                            <p className="text-body-4 font-normal text-metal-400">Web Developer</p>
                        </div>
                    </Sidebar.Footer>
                </Sidebar>

            </div>
            <div className='w-10/12 p-8'>
                <Outlet></Outlet>
                {/* <Footer></Footer> */}
            </div>

        </div>
    );
};

export default Main;
