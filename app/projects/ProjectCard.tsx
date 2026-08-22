import { Code, Eye, CircleCheck } from "lucide-react";
import Reveal from "../Reveal";
import ExpandableCardBody from "./ExpandableCardBody";
import { PROJECT_BADGE_ICONS, type ProjectData } from "./projects-data";

interface ProjectCardProps {
  project: ProjectData;
  hidden: boolean;
}

/** Renders one project's full card markup from its data object, so every card in the grid shares one identical structure. */
export default function ProjectCard({ project, hidden }: ProjectCardProps) {
  const BadgeIcon = PROJECT_BADGE_ICONS[project.badgeIcon];
  const hasActions = !!project.actions && project.actions.length > 0;

  return (
    <Reveal
      as="article"
      id={project.id}
      className={`project-detail-card ${hidden ? "is-hidden" : ""}`.trim()}
      data-category={project.category}
      delayMs={project.delayMs}
    >
      <div className="card-header-band"></div>
      <div className="card-body">
        <span className={`project-badge ${project.badgeVariant}`}>
          <BadgeIcon size={13} />
          {" "}
          {project.badgeLabel}
        </span>
        <h2 className="card-title">{project.title}</h2>
        <p className="card-subtitle">{project.subtitle}</p>
        <ExpandableCardBody>
          <p className="card-desc">{project.desc}</p>
          {project.highlightPanels?.map((panel, i) => (
            <div className="highlight-panel" key={i} style={panel.style}>
              {panel.content}
            </div>
          ))}
          {project.features && project.features.length > 0 && (
            <ul className="feature-list">
              {project.features.map((feature, i) => (
                <li key={i}>
                  <CircleCheck />
                  {feature}
                </li>
              ))}
            </ul>
          )}
          {project.archSteps && project.archSteps.length > 0 && (
            <div className="arch-steps">
              {project.archSteps.map((step) => (
                <div className="arch-step" key={step.num}>
                  <div className="step-num">{step.num}</div>
                  <span>{step.text}</span>
                </div>
              ))}
            </div>
          )}
          <div className="tech-tags">
            {project.tags.map((tag) => (
              <span className="tech-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </ExpandableCardBody>
      </div>
      {hasActions ? (
        <div className="card-actions">
          {project.actions!.map((action) => (
            <a
              key={action.href}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-btn ${action.variant}`}
            >
              {action.icon === "live" ? <Eye size={17} /> : <Code size={17} />}
              {" "}
              {action.label}
            </a>
          ))}
        </div>
      ) : (
        // No live/GitHub links for this project — render an empty, same-height
        // spacer with the divider so the card still ends with consistent
        // structure/rhythm instead of looking cut off next to its neighbors.
        <div className="card-actions-empty" aria-hidden="true" />
      )}
    </Reveal>
  );
}
