import { useState, useContext } from "react"
import FirebaseContext from "../Utils/FirebaseContext"
import AlunoService from "../Services/AlunoService"

const Criar = () =>{

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [ira, setIra] = useState()
    const [mensagemSucesso, setMensagemSucesso] = useState("");
    const [mensagemErro, setMensagemErro] = useState("");

    const firebase = useContext(FirebaseContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const novoAluno = {nome, curso, ira}

        if (!nome || !curso || ira === "") {
            setMensagemErro("Por favor, preencha todos os campos.");
            return;
        }

        AlunoService.criar(
            firebase.getFirestoreDb(),
            (aluno) => {
                console.log(aluno)
            
                setMensagemSucesso("Aluno criado com sucesso!")
                setMensagemErro("");
                setNome("")
                setCurso("")
                setIra("")

                setTimeout(() => {
                    setMensagemSucesso("")
                }, 3000)
            },
            novoAluno
        )
    }

    const handleIraChange = (e) => {
        const value = Math.max(0, Math.min(10, Number(e.target.value)));
        setIra(value);
    };

    return(
        <div>
            <h1>Criar Aluno</h1>
            {mensagemSucesso && (
                <div className="alert alert-success" role="alert">
                    {mensagemSucesso}
                </div>
            )}
            {mensagemErro && (
                <div className="alert alert-danger" role="alert">
                    {mensagemErro}
                </div>
            )}
            <form className="form-content">
                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input className="form-control"
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Curso</label>
                    <input className="form-control"
                        type="text"
                        name="curso"
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Ira</label>
                    <input className="form-control"
                        type="number"
                        name="ira"
                        value={ira}
                        min={0}
                        max={10}
                        onChange={handleIraChange}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                    >
                        Criar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Criar