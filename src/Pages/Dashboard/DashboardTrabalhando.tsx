import "./DashboardTrabalhando.css";

const data = [
  { id: 1, status: "Aberto", title: "Bug na tela de login", tecnico: "Carlos", requisito: "Corrigir erro 500", prioridade: "Alta" },
  { id: 2, status: "Em Progresso", title: "Atualizar design", tecnico: "Ana", requisito: "Novo layout para dashboard", prioridade: "Média" },
  { id: 3, status: "Concluído", title: "Melhoria no banco de dados", tecnico: "Bruno", requisito: "Otimizar queries", prioridade: "Baixa" }
];

export default function DashboardTrabalhando() {
  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>Painel Geral</h1>
      </header>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Título</th>
              <th>Técnico</th>
              <th>Requisito</th>
              <th>Prioridade</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.status}</td>
                <td>{item.title}</td>
                <td>{item.tecnico}</td>
                <td>{item.requisito}</td>
                <td>{item.prioridade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
