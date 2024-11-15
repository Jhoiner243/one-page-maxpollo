import {FlipWordsComponent} from '../components/ui/flip-words'
import {GithubNavbarReactRouter} from '../../../src/components/github-navbar-react-router'
import { ThemeProvider } from '../../../src/components/ui/theme-provider'
const Home: React.FC = () => {
    return (
        <ThemeProvider>
        <div className='container mx-auto '>
        <nav >
            <GithubNavbarReactRouter />
        </nav>
    <div className='flex-col justify-between'>
        <FlipWordsComponent />
    </div>
    </div>
    </ThemeProvider>
    )
    
}

export default Home