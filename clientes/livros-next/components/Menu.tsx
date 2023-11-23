import Link from "next/link"

interface MenuProps {
  paginaAtiva: string
}

export const Menu: React.FC<MenuProps> = ( {paginaAtiva} ) => { return (
  <div className='mb-5'>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/"></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
              <Link className={paginaAtiva === 'home' ? 'nav-link active' : 'nav-link'} aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={paginaAtiva === 'LivroLista' ? 'nav-link active' : 'nav-link'} aria-current="page" href="/LivroLista">Catalogo</Link>
            </li>
            <li className="nav-item">
              <Link className={paginaAtiva === 'LivroDados' ? 'nav-link active' : 'nav-link'} aria-current="page" href="/LivroDados">Novo</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
)}