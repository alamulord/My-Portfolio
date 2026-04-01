import { useState } from 'react';
import MobilePageHeader from '#components/MobilePageHeader';
import MobileBottomBar from '#components/MobileBottomBar';
import { techStack } from '#constants';
import { FolderOpen, Search, MoreHorizontal, Check } from 'lucide-react';

const bottomTabs = [
  { id: 'folders', label: 'Folders', icon: <FolderOpen size={20} /> },
  { id: 'search', label: 'Search', icon: <Search size={20} /> },
];

const MobileTerminal = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const totalItems = techStack.reduce(
    (sum, cat) => sum + cat.items.length,
    0,
  );

  return (
    <div className="mobile-notepad">
      <MobilePageHeader
        title="Tech Stack"
        rightAction={
          <button className="mobile-header-action">
            <MoreHorizontal size={20} className="text-[#007AFF]" />
          </button>
        }
      />

      {/* Notes-style title area */}
      <div className="mobile-notepad-content">
        <div className="mobile-notepad-meta">
          <span className="mobile-notepad-date">
            {new Date().toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>

        <h2 className="mobile-notepad-title">My Tech Stack</h2>
        <p className="mobile-notepad-subtitle">
          {totalItems} technologies across {techStack.length} categories
        </p>

        {/* Category cards — Notes checklist style */}
        <div className="mobile-notepad-list">
          {techStack.map(({ category, items }) => (
            <div key={category} className="mobile-notepad-category">
              <button
                className="mobile-notepad-category-header"
                onClick={() => toggleCategory(category)}
              >
                <div className="mobile-notepad-category-left">
                  <div className="mobile-notepad-check">
                    <Check size={14} />
                  </div>
                  <span className="mobile-notepad-category-name">
                    {category}
                  </span>
                </div>
                <span className="mobile-notepad-category-count">
                  {items.length}
                </span>
              </button>

              {/* Expandable items */}
              <div
                className={`mobile-notepad-items ${
                  expandedCategory === category ? 'expanded' : ''
                }`}
              >
                {items.map((item, i) => (
                  <div key={i} className="mobile-notepad-item">
                    <div className="mobile-notepad-item-dot" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary footer */}
        <div className="mobile-notepad-footer">
          <p>
            <Check size={14} className="inline text-[#00A154]" />
            <span className="text-[#00A154] ml-1">
              {techStack.length} of {techStack.length} categories loaded (100%)
            </span>
          </p>
        </div>
      </div>

      <MobileBottomBar
        items={bottomTabs}
        activeId="folders"
        onSelect={() => {}}
      />
    </div>
  );
};

export default MobileTerminal;
