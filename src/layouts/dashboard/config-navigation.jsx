import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Household Register',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'VCA Register',
    path: '/vca',
    icon: icon('ic_user'),
  },
  {
    title: 'Mother Index Register',
    path: '/mother-index',
    icon: icon('ic_user'),
  },
  {
    title: 'HTS',
    path: '/hts',
    icon: icon('ic_user'),
  },
 
];

export default navConfig;
