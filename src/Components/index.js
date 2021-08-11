import { Route, Switch } from 'react-router';
import Users from './Users'
import CreateUsers from './Users/Create';
function Index() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={CreateUsers} />
                <Route path="/users/create" component={CreateUsers} />
                <Route path="/users" component={Users} />
            </Switch>
        </>
    )
}

export default Index;