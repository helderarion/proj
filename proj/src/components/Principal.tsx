import React from "react"
import Home from "../pages/home.page"

const Principal = () => {
    return (
        <main className="principal">
             <h2> Últimos lançamentos</h2>
            <div className="card">
                <div className="thumb">
                    <img src="" alt="" />
                </div>
            <div className="detalhes">
                <h3> Padrões para Kubernetes</h3>
                    <p> O modo como os....</p>
                <a href="#">Ler mais</a>
             </div>
             </div>
            <div className="card">
                <div className="thumb">
                    <img src="" alt="" />
                </div>
                <div className="detalhes">
                    <h3> Introdução ao Pentest - 2° Edição</h3>
                    <p> Introdução ao Pentest</p>
                    <a href="#">Ler mais</a>
                </div>
            </div>
        </main>
    )
}
export default Principal