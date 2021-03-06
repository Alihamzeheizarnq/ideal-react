import { Route, Switch } from 'react-router';
import LinkGroups from './Links/LinkGroups';
import Links from './Links/Links';
import Users from './Users'
import CreateUsers from './Users/Create';
import Home from './Home/Index';
import PortofiloCreate from './Portofilo/Create';
import PortofiloList from './Portofilo/List';
import PortofiloEdit from './Portofilo/Edit';
import PostCreate from './Post/Create';
import PostList from './Post/List';
import PostsCategory from './Post/Category';
import PostEdit from './Post/Edit';
import Menu from './Menu';
import NotFound from './errors/404';
import TicketList from './Ticket/List';
import CommentsCreate from './Comments/Create';
import Comments from './Comments/List';
import CommentsEdit from './Comments/Edit';
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
                <Route path="/posts" exact component={PostList} />
                <Route path="/posts/create" component={PostCreate} />
                <Route path="/posts/edit/:id" component={PostEdit} />
                <Route path="/posts/categories" component={PostsCategory} />
                <Route path="/menus" component={Menu} />
                <Route path="/tickets" component={TicketList} />
                <Route path="/comments" exact  component={Comments} />
                <Route path="/comments/create" exact component={CommentsCreate} />
                <Route path="/comments/edit/:id" component={CommentsEdit} />
                <Route path="/404" component={NotFound} />
                <Route component={NotFound} />

            </Switch>
        </>
    )
}

export default Index;