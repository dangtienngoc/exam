import Loadable from 'react-loadable';
import { Loading } from '../../components/Loading';

export default Loadable({
  loader: () => import('./Weather'),
  loading: Loading,
});