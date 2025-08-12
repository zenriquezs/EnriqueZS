class CertificationsRenderer {
    constructor() {
        this.certificationsContainer = null;
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.render());
        } else {
            this.render();
        }
    }

    render() {
        this.certificationsContainer = document.querySelector('#certificaciones .row.g-4');
        
        if (!this.certificationsContainer) {
            console.error('No se encontró el contenedor de certificaciones');
            return;
        }
        this.certificationsContainer.innerHTML = '';
        const certifications = getFeaturedCertifications();
        certifications.forEach(cert => {
            const certElement = this.createCertificationCard(cert);
            this.certificationsContainer.appendChild(certElement);
        });
    
        this.reinitializeAnimations();
    }

    createCertificationCard(cert) {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 animate-on-scroll';

        const skillsBadges = cert.skills.map(skill => 
            `<span class="badge ${skill.class}">${skill.name}</span>`
        ).join('\n                                ');        
        const imagePlaceholder = `
            <div class="certificate-placeholder d-none"
                style="height: 200px; display: flex; align-items: center; justify-content: center; background: #f8f9fa; border: 2px dashed #dee2e6; border-radius: 8px;">
                <div class="text-center text-muted">
                    <i class="bi bi-image" style="font-size: 3rem;"></i>
                    <p class="mt-2 mb-0">Imagen del certificado</p>
                    <small>Próximamente</small>
                </div>
            </div>`;

        col.innerHTML = `
            <div class="card h-100">
                <!-- Espacio para imagen del certificado -->
                <div class="certificate-image-container p-3 text-center bg-light">
                    <img src="${cert.image}" alt="${cert.title}"
                        class="img-fluid rounded shadow-sm" style="max-height: 200px; object-fit: contain;"
                        onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                    ${imagePlaceholder}
                </div>

                <div class="card-body text-center">
                    <h5 class="card-title">${cert.title}</h5>
                    <p class="card-text text-muted">${cert.description}</p>
                    <p class="text-muted small mb-3">
                        <i class="bi bi-calendar me-1"></i>${cert.date} • ID: ${cert.credentialId}
                    </p>
                    <div class="mb-3">
                        <a href="${cert.certificateUrl}" target="_blank" class="btn btn-primary btn-sm me-2">
                            <i class="bi bi-eye me-1"></i>Ver Certificado
                        </a>
                        <a href="${cert.verifyUrl}" target="_blank" class="btn btn-outline-primary btn-sm">
                            <i class="bi bi-share me-1"></i>Verificar
                        </a>
                    </div>
                    <div class="mt-auto">
                        ${skillsBadges}
                    </div>
                </div>
            </div>
        `;

        return col;
    }

    reinitializeAnimations() {    
        if (window.ScrollAnimations) {
            const scrollAnimations = new ScrollAnimations();
        }
    }
    addCertification(certData) {
        CERTIFICATIONS_DATA.push({
            id: Date.now(), 
            ...certData,
            featured: certData.featured || false
        });
        
        if (certData.featured) {
            this.render(); 
        }
    }
    updateCertification(id, updatedData) {
        const certIndex = CERTIFICATIONS_DATA.findIndex(c => c.id === id);
        if (certIndex !== -1) {
            CERTIFICATIONS_DATA[certIndex] = { ...CERTIFICATIONS_DATA[certIndex], ...updatedData };
            this.render();
        }
    }

    removeCertification(id) {
        const certIndex = CERTIFICATIONS_DATA.findIndex(c => c.id === id);
        if (certIndex !== -1) {
            CERTIFICATIONS_DATA.splice(certIndex, 1);
            this.render();
        }
    }

    filterByIssuer(issuer) {
        const filteredCerts = getCertificationsByIssuer(issuer);
        this.renderCertifications(filteredCerts);
    }


    renderCertifications(certifications) {
        if (!this.certificationsContainer) return;
        
        this.certificationsContainer.innerHTML = '';
        
        certifications.forEach(cert => {
            const certElement = this.createCertificationCard(cert);
            this.certificationsContainer.appendChild(certElement);
        });
        
        this.reinitializeAnimations();
    }
}
const certificationsRenderer = new CertificationsRenderer();