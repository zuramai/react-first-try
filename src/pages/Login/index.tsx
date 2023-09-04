import axios from "axios";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useState } from "react";
import Alert from "../../components/Alert";

export default function () {
    const [error, setError] = useState<string|null>(null)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function submitForm(e: SubmitEvent) {
        e.preventDefault()
        setError(null)
        axios.post('/auth/login', {
            username, password
        })
        .then(res => [
            console.log(res)
        ]).catch(err => {
            setError(err.response.data.message)
        })
    }

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
                                        id="username" type="text" className="input" 
                                        onInput={(e) => setUsername((e.target as HTMLInputElement).value)}
                                        />
                                </div>
                                <div className="input-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        id="password" type="password" className="input" 
                                        onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
                                        />
                                </div>
                                <Button>Submit</Button>
                            </form>
                        </Card>
                    </div>
                </section>
            </div>
        </>
    )
}