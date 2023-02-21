import './App.css';
import Communication from './components/Communication';
import ForStartups from './components/ForStartups';
import HeroBanner from './components/HeroBanner';
import ValueCards from './components/ValueCards';
import Layout from './container/Layout';

function App() {
  return (
    <Layout>
      <HeroBanner />
      <ValueCards />
      <ForStartups />
      <Communication />
    </Layout>
  );
}

export default App;
