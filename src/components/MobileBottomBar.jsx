import clsx from 'clsx';

const MobileBottomBar = ({ items, activeId, onSelect }) => {
  return (
    <nav className="mobile-bottom-bar">
      {items.map((item) => (
        <button
          key={item.id}
          className={clsx('mobile-tab-item', activeId === item.id && 'active')}
          onClick={() => onSelect?.(item.id)}
        >
          {item.icon && (
            typeof item.icon === 'string'
              ? <img src={item.icon} alt={item.label} className="mobile-tab-icon" />
              : <span className="mobile-tab-icon">{item.icon}</span>
          )}
          <span className="mobile-tab-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default MobileBottomBar;
