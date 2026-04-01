import MobilePageHeader from '#components/MobilePageHeader';

const MobileImage = ({ data }) => {
  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <div className="mobile-image">
      <MobilePageHeader title={name || 'Image'} />

      <div className="mobile-image-preview">
        {imageUrl && (
          <img src={imageUrl} alt={name || 'Image'} />
        )}
      </div>
    </div>
  );
};

export default MobileImage;
