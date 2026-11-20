import { useEffect } from 'react';
import {
  ArrowDownToLine,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Printer,
} from 'lucide-react';
import './CV.css';

// Keep the resume content here so personal details and sections are easy to update.
const resumeData = {
  name: 'Bryan Fuentes Pérez',
  specialty: 'Ingeniería en Tecnologías de la Información y Comunicaciones (TIC\'s)',
  email: 'fuentespeez144@gmail.com',
  phone: '772 156 8569',
  location: 'Hidalgo, México',
  linkedin: 'https://www.linkedin.com/in/bryan-fuentes-p%C3%A9rez-8016153b3/',
  github: 'https://github.com/bryanfpp',
  objectiveStart:
    'Estudiante de Ingeniería en Tecnologías de la Información y Comunicaciones (TIC\'s), en búsqueda de una oportunidad de ',
  objectiveEmphasis: 'prácticas profesionales o formación dual',
  objectiveEnd:
    ' en áreas de redes, infraestructura, ciberseguridad e IoT. Me caracterizo por mi capacidad de aprendizaje continuo, rápida adaptación a nuevas tecnologías y disposición para asumir retos en entornos dinámicos. Cuento con pensamiento analítico, iniciativa y habilidades para resolver problemas, aplicar conocimientos técnicos y colaborar en equipos multidisciplinarios. Tengo especial interés en desarrollar soluciones innovadoras mediante tecnologías emergentes, automatización e inteligencia artificial, contribuyendo al cumplimiento de objetivos y a la mejora de procesos.',
  areasOfInterest:
    'Telecomunicaciones, redes y radiofrecuencia; infraestructura tecnológica y computación en la nube; IoT, MQTT y automatización industrial; desarrollo de software, análisis de datos e inteligencia artificial aplicada; electrónica y sistemas automotrices; monitoreo y desarrollo tecnológico.',
  profile:
    'Estudiante de 7.º semestre de Ingeniería en TIC\'s, enfocado en redes empresariales, infraestructura, ciberseguridad e IoT. Me interesa explorar el potencial de la inteligencia artificial y sus aplicaciones en tecnología. Disfruto comprender necesidades, organizar el trabajo y convertir ideas en soluciones prácticas. Me caracterizan el pensamiento analítico, la comunicación efectiva y el aprendizaje continuo.',
  school: 'Instituto Tecnológico Superior del Occidente del Estado de Hidalgo (ITSOEH)',
  educationPeriod: 'Julio de 2023 – diciembre de 2027 (egreso estimado)',
};

const skillGroups = [
  {
    title: 'Redes e infraestructura',
    skills: [
      'Cisco Networking',
      'Cisco IOS',
      'Switching y Routing',
      'VLAN',
      'OSPF',
      'BGP',
      'EIGRP',
      'DHCP',
      'NAT',
      'ACL',
      'GRE VPN',
      'EtherChannel',
      'HSRP',
      'IPv6 y redes mesh',
      'Resolución de problemas de red',
      'Configuración de routers y switches',
      'Cisco Packet Tracer',
    ],
  },
  {
    title: 'Ciberseguridad',
    skills: [
      'Fundamentos de ciberseguridad',
      'Seguridad de redes',
      'Network Support and Security',
      'Control de acceso y autenticación',
    ],
  },
  {
    title: 'Programación y desarrollo',
    skills: [
      'Java',
      'JavaScript',
      'Python',
      'C++',
      'C#',
      'HTML5',
      'React y React Native',
      'Node.js',
      'SQL',
      'MySQL',
      'MongoDB',
    ],
  },
  {
    title: 'Internet de las cosas (IoT)',
    skills: [
      'ESP32',
      'Sensores y microcontroladores',
      'MQTT',
      'MQTT sobre TLS',
      'Thread',
      'Node-RED',
      'InfluxDB',
      'Grafana',
      'Servidores y aplicaciones',
      'Integración de hardware y software',
      'Monitoreo en tiempo real',
    ],
  },
  {
    title: 'Sistemas y tecnologías',
    skills: [
      'Windows',
      'Linux (fundamentos)',
      'IBM Z: z/OS y USS',
      'Git y GitHub',
      'Bases de datos',
      'Arquitectura cliente-servidor',
    ],
  },
];

const professionalSkills = [
  'Pensamiento analítico',
  'Resolución de problemas',
  'Trabajo colaborativo',
  'Comunicación efectiva',
  'Adaptabilidad',
  'Aprendizaje continuo',
  'Organización',
  'Planificación',
  'Comprensión de necesidades',
  'Orientación a soluciones',
  'Responsabilidad',
];

const certifications = [
  { name: 'CCNA: Introduction to Networks', issuer: 'Cisco', date: 'may. 2025' },
  { name: 'CCNA: Switching, Routing, and Wireless Essentials', issuer: 'Cisco', date: 'nov. 2025' },
  { name: 'Network Support and Security', issuer: 'Cisco', date: 'jun. 2024' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco', date: 'jun. 2024' },
  { name: 'Industrial IoT and Control Systems in Energy', issuer: 'Cisco', date: 'sep. 2026' },
  { name: 'Exploring IoT with Cisco Packet Tracer', issuer: 'Cisco', date: 'fecha por confirmar' },
  { name: 'Introduction to IoT', issuer: 'Cisco', date: 'dic. 2024' },
  { name: 'Operating Systems Basics', issuer: 'Cisco', date: 'jun. 2024' },
  { name: 'Introduction to Data Science', issuer: 'Cisco', date: 'jun. 2024' },
  { name: 'Computer Hardware Basics', issuer: 'Cisco', date: 'jun. 2024' },
  {
    name: 'Industrial IoT and Control Systems in Manufacturing',
    issuer: 'Cisco',
    date: 'oct. 2026',
  },
  { name: 'IBM Z Xplore - Concepts', issuer: 'IBM', date: 'nov. 2026' },
  { name: 'IBM Z Xplore - Advanced', issuer: 'IBM', date: 'nov. 2026' },
  { name: 'HiveMQ Certified MQTT Associate', issuer: 'HiveMQ University', date: 'nov. 2026' },
  {
    name: 'Introducción a la Ciencia de Datos',
    issuer: 'Santander Open Academy · IE University',
    date: 'jun. 2024',
  },
  {
    name: 'Google: Inteligencia Artificial y productividad',
    issuer: 'Santander Open Academy',
    date: 'jul. 2024',
  },
];

const innovationExperience = [
  {
    period: 'oct. 2026',
    title: '1.er lugar nacional · Categoría Innovación',
    organization: 'Rally Latinoamericano de Innovación 2026',
    description:
      'Coordiné el desarrollo técnico de un prototipo autónomo de impacto ambiental junto a un equipo multidisciplinario.',
  },
  {
    period: 'oct. 2026',
    title: '2.º lugar internacional · Categoría Innovación',
    organization: 'Rally Latinoamericano de Innovación 2026',
    description:
      'El prototipo del equipo obtuvo el segundo lugar internacional entre participantes de 11 países.',
  },
  {
    period: 'may. 2026',
    title: '1.er lugar en su categoría · Etapa local',
    organization: 'InnovaTecNM 2026 · ITSOEH',
    description:
      'Cumbre Nacional de Desarrollo Tecnológico, Emprendimiento e Innovación.',
  },
];

const projects = [
  {
    title: 'Sistema de monitoreo de calidad del aire mediante IoT',
    details: [
      'Prototipo con sensores y microcontroladores para adquirir y monitorear variables ambientales.',
      'Integración y comunicación de dispositivos IoT; propuesta de plataforma web y aplicación móvil para visualizar datos en tiempo real.',
    ],
  },
  {
    title: 'Sistema de gestión de talleres de reparación',
    details: [
      'Sistema con arquitectura cliente-servidor y base de datos para administrar clientes, equipos e inventario.',
      'Gestión de órdenes de servicio y ventas.',
    ],
  },
  {
    title: 'Soluciones de redes empresariales',
    details: [
      'Diseño y configuración de topologías con VLAN, OSPF, DHCP, NAT y ACL.',
      'Simulación y resolución de problemas con Cisco Packet Tracer.',
    ],
  },
];

function printResume() {
  window.print();
}

function ProfileLink({ label, href, mark }) {
  return href ? (
    <a className="cv-contact-link" href={href} target="_blank" rel="noreferrer">
      <span className="cv-social-mark" aria-hidden="true">{mark}</span>
      <span>{label}</span>
    </a>
  ) : (
    <span className="cv-contact-link cv-contact-placeholder">
      <span className="cv-social-mark" aria-hidden="true">{mark}</span>
      <span>{label} · agregar enlace</span>
    </span>
  );
}

export default function CV() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${resumeData.name} | Currículum profesional`;
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="resume-page">
      <header className="cv-toolbar">
        <a className="cv-toolbar-brand" href="#cv-inicio">
          BF <span>Currículum profesional</span>
        </a>
        <nav className="cv-toolbar-nav" aria-label="Navegación del currículum">
          <a href="#objetivo">Objetivo</a>
          <a href="#formacion">Formación</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#certificaciones">Certificaciones</a>
          <a href="#proyectos">Proyectos</a>
        </nav>
        <div className="cv-toolbar-actions">
          <button
            className="cv-action cv-action-secondary"
            type="button"
            aria-label="Imprimir CV"
            onClick={printResume}
          >
            <Printer size={15} aria-hidden="true" />
            <span>Imprimir CV</span>
          </button>
          <button className="cv-action cv-action-primary" type="button" onClick={printResume}>
            <ArrowDownToLine size={15} aria-hidden="true" />
            <span>Descargar CV en PDF</span>
          </button>
        </div>
      </header>

      <main className="cv-stage">
        <article className="cv-sheet" id="cv-inicio" aria-label={`Currículum de ${resumeData.name}`}>
          <aside className="cv-sidebar">
            <div className="cv-identity">
              <img
                className="cv-photo"
                src={`${import.meta.env.BASE_URL}bryan-fuentes-photo.png`}
                alt={`Fotografía de ${resumeData.name}`}
                width="112"
                height="112"
              />
              <p className="cv-sidebar-name">{resumeData.name}</p>
              <span className="cv-sidebar-rule" />
            </div>

            <section className="cv-sidebar-section cv-contact" id="contacto">
              <h2>Contacto</h2>
              <a className="cv-contact-link" href={`mailto:${resumeData.email}`}>
                <Mail size={14} aria-hidden="true" />
                <span>{resumeData.email}</span>
              </a>
              <span className="cv-contact-link">
                <MapPin size={14} aria-hidden="true" />
                <span>{resumeData.location}</span>
              </span>
              <a className="cv-contact-link" href={`tel:+52${resumeData.phone.replaceAll(' ', '')}`}>
                <Phone size={14} aria-hidden="true" />
                <span>{resumeData.phone}</span>
              </a>
              <ProfileLink label="LinkedIn" href={resumeData.linkedin} mark="in" />
              <ProfileLink label="GitHub" href={resumeData.github} mark="GH" />
            </section>

            <section className="cv-sidebar-section">
              <h2>Perfil profesional</h2>
              <p className="cv-sidebar-copy">{resumeData.profile}</p>
            </section>

            <section className="cv-sidebar-section cv-technical-skills" id="habilidades">
              <h2>Conocimientos técnicos</h2>
              {skillGroups.map(({ title, skills }) => (
                <div className="cv-skill-group" key={title}>
                  <h3>{title}</h3>
                  <p>{skills.join(' · ')}</p>
                </div>
              ))}
            </section>

            <section className="cv-sidebar-section">
              <h2>Habilidades profesionales</h2>
              <ul className="cv-soft-skills">
                {professionalSkills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </section>

            <section className="cv-sidebar-section cv-languages">
              <h2>Idiomas</h2>
              <p><strong>Español:</strong> Nativo</p>
              <p><strong>Inglés:</strong> Intermedio</p>
            </section>
          </aside>

          <div className="cv-main">
            <header className="cv-main-header">
              <span className="cv-kicker">CURRÍCULUM VITAE</span>
              <h1>{resumeData.name}</h1>
              <p className="cv-specialty">{resumeData.specialty}</p>
              <span className="cv-heading-rule" />
            </header>

            <section className="cv-section" id="objetivo">
              <h2>Objetivo profesional</h2>
              <p className="cv-body-copy">
                {resumeData.objectiveStart}
                <strong>{resumeData.objectiveEmphasis}</strong>
                {resumeData.objectiveEnd}
              </p>
              <p className="cv-interest-copy">
                <strong>Áreas de interés:</strong> {resumeData.areasOfInterest}
              </p>
            </section>

            <section className="cv-section" id="formacion">
              <h2>Formación académica</h2>
              <div className="cv-education">
                <span className="cv-section-icon" aria-hidden="true">
                  <GraduationCap size={19} />
                </span>
                <div>
                  <h3>{resumeData.specialty}</h3>
                  <p>{resumeData.school}</p>
                  <span className="cv-meta">{resumeData.educationPeriod} · 7.º semestre</span>
                </div>
              </div>
            </section>

            <section className="cv-section" id="experiencia">
              <h2>Experiencia en innovación</h2>
              <div className="cv-experience-list">
                {innovationExperience.map((experience) => (
                  <article className="cv-experience" key={experience.title}>
                    <span className="cv-experience-period">{experience.period}</span>
                    <div>
                      <h3>{experience.title}</h3>
                      <p className="cv-experience-organization">{experience.organization}</p>
                      <p className="cv-experience-description">{experience.description}</p>
                      {experience.result && (
                        <p className="cv-experience-result">{experience.result}</p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="cv-section" id="certificaciones">
              <h2>Certificaciones y cursos</h2>
              <p className="cv-section-intro">Cisco Networking Academy, IBM, HiveMQ University y Santander Open Academy</p>
              <ul className="cv-certification-list">
                {certifications.map(({ name, issuer, date }) => (
                  <li key={name}>
                    <strong>{name}</strong>
                    <span>{issuer} · {date}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="cv-section" id="proyectos">
              <h2>Proyectos tecnológicos</h2>
              <div className="cv-project-list">
                {projects.map(({ title, details }) => (
                  <article className="cv-project" key={title}>
                    <h3>{title}</h3>
                    <ul>
                      {details.map((detail) => <li key={detail}>{detail}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </article>
        <p className="cv-print-hint">
          Para guardar el PDF, selecciona «Guardar como PDF» en el diálogo de impresión.
        </p>
      </main>
    </div>
  );
}
