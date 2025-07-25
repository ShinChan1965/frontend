import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Form is valid only when both email and password are not empty
        setIsValid(email.trim() !== "" && password.trim() !== "");
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        if (!isValid) return;

        try {
            const response = await axios.post("https://frontend-h6xv.onrender.com/user/auth/login", {
                email,
                password
            });

            console.log(response.data);
            alert("Login successful!");
            navigate('/home');
        } catch (error) {
            console.error(error);
            alert("Login Failed!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 bg-white shadow-lg">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                id="email"
                                placeholder="leroy@jenkins.com"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                            </div>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="*****"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button
                                disabled={!isValid}
                                type="submit"
                                onMouseEnter={() => setIsMouseOver(true)}
                                onMouseLeave={() => setIsMouseOver(false)}
                                className={`w-full px-8 py-3 font-semibold rounded-md ${
                                    isMouseOver ? "bg-violet-700" : "bg-violet-600"
                                } text-white disabled:bg-violet-300`}
                            >
                                Sign in
                            </button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600">
                            Don't have an account yet?
                            <a rel="noopener noreferrer" href="#" className="hover:underline text-violet-600"> Sign up</a>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
