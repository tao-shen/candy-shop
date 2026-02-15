import { Folder, ArrowRight } from 'lucide-react';
import { useMemo } from 'react';
import { SKILLS_DATA, SKILL_CATEGORIES } from '../../data/skillsData';
import { useLanguage } from '../../contexts/LanguageContext';

export interface TagData {
  name: string;
  count: number;
  exports: string[];
  icon?: string;
}

export function Categories({ onSelectCategory }: { onSelectCategory: (tag: string) => void }) {
  const { t } = useLanguage();

  // Dynamically calculate tag counts from actual skill data
  const tags = useMemo<TagData[]>(() => {
    const tagMap = new Map<string, TagData>();

    SKILLS_DATA.forEach((skill) => {
      const skillTags = skill.tags.length > 0 ? skill.tags : [skill.category];
      skillTags.forEach((tag) => {
        const existing = tagMap.get(tag) || { name: tag, count: 0, exports: [] };
        existing.count += 1;
        if (existing.exports.length < 3) {
          existing.exports.push(skill.id.split('-').pop() || skill.id);
        }
        // Try to match tag to category icons if possible
        const catMatch = SKILL_CATEGORIES.find((c) => c.name === tag);
        if (catMatch) existing.icon = catMatch.icon;

        tagMap.set(tag, existing);
      });
    });

    return Array.from(tagMap.values())
      .sort((a, b) => b.count - a.count);
  }, []);

  return (
    <section className="py-20 bg-primary/10 border-t border-primary/20" id="categories-section">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 font-candy flex items-center gap-3 text-foreground">
          <Folder className="w-6 h-6 text-primary" />
          <span>{t('categories.title')}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tags.map((tag) => (
            <button
              key={tag.name}
              onClick={() => onSelectCategory(tag.name)}
              className="group bg-card p-6 rounded-xl border border-primary/20 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-primary/30"
              aria-label={`Browse ${tag.name} tag — ${tag.count} skills`}
            >
              <div className="font-mono text-sm">
                <div className="text-primary/70 mb-2">// {tag.count} skills</div>
                <div className="text-primary mb-1">
                  "{tag.name.toLowerCase()}": <span className="text-foreground">{'{'}</span>
                </div>
                <div className="pl-4 text-foreground-secondary">
                  <span className="text-foreground-secondary">exports</span>: [
                  {tag.exports.map((e, idx) => (
                    <span key={idx}>
                      <span className="text-accent">'{e}'</span>
                      {idx < tag.exports.length - 1 && ', '}
                    </span>
                  ))}
                  ]
                </div>
                <div className="text-foreground">{'}'}</div>
              </div>

              <div className="mt-4 pt-4 border-t border-primary/10 flex items-center justify-between text-xs font-mono text-foreground-secondary group-hover:text-primary transition-colors duration-200">
                <span>$ cd ./{tag.name.toLowerCase()} && ls</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
