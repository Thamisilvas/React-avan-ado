import { Switch, Route,  } from 'react-router-dom';
import {lazy,Suspense} from 'react';

//import Produtos from './Pages/Produtos'
const  Produtos = lazy(() => import('./Pages/Produtos'));

//import Pedidos from './Pages/Pedidos'
const  Pedidos = lazy(() => import('./Pages/Pedidos'));

//import Contato from './Pages/Contato'
const  Contato = lazy(() => import('./Pages/Contato'));


function Rotas() {
    return(

       <Suspense fallback={<div>Carregando....</div>}>
        <Switch>
            <Route exact path="/produtos" component={Produtos} />
            <Route exact path="/pedidos" component={Pedidos} />
            <Route exact path="/contatos" component={Contato} />
        </Switch>
        </Suspense>
       
    )
}

export default Rotas;