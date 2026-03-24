import { useState } from 'react';
import './CreateTenantForm.css';

function CreateTenantForm() {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  return (
    <div className="create-tenant-page">
      {/* Animated organic contour shape - centered behind blocks */}
      <div className="organic-bg">
        <svg className="organic-shape" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outermost contour - large asymmetric organic blob */}
          <path d="M520 50 C620 70, 710 130, 750 250 C780 340, 770 430, 720 520 C680 590, 620 660, 530 710 C440 750, 340 760, 250 720 C160 680, 90 610, 55 510 C20 410, 30 300, 80 210 C130 130, 210 70, 310 50 C400 35, 460 40, 520 50Z" stroke="rgba(255,255,255,0.07)" strokeWidth="1.2" fill="none"/>
          {/* 2nd contour */}
          <path d="M500 90 C590 108, 670 160, 710 260 C740 340, 730 420, 685 500 C648 562, 595 625, 515 668 C430 705, 340 712, 260 678 C182 645, 120 582, 88 490 C58 400, 66 305, 110 225 C152 150, 225 100, 310 85 C388 72, 445 78, 500 90Z" stroke="rgba(255,255,255,0.065)" strokeWidth="1.2" fill="none"/>
          {/* 3rd contour */}
          <path d="M485 135 C562 150, 635 195, 668 278 C698 348, 690 415, 652 482 C620 538, 572 592, 502 630 C425 662, 345 668, 275 638 C208 610, 152 555, 125 475 C98 395, 105 315, 142 245 C178 178, 242 135, 315 122 C378 112, 430 120, 485 135Z" stroke="rgba(255,255,255,0.058)" strokeWidth="1.2" fill="none"/>
          {/* 4th contour */}
          <path d="M470 178 C535 192, 598 228, 628 298 C652 358, 648 412, 615 465 C588 512, 548 558, 488 590 C418 620, 350 624, 290 598 C232 575, 185 528, 162 458 C140 390, 145 325, 175 265 C205 208, 258 170, 322 160 C372 152, 418 158, 470 178Z" stroke="rgba(255,255,255,0.05)" strokeWidth="1.2" fill="none"/>
          {/* 5th contour */}
          <path d="M455 220 C510 232, 565 262, 590 318 C612 368, 608 408, 580 450 C558 486, 525 522, 472 550 C412 575, 355 578, 305 558 C255 538, 218 500, 198 442 C180 385, 185 335, 208 285 C232 240, 275 208, 330 200 C368 194, 408 200, 455 220Z" stroke="rgba(255,255,255,0.042)" strokeWidth="1.2" fill="none"/>
          {/* 6th contour */}
          <path d="M440 260 C485 270, 530 295, 552 340 C572 380, 568 410, 548 442 C530 468, 502 492, 458 512 C405 532, 358 534, 318 518 C278 502, 250 472, 235 425 C220 380, 225 345, 242 308 C260 275, 292 250, 338 242 C372 236, 405 242, 440 260Z" stroke="rgba(255,255,255,0.035)" strokeWidth="1.2" fill="none"/>
          {/* 7th contour */}
          <path d="M425 298 C460 306, 498 328, 515 362 C530 392, 528 415, 512 438 C498 458, 478 475, 445 490 C400 508, 362 510, 332 498 C302 486, 280 462, 268 428 C258 395, 262 368, 275 340 C290 315, 312 298, 348 292 C378 288, 402 290, 425 298Z" stroke="rgba(255,255,255,0.028)" strokeWidth="1.2" fill="none"/>
          {/* 8th contour - innermost */}
          <path d="M412 335 C438 342, 465 358, 478 382 C490 405, 488 420, 478 438 C468 452, 455 465, 432 475 C405 488, 375 490, 352 480 C328 470, 312 452, 305 430 C298 408, 302 390, 312 370 C322 352, 340 340, 362 336 C382 332, 398 332, 412 335Z" stroke="rgba(255,255,255,0.02)" strokeWidth="1.2" fill="none"/>
        </svg>
      </div>

      <button className="back-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"/>
          <polyline points="12 19 5 12 12 5"/>
        </svg>
        Voltar
      </button>

      <h1 className="page-title">Criar Novo Tenant</h1>
      <p className="page-description">
        Preencha os dados para criar um novo tenant no ecossistema The Obsidian Ledger.
      </p>

      {/* Two-column layout */}
      <div className="form-grid">
        {/* Left column: Informações Básicas + Usuário Administrador */}
        <div className="form-column-left">
          {/* Informações Básicas */}
          <div className="form-section glass-card">
            <div className="section-header">
              <div className="section-icon green">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
              </div>
              <h2 className="section-title">Informações Básicas</h2>
            </div>

            <div className="form-group">
              <label className="form-label">Nome do Tenant</label>
              <div className="form-input-wrapper">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Ex: Acme Corp Finance"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Subdomínio</label>
                <div className="form-input-wrapper">
                  <input
                    type="text"
                    className="form-input has-suffix"
                    placeholder="acme-fin"
                  />
                  <span className="input-suffix">.obsidian.io</span>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Domínio Customizado</label>
                <div className="form-input-wrapper">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="finance.acme.com"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Usuário Administrador */}
          <div className="form-section glass-card">
            <div className="section-header">
              <div className="section-icon green">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h2 className="section-title">Usuário Administrador</h2>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">E-mail do Admin</label>
                <div className="form-input-wrapper">
                  <span className="input-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  <input
                    type="email"
                    className="form-input has-icon"
                    placeholder="admin@tenant.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Senha</label>
                <div className="form-input-wrapper">
                  <span className="input-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </span>
                  <input
                    type="password"
                    className="form-input has-icon"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Plano e Limites */}
        <div className="form-column-right">
          <div className="form-section glass-card form-section-full-height">
            <div className="section-header">
              <div className="section-icon red">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h2 className="section-title">Plano e Limites</h2>
            </div>

            <div className="form-group">
              <label className="form-label">Selecione o Plano</label>
              <div className="plan-selector">
                <div 
                  className={`plan-card ${selectedPlan === 'free' ? 'selected' : ''}`}
                  onClick={() => setSelectedPlan('free')}
                >
                  <div className="plan-radio">
                    <div className="plan-radio-inner"></div>
                  </div>
                  <div className="plan-info">
                    <div className="plan-name">Free</div>
                    <div className="plan-desc">Básico para teste e pequenos volumes</div>
                  </div>
                </div>

                <div 
                  className={`plan-card ${selectedPlan === 'pro' ? 'selected' : ''}`}
                  onClick={() => setSelectedPlan('pro')}
                >
                  <div className="plan-radio">
                    <div className="plan-radio-inner"></div>
                  </div>
                  <div className="plan-info">
                    <div className="plan-name">Pro</div>
                    <div className="plan-desc">Suporte total e análise avançada</div>
                  </div>
                  <span className="plan-badge">Popular</span>
                </div>

                <div 
                  className={`plan-card ${selectedPlan === 'enterprise' ? 'selected' : ''}`}
                  onClick={() => setSelectedPlan('enterprise')}
                >
                  <div className="plan-radio">
                    <div className="plan-radio-inner"></div>
                  </div>
                  <div className="plan-info">
                    <div className="plan-name">Enterprise</div>
                    <div className="plan-desc">Segurança máxima e SLA dedicado</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group" style={{ marginTop: '20px' }}>
              <label className="form-label">Máximo de Usuários</label>
              <div className="form-input-wrapper">
                <span className="input-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </span>
                <input
                  type="number"
                  className="form-input has-icon"
                  placeholder="10"
                  defaultValue="10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTenantForm;
