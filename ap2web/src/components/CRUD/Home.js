import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

import { Outlet, Link } from "react-router-dom"

const Home = () => {
    return (
        <div>   
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">AP2 Web</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="/" className="nav-link active">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Aluno
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/aluno/criar">Criar</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/aluno/listar">Listar</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/aluno/alunoscurso">Visualizar por Curso</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>
    )
}

export default Home

{/* <div>
<h1>Home</h1>
<Link to="/aluno/listar">Listar </Link>
<Link to="/aluno/editar">Editar </Link>
<Link to="/aluno/criar">Criar </Link>
<Outlet/>
</div> */}