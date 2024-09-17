import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

const MyNavbar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
              <a className="navbar-brand" href="/">AP2 WEB</a>
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
                                  Alunos
                          </a>
                          <ul className="dropdown-menu">
                              <li>
                                  <a href="components/CRUD/aluno/Criar" className="dropdown-item">Criar</a>
                              </li>
                              <li>
                                  <a href="./CRUD/Aluno/Editar.js" className="dropdown-item">Listar</a>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}

export default MyNavbar;