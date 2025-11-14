import { Routes } from '@angular/router';
import { CadastrarProdutos } from './cadastrar-produtos/cadastrar-produtos';
import { EditarProdutos } from './editar-produtos/editar-produtos';
import { ConsultarProdutos } from './consultar-produtos/consultar-produtos';
//Mapeamento das rotas da aplicação
export const routes: Routes = [
    {
        path: 'cadastrar-produtos', //rota
        component: CadastrarProdutos //componente
    },
    {
        path: 'editar-produtos', //rota
        component: EditarProdutos //componente
    },
    {
        path: 'consultar-produtos', //rota
        component: ConsultarProdutos // componente
    },
    {
        path: '', //rota padrao
        redirectTo: '/consultar-produtos', //redirecionamento
        pathMatch: 'full' //corresponde exatamente a rota vazia
    }
];
