import { Route, Router, Switch } from 'react-router';
import Dashboard from './Dashboard'
function Index(){
    return (
        <>
            <Switch>
                <Route path="/users/create" component={Dashboard} />
            </Switch>
        </>
    )
}

export default Index;