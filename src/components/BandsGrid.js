import '../App.css';
import { BandGridItem } from './BandGridItem';
import { useSelector } from 'react-redux';

export const BandsGrid = () => {
  const bands  = useSelector(state => state.bands.bands) || [];

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {bands.length > 0 && bands.map(band => <BandGridItem band={band} key={band.id} />)}
    </div>
  );
};
