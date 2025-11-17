import React from 'react';

function Projects() {
  return (
    <section className="projects-section" id="projects">
      
      <div className="projects-title">
        <h1>Projetos<span>.</span></h1>
      </div>
    
      <p className="projects-description">
        Meu foco principal é desenvolvimento web, criando soluções que envolvem backend, frontend e APIs.
      </p>
    
      <div className="project-wrapper">
        <div className="project-card">
          <img 
            src="/assets/images/clothing-store.png" 
            alt="Projeto Clothing Store" 
            loading="lazy" 
          />
          <div className="project-info">
            <div>
              <h2 className="card-title">Clothing Store</h2>
            </div>
        
            <div>
              <p>
                E-commerce de moda com catálogo de produtos, carrinho de compras e layout responsivo. 
                Focado em experiência do usuário e design moderno.
              </p>
            </div>
            
            <div className="tech">
              <span>React.js</span>
              <span>Context API</span>
              <span>CSS Modules</span>
            </div>
        
            <div>
              <a 
                href="https://clothing-store-taupe.vercel.app" 
                target="_blank" 
                className="project-button"
              >
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
     
      <p className="projects-description">
        Esses são apenas os primeiros passos. Se quiser conversar sobre tecnologia ou possíveis parcerias, fique à vontade para me chamar.
      </p>
    
    </section>
  );
};

export default Projects;