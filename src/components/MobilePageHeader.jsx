import { ChevronLeft } from 'lucide-react';
import useMobileStore from '#store/mobile';

const MobilePageHeader = ({ title, rightAction, onBack }) => {
  const { closePage } = useMobileStore();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      closePage();
    }
  };

  return (
    <header className="mobile-header">
      <button className="mobile-header-back" onClick={handleBack}>
        <ChevronLeft size={20} />
        <span>Go back</span>
      </button>
      <h1 className="mobile-header-title">{title}</h1>
      <div className="mobile-header-right">
        {rightAction || <span style={{ width: 80 }} />}
      </div>
    </header>
  );
};

export default MobilePageHeader;
