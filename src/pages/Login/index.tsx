import { useAuth } from "@/hooks/useAuth";
import { User } from "@/types/user";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
import Card from "../../components/Card";

export default function () {
    const [error, setError] = useState<string|null>(null)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const { setUser } = useAuth()
    const [users, setUsers] = useState<(User & { password: string })[]>([])

    // For random user features
    const fetchUsers = () => {
        axios.get('/users')
            .then(res => {
                setUsers(res.data.users)
            })
    }

    function submitForm(e: FormEvent) {
        e.preventDefault()
        setError(null)
        axios.post('/auth/login', {
            username, password
        })
        .then(res => {
            setUser(res.data)
            navigate("/")
        }).catch(err => {
            setError(err.response.data.message)
        })
    }

    const randomUser = (e: React.MouseEvent) => {
        e.preventDefault()
        const randomUser = users[Math.floor(Math.random() * users.length)]
        console.log(randomUser)
        setUsername(randomUser.username)
        setPassword(randomUser.password)
    }

    useEffect(() => fetchUsers(), [])

    return (
        <>
            <div className="page single py-10">
                <section className="container">
                    <div className="section-header mb-8">
                        <h2 className="section-title mb-3">
                            Login
                        </h2>
                    </div>
                    <div className="section-body">
                        <Card>
                            {error && <Alert type="danger">{error}</Alert>}
                            <form action="" method="post" onSubmit={submitForm}>
                                <div className="input-group mb-3">
                                    <label htmlFor="username">Username</label>
                                    <input 
                                        id="username" type="text" className="input"  value={
                                            username}
                                        onInput={(e) => setUsername((e.target as HTMLInputElement).value)}
                                        />
                                </div>
                                <div className="input-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        id="password" type="password" className="input" value={password}
                                        onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
                                        />
                                </div>
                                <a href="#" className="text-blue-500 mb-3 block" onClick={randomUser}>Random user?</a>
                                <Button>Submit</Button>
                            </form>
                        </Card>
                    </div>
                </section>
            </div>
        </>
    )
}