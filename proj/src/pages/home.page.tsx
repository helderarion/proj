import Profile from  '../components/profile.component'
import '.App.css'
import Logo from '../components/Logo'
import Navegacao from '../components/Navegacao'
import Principal from '../components/Principal'


const HomePage = () => {
    return(
        <div> 
            <header className="topo">
                <Logo/>
                <Navegacao/>
            </header>
            <Principal/>
        </div>
    );
}
export default HomePage;