

function breadcrumb(name) {
    switch (name) {
        case 'links.group':

            return {
                title: 'مدیریت سرگروه ها',
                breadcrumb: [
                    { title: 'صفحه اصلی', link: '#', active: false },
                    { title: ' مدیریت سرگروه ها ', link: '/links/groups', active: true },
                ]
            };

            case 'users.index':
                return {
                    title: 'لیست کاربران',
                    breadcrumb: [
                        { title: 'صفحه اصلی', link: '#', active: false },
                        { title: 'مدیریت کاربران', link: '/users', active: false },
                        { title: 'لیست کاربران', link: '#', active: true },
                    ]
                }

        default:
               return {
                title: 'صفحه اصلی',
                breadcrumb: [
                    { title: 'صفحه اصلی', link: '#', active: true },
                ]
            };;
    }
}
export default breadcrumb;