import { useState } from "react";
import "./DashboardSelecionar.css";
import { FaChevronDown } from "react-icons/fa";

const data = [
  { id: 1, status: "Aberto", title: "Bug na tela de login", requisito: "Corrigir erro 500", prioridade: "Alta" },
  { id: 2, status: "Em Progresso", title: "Atualizar design", requisito: "Novo layout para dashboard", prioridade: "Média" },
  { id: 3, status: "Concluído", title: "Melhoria no banco de dados", requisito: "Otimizar queries", prioridade: "Baixa" }
];

export default function DashboardSelecionar() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>Atribuição de Trabalho</h1>
      </header>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Título</th>
              <th>Requisito</th>
              <th>Prioridade</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <>
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.status}</td>
                  <td>{item.title}</td>
                  <td>{item.requisito}</td>
                  <td>{item.prioridade}</td>
                  <td>
                    <button className="expand-btn" onClick={() => toggleExpand(item.id)}>
                      <FaChevronDown />
                    </button>
                  </td>
                </tr>
                {expandedRow === item.id && (
                  <tr className="expanded-row">
                    <td colSpan={6}>
                      <div className="expanded-content">
                        <p><strong>ID:</strong> {item.id}</p>
                        <p><strong>Status:</strong> {item.status}</p>
                        <p><strong>Título:</strong> {item.title}</p>
                        <p><strong>Requisito:</strong> {item.requisito}</p>
                        <p><strong>Prioridade:</strong> {item.prioridade}</p>
                        <button className="accept-btn">Aceitar</button>
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
