import AlunoService from "../Services/AlunoService"
import FirebaseContext from "../Utils/FirebaseContext"

import { useEffect, useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"

const Listar = () => {

    const [alunos, setAluno] = useState([])
    const navigate = useNavigate()
    const firebase = useContext(FirebaseContext)

    useEffect(
        () => {
            AlunoService.listar(
                firebase.getFirestoreDb(),
                (alunos) => {
                    setAluno(alunos)
                }
            )
        }, []
    )

    const handleDelete = (id) => {
        if (window.confirm(`Deseja excluir id = ${id}`)) {
          AlunoService.apagar(
            firebase.getFirestoreDb(),
            (response) => {
              const result = alunos.filter((aluno) => aluno.id!==id)
              setAluno(result)
            },
            id
          )
        }
      }

    const renderizarAlunos = () => {
        const vetorResultado = alunos.map(
            (aluno) => {
                return (
                    <tr>
                        <th scope="row">{aluno.id}</th>
                        <td>{aluno.nome}</td>
                        <td>{aluno.curso}</td>
                        <td>{aluno.ira}</td>
                        <td>
                            <div className="button-content">
                                <Link
                                    to={`/aluno/editar/${aluno.id}`}
                                    className="btn  btn-primary"
                                >
                                    Editar
                                </Link>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(aluno.id)}
                                >
                                    Apagar
                                </button>
                            </div>
                        </td>
                    </tr>
                )
            }
        )
        return vetorResultado;
    };

    return (
        <div className="page-content">
            <h1>Listar Aluno</h1>
            <div>
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Curso</th>
                            <th scope="col">Ira</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderizarAlunos()}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Listar