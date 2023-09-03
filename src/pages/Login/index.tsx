import Button from "../../components/Button";
import Card from "../../components/Card";

export default function () {
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
                            <form action="" method="post">
                                <div className="input-group mb-3">
                                    <label htmlFor="username">Username</label>
                                    <input id="username" type="text" className="input"/>
                                </div>
                                <div className="input-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input id="password" type="text" className="input"/>
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