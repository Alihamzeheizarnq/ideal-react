import { Route, Switch } from 'react-router';
import LinkGroups from './Links/LinkGroups';
import Links from './Links/Links';
import Users from './Users'
import CreateUsers from './Users/Create';
function Index() {
    return (
        <>
            <Switch>
                <Route path="/users/create" component={CreateUsers} />
                <Route path="/users" component={Users} />
                <Route path="/links/groups" component={LinkGroups} />
                <Route path="/links" component={Links} />
            </Switch>
        </>
    )
}

export default Index;