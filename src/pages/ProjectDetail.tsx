import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { projects } from '../data';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.slug === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" />;
  }

  return (
    <article className="pt-24 pb-32">
      <div className="container max-w-3xl">
        <Link to="/#work" className="inline-flex items-center gap-2 text-[#6E6153] hover:text-[#2B2118] mb-8 font-semibold transition-colors">
          <span aria-hidden="true">←</span> Back to Work
        </Link>
        
        <header className="mb-12">
          <p className="case-tag mb-4 inline-block px-3 py-1 bg-[#2B2118]/10 rounded-full text-[#2B2118] opacity-80 font-bold text-sm">{project.tag}</p>
          <h1 className="font-['Baloo_2'] font-bold text-4xl md:text-5xl leading-tight mb-6">{project.title}</h1>
          <p className="text-xl text-[#6E6153] leading-relaxed">{project.shortDescription}</p>
        </header>

        <div className="bg-white rounded-2xl border border-[#2B2118]/10 shadow-xl shadow-[#2B2118]/5 p-8 md:p-12 mb-12">
          {project.content ? (
            <>
              <h2 className="font-['Baloo_2'] font-bold text-2xl mb-6">Project Summary</h2>
              <p className="text-[#2B2118] text-lg leading-relaxed whitespace-pre-wrap">
                {project.content}
              </p>
            </>
          ) : (
            <div className="text-center py-4">
              <p className="text-[#6E6153] text-lg leading-relaxed mb-8">
                Full case study coming soon. In the meantime, check out the game itself.
              </p>
              <a
                href={project.steamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center gap-2"
              >
                CHECK ON STEAM →
              </a>
            </div>
          )}
        </div>

        {project.results && project.results.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {project.results.map((result, idx) => (
              <div key={idx} className="bg-[#C2E2FA] rounded-xl p-6 border border-[#2B2118]/5">
                <p className="text-sm font-bold text-[#6E6153] mb-2">{result.label}</p>
                <p className="font-['Baloo_2'] font-bold text-3xl text-[#2B2118]">{result.value}</p>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-20 text-center">
          <h3 className="font-['Baloo_2'] font-bold text-2xl mb-6">Want to see similar results for your game?</h3>
          <a href="/#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </article>
  );
}
