import AlunoService from "../Services/AlunoService"
import FirebaseContext from "../Utils/FirebaseContext"

import { useEffect, useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"

const AlunosCurso = () => {

    const [alunos, setAluno] = useState([])
    const [mediaIra, setMediaIra] = useState(0) // Estado para armazenar a média
    const [verAprovados, setVerAprovados] = useState(false)
    const navigate = useNavigate()
    const firebase = useContext(FirebaseContext)

    useEffect(
        () => {
            AlunoService.listar(
                firebase.getFirestoreDb(),
                (alunos) => {
                    setAluno(alunos)
                    calcularMedia(alunos) // Chame a função de calcular a média
                }
            )
        }, []
    )

    const mostrarAlunosAprovados = () => {
        setVerAprovados(!verAprovados);
    }

    // Função para calcular a média do IRA
    const calcularMedia = (alunos) => {
        if (alunos.length === 0) {
            setMediaIra(0)
        } else {
            const totalIra = alunos.reduce((total, aluno) => total + Number(aluno.ira), 0)
            setMediaIra( (totalIra / alunos.length) )
        }
    }

    const handleDelete = (id) => {
        if (window.confirm(`Deseja excluir id = ${id}`)) {
            AlunoService.apagar(
                firebase.getFirestoreDb(),
                (response) => {
                    const result = alunos.filter((aluno) => aluno.id !== id)
                    setAluno(result)
                    calcularMedia(result) // Recalcule a média após apagar um aluno
                },
                id
            )
        }
    }

    // Função para agrupar os alunos pelos cursos
    const agruparAlunosPorCurso = (alunos) => {
        const grupos = {}
        alunos.forEach((aluno) => {
            if (!grupos[aluno.curso]) {
                grupos[aluno.curso] = []
            }
            grupos[aluno.curso].push(aluno)
        })
        return grupos
    }

    const renderizarAlunosPorCurso = () => {
        const alunosAgrupados = agruparAlunosPorCurso(alunos)

        return Object.keys(alunosAgrupados).map((curso) => {
            return (
                <tbody key={curso}>
                    <tr className="table-secondary">
                        <th colSpan="5" style={{ textAlign: 'center' }}>{curso}</th>
                    </tr>
                    {alunosAgrupados[curso].map((aluno) => {
                        const alunoAbaixoMedia = Number(aluno.ira) < mediaIra
                        const alunoAprovado = Number(aluno.ira) >= 7
                        const corNotas = verAprovados 
                            ? (alunoAbaixoMedia ? { color: 'red' } : { color: '#00FF00', fontWeight: 'bold' }) 
                            : {}

                        return (
                            <tr key={aluno.id}>
                                <td style={corNotas}>{aluno.nome}</td>
                                <td>{aluno.curso}</td>
                                <td style={
                                    alunoAprovado ? {
                                        backgroundColor: 'grey', color: '#00FF00', fontWeight: 'bold', WebkitTextStroke: '1px #555'
                                        } : {color: 'black'}
                                    }>{aluno.ira}</td>
                                <td>
                                    <div className="button-content">
                                        <Link
                                            to={`/aluno/editar/${aluno.id}`}
                                            className="btn btn-primary"
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
                    })}
                </tbody>
            )
        })
    }

    return (
        <div className="page-content">
            <h1>Lista de Alunos Organizados por Curso</h1>
            <div>
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Curso</th>
                            <th scope="col">Ira</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    {renderizarAlunosPorCurso()}
                    <tfoot>
                        {/* Nova linha para exibir a média do IRA */}
                        <tr>
                            <td colSpan="5" style={{ fontWeight: 'bold', color: 'blue' }}>Média IRA: {mediaIra.toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </table>
                <button onClick={mostrarAlunosAprovados}>
                    {verAprovados ? "Ocultar Reprovados" : "Ver Reprovados"}
                </button>
            </div>
            <hr />
        </div>
    )
}

export default AlunosCurso;
