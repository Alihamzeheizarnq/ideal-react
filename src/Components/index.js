import { Route, Switch } from 'react-router';
import LinkGroups from './Links/LinkGroups';
import Links from './Links/Links';
import Users from './Users'
import CreateUsers from './Users/Create';
import Home from './Home/Index';
import PortofiloCreate from './Portofilo/Create';
import PortofiloList from './Portofilo/List';
import PortofiloEdit from './Portofilo/Edit';
function Index() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/users/create" component={CreateUsers} />
                <Route path="/users" component={Users} />
                <Route path="/links/groups" component={LinkGroups} />
                <Route path="/links" component={Links} />
                <Route path="/portofilo" exact component={PortofiloList} />
                <Route path="/portofilo/create" component={PortofiloCreate} />
                <Route path="/portofilo/edit/:id" component={PortofiloEdit} />
            </Switch>
        </>
    )
}

export default Index;